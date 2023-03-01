const router = require("express").Router();

const GroupDetails = require("../../models/GroupDetails");

//add user
router.route("/addgroup").post((req, res) => {
  let Group = new GroupDetails(req.body);

  Group.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all user group
router.route("/getgroup").get((req, res) => {
  GroupDetails.find()
    .sort({ groupStatus: 1 })

    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//deactive user group
router.route("/deactivegroup").post((req, res) => {
  let data = req.body;
  GroupDetails.updateOne(
    { groupName: data.groupName },
    {
      $set: {
        groupStatus: "Deactive",
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
