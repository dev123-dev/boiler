const router = require("express").Router();
const OrgDetails = require("../../models/OrganizationDetails");
const mongoose = require("mongoose");
//add organization
router.route("/addorganization").post((req, res) => {
    console.log(req.body)

    let Org = new OrgDetails(req.body)

    Org.save(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).json("Error" + err));
});

//get all details 
router.route("/").get((req, res) => {
    OrgDetails.find().select("-password")

        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
});

//deactive Org
router.route("/deactiveorg").post((req, res) => {

    let data = req.body;
    console.log("data",data)
    OrgDetails.updateOne(
        { _id:  data.orgId },
        {
            $set: {
                orgStatus: "De",
            },
        }
    )
        .then((data) => {
            
            res.status(200).json("sucess");
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

//edit Org
router.route("/editorganization").post((req, res) => {

    let data = req.body;

    OrgDetails.updateOne(
        { _id:  data.orgId },
        {
            $set: {
                orgName: "e",
            },
        }
    )
        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

module.exports = router;