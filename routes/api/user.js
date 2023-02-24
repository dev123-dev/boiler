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
router.route("/deactiveuser").post((req, res) => {

    let data = req.body;
    UserDetails.updateOne(
        { _id: data.User_id },
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
router.route("/edituser").post((req, res) => {

    let data = req.body;

    UserDetails.updateOne(
        { _id: data.User_id },
        {
            $set: {
                fullName:data.fullName,
                userName: data.UserName,
                email: data.UserEmail,
                phone: data.UserNumber,
                address:data.UserAddress,
              
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