const router = require("express").Router();
const CategoryDetails = require("../../models/CategoryDetails");

//add user
router.route("/addcategory").post((req, res) => {
  // console.log(req.body)
  console.log("hitt");
  let Category = new CategoryDetails(req.body);

  Category.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all cat
router.route("/getcategory").post((req, res) => {
  let body = req.body;
  //   console.log("hitt");
  CategoryDetails.find({ orgId: body.orgId }) //.sort({groupStatus:1})

    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//deactive  category
router.route("/deactivecategory").post((req, res) => {
  let data = req.body;
  console.log("request", req.body);
  console.log("backend", data.orgId);
  CategoryDetails.updateOne(
    { _id: data.catid, orgId: data.orgId },
    {
      $set: {
        categoryStatus: "Deactive",
        categoryReason: data.deactive_reason,
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
