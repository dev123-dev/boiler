const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
//const config = require('config');
const { check, validationResult } = require("express-validator");
const StaffDetails = require("../../models/StaffDetails");

const {
  SERVER_ERROR,
  USERNAME_REQUIRED_INVALID,
  PASSWORD_INVALID,
  USERNAME,
  PASSWORD,
  INVALID_CREDENTIALS,
  JWT_SECRET,
  STATUS_CODE_400,
  STATUS_CODE_500,
  EXPIRES_IN,
} = require("../../common/constant/constants");

const {
  LOGIN,
  LOAD_USER,
  GET_ALL_USERS,
  FILTER_USERS,
} = require("../../common/constant/api-constants");

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/login",
  [
    check(USERNAME, USERNAME_REQUIRED_INVALID).exists(),
    check(PASSWORD, PASSWORD_INVALID).exists(),
  ],

  async (req, res) => {
    const errors = "";

    // if (!errors.isEmpty()) {
    //   return res.status(STATUS_CODE_400).json({ errors: errors.array() });
    // }

    //retriving Data
    const { userName, password } = req.body;

    try {
      //userName Check In DB
      let staffDetails = await StaffDetails.findOne({
        userName: "renita",
        password: password,
      });

      if (!staffDetails) {
        return res.status(STATUS_CODE_400).json({
          errors: [{ msg: INVALID_CREDENTIALS }],
        });
      }

      // //Match The Passwords
      // const isMatch = await compare(password, StaffDetails.password);
      // console.log(isMatch);
      // if (!isMatch) {
      //   return res
      //     .status(STATUS_CODE_400)
      //     .json({ errors: [{ msg: INVALID_CREDENTIALS }] });
      // }

      //Create Payload
      const payload = {
        user: {
          id: staffDetails._id,
        },
      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN }, (err, token) => {
        if (err) {
          throw err;
        }

        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(STATUS_CODE_500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

// @route    GET api/auth
// @desc     Get Authenticated User
// @access   Private
router.get("/load-user", auth, async (req, res) => {
  try {
    const user = await StaffDetails.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route    GET api/auth
// @desc     Get All Users
// @access   Private
router.get(GET_ALL_USERS, auth, async (req, res) => {
  try {
    const user = await StaffDetails.find().select("-password"); //.select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route    POST api/auth
// @desc     POST Filtered Users Based on Search
// @access   Private
router.post(FILTER_USERS, auth, async (req, res) => {
  const { alphaSearch } = req.body;
  console;
  try {
    let query = {};
    if (alphaSearch !== "") {
      query = {
        sdName: {
          $regex: new RegExp("^" + alphaSearch, "i"),
        },
      };
    }
    staffDetails = await StaffDetails.find(query).select("-password");

    res.json(staffDetails);
  } catch (err) {
    console.error(err.message);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

module.exports = router;
