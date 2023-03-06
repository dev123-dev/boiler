const router = require("express").Router();
const DesignationDetails = require("../../models/DesignationDetails");
const DesignationHistroy = require("../../models/DesignationHistroy");
//add user
router.route("/adddesignation").post((req, res) => {
  let Designation = new DesignationDetails(req.body);

  Designation.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all desg
router.route("/getDesignation").post((req, res) => {
  let body = req.body;

  DesignationDetails.find({ orgId: body.orgId })
    .sort({ designationStatus: 1 })

    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//edit
router.route("/editdesignation").post((req, res) => {
  let data = req.body;

  let DegHis = new DesignationHistroy(req.body);
  DegHis.save(req.body).then(() => console.log("Histroy entered for CAtegory"));

  DesignationDetails.updateOne(
    { _id: data.desigId, orgId: data.orgId },
    {
      $set: {
        designationName: data.designationName,
        EditById: data.EditById,
        EditByName: data.EditByName,
        EditByDateTime: data.EditByDateTime,
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
