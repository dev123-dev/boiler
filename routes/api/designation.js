const router = require("express").Router();
const DesignationDetails = require("../../models/DesignationDetails");

//add user
router.route("/adddesignation").post((req, res) => {
  // console.log(req.body)
  console.log("hitt");
  let Designation = new DesignationDetails(req.body);

  Designation.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all cat
router.route("/getDesignation").post((req, res) => {
  let body = req.body;
  //   console.log("hitt");
  DesignationDetails.find({ orgId: body.orgId })
    .sort({ designationStatus: 1 })

    .then((data) => {
      // console.log(data);
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});


//edit

router.route("/editdesignation").post((req, res) => {
  let data = req.body;
  // console.log("request", req.body);
  // console.log("backend", data.orgId);
  console.log("api ", data);
  DesignationDetails.updateOne(
    { _id: data.desId, orgId: data.orgId },
    {
      $set: {
        designationName: data.designationName,
        //categoryDesp: data.categoryDesp,
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
  // console.log(data)
});

module.exports = router;
