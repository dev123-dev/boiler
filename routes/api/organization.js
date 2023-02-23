const router = require("express").Router();

const OrgDetails = require("../../models/OrganizationDetails");

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
router.route("/deactiveorganization").post((req, res) => {

    let data = req.body;
    OrgDetails.updateOne(
        { _id: data.Org_id },
        {
            $set: {
                orgStatus: "Deactive",
                orgDeactiveReason: data.deactive_reason,
            },
        }
    )
        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

//deactive Org
router.route("/editorganization").post((req, res) => {

    let data = req.body;

    OrgDetails.updateOne(
        { _id: data.Org_id },
        {
            $set: {
                orgName: "",
                email: "",
                startDate: "",
                phoneNumber: "",
                endDate: "",
                address: "",
                orgStatus: "",
                orgDeactiveReason: "",
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