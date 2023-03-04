const router = require("express").Router();
const EntDetails = require("../../models/InsIndDetails");
//const CategoryHistroy = require("../../models/CategoryHistroy");

//add indins
router.route("/addinsind").post((req, res) => {
  let Ent = new EntDetails(req.body);

  Ent.save(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//get all cat
router.route("/getinsind").post((req, res) => {
  let body = req.body;

  EntDetails.find({ orgId: body.orgId })
    .sort({ categoryStatus: 1 })

    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
});

//deactive  entity
router.route("/deactiveinstind").post((req, res) => {
  let data = req.body;

  EntDetails.updateOne(
    { _id: data.entId, orgId: data.orgId },
    {
      $set: {
        entStatus: "Deactive",
        entReason: data.entdeletereason,
        DeactiveById: data.DeactiveById,
        DeactiveByName: data.DeactiveByName,
        DeactiveByDateTime: data.DeactiveByDateTime,
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })

    .catch((err) => res.status(400).json("Error" + err));
  // console.log(data)
});

// //edit

// router.route("/editcategory").post((req, res) => {
//   let data = req.body;

//   let CatHis = new CategoryHistroy(req.body);
//   CatHis.save(req.body).then(() => console.log("Histroy entered for CAtegory"));

//   CategoryDetails.updateOne(
//     { _id: data.catId, orgId: data.orgId },
//     {
//       $set: {
//         categoryName: data.categoryName,
//         categoryDesp: data.categoryDesp,
//         EditById: data.EditById,
//         EditByName: data.EditByName,
//         EditByDateTime: data.EditByDateTime,
//       },
//     }
//   )
//     .then((data) => {
//       res.status(200).json(data);
//     })

//     .catch((err) => res.status(400).json("Error" + err));

// });

module.exports = router;
