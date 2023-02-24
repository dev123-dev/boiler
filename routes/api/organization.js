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
    OrgDetails.find().sort({orgStatus:1})

        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
});

//deactive Org
router.route("/deactiveorg").post((req, res) => {

    let data = req.body;
    
    OrgDetails.updateOne(
        { _id:  data.Org_id },
        {
            $set: {
                orgStatus: "Deactive",
                orgDeactiveReason:data.deactive_reason
            },
        }
    )
        .then((data) => {
            
            res.status(200).json("success");
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

//edit Org
router.route("/editorganization").post((req, res) => {

    let data = req.body;

    OrgDetails.updateOne(
        { _id:  data.OrganizationId },
        {
            $set: {
                orgName:data.OrganizationName, 
                email:data.OrganizationEmail,
                startDate:data.OrganizationStartdate,
                phoneNumber:data.OrganizationNumber,
                address:data.OrganizationAddress,
            },
        }
    )
        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

//renwel Org
router.route("/renewalorganization").post((req, res) => {

    let data = req.body;

    OrgDetails.updateOne(
        { _id:  data.OrganizationId },
        {
            $set: {                  
                startDate:data.OrganizationStartdate,
               endDate:data.OrganizationEnddate,
               orgStatus: "Active",
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