const router = require("express").Router();

const { distinct } = require("../../models/UserDetails");
const UserDetails = require("../../models/UserDetails");
const UserHistroy =require("../../models/UserHistroy");
// const auth = require("../../middleware/auth");

//add user
router.route("/adduser").post((req, res) => {
   // console.log(req.body)
    let User = new UserDetails(req.body)

    User.save(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).json("Error" + err));
});

//get all user 
router.route("/getuser").post((req, res) => {
    const { oraganisationIdVal } = req.body;
    let query ={
        orgId: oraganisationIdVal,
        userGroup:{$ne:"Dev"}
    }
    UserDetails.find(query).select("-password").sort({userStatus:1})

        .then((data) => {
            //console.log(data)
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
                DeactiveById: data.DeactiveById,
                DeactiveByName:data.DeactiveById,
                DeactiveByDateTime:data.DeactiveById,
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

        let UserHis = new UserHistroy(req.body)
        
        UserHis.save(req.body).then(()=>console.log("Histroy entered User"))
        
}
);

module.exports = router;