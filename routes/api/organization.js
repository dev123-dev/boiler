const router = require("express").Router();
const OrgDetails = require("../../models/OrganizationDetails");
const OrgHistroy = require("../../models/OrganizationHistroy");
const mongoose = require("mongoose");

//add organization
router.route("/addorganization").post((req, res) => {
  let Org = new OrgDetails(req.body);

  Org.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all organization

router.route("/allorganizationdetails").get((req, res) => {
  OrgDetails.find()
    .sort({ orgStatus: 1 })
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//get all details with status active for dropdown
router.route("/").get((req, res) => {
  OrgDetails.find({ orgStatus: "Active" })
    .sort({ orgStatus: 1 })
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//deactive Org
router.route("/deactiveorg").post((req, res) => {
  let data = req.body;

  OrgDetails.updateOne(
    { _id: data.Org_id },
    {
      $set: {
        orgStatus: "Deactive",
        orgDeactiveReason: data.deactive_reason,
        DeactiveById: data.DeactiveById,
        DeactiveByName: data.DeactiveByName,
        DeactiveByDateTime: data.DeactiveByDateTime,
      },
    }
  )
    .then((data) => {
      res.status(200).json("success");
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//edit Org
router.route("/editorganization").post((req, res) => {
  let data = req.body;

<<<<<<< HEAD
    let data = req.body;
    let OrgHis = new OrgHistroy(req.body)
    OrgHis.save(req.body).then(()=>console.log("Histroy entered"))

    OrgDetails.updateOne(
        { _id:  data.OrganizationId },
        {
            $set: {
                orgName:data.OrganizationName, 
                email:data.OrganizationEmail,
                startDate:data.OrganizationStartdate,
                phoneNumber:data.OrganizationNumber,
                address:data.OrganizationAddress,
                endDate:data.OrganizationEnddate,
                EditById: data.EditById,
                EditByName:data.EditByName,
                EditByDateTime:data.EditByDateTime,
            },
        }
    )
        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);
=======
  let OrgHis = new OrgHistroy(req.body);
  OrgHis.save(req.body).then(() => console.log("Histroy entered"));

  OrgDetails.updateOne(
    { _id: data.OrganizationId },
    {
      $set: {
        orgName: data.OrganizationName,
        email: data.OrganizationEmail,
        startDate: data.OrganizationStartdate,
        phoneNumber: data.OrganizationNumber,
        address: data.OrganizationAddress,
        endDate: data.OrganizationEnddate,
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
>>>>>>> 8763f4fa2923a75a5c4f41c13dda1769f5f87dd9

//renwel Org
router.route("/renewalorganization").post((req, res) => {
  let data = req.body;

  OrgDetails.updateOne(
    { _id: data.OrganizationId },
    {
      $set: {
        startDate: data.OrganizationStartdate,
        endDate: data.OrganizationEnddate,
        orgStatus: "Active",
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
