const router = require("express").Router();

const UserDetails = require("../../models/UserDetails");

//add user
router.route("/adduser").post((req, res) => {
    console.log(req.body)
    let User = new UserDetails(req.body)

    User.save(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).json("Error" + err));
});

//get all user 
router.route("/getuser").get((req, res) => {
    UserDetails.find().select("-password")

        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
});

//deactive user
router.route("/deactiveuser").get((req, res) => {

    let data = req.body;
    UserDetails.updateOne(
        { _id: data.Org_id },
        {
            $set: {
                userStatus: "Deactive",
                userDeactiveReason: data.deactive_reason,
            },
        }
    )
        .then((data) => {
            res.status(200).json(data);
        })

        .catch((err) => res.status(400).json("Error" + err));
}
);

//edit user
router.route("/edituser").get((req, res) => {

    let data = req.body;

    UserDetails.updateOne(
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