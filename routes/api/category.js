const router = require("express").Router();
const CategoryDetails = require("../../models/CategoryDetails");

//add user
router.route("/addcategory").post((req, res) => {
  // console.log(req.body)
  let Category = new CategoryDetails(req.body);

  Category.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all user group
router.route("/getcategory").get((req, res) => {
  CategoryDetails.find() //.sort({groupStatus:1})

    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//deactive user group
// router.route("/deactivegroup").post((req, res) => {

//     let data = req.body;
//     CategoryDetails.updateOne(
//         { groupName: data.groupName },
//         {
//             $set: {
//                 groupStatus: "Deactive",
//                 //userDeactiveReason: data.deactive_reason,
//             },
//         }
//     )
//         .then((data) => {
//             res.status(200).json(data);
//         })

//        .catch((err) => res.status(400).json("Error" + err));
//      // console.log(data)
// }
// );

module.exports = router;
