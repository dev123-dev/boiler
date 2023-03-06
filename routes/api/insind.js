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

//get all entity
router.route("/getinsind").post((req, res) => {
  let body = req.body;

  EntDetails.find({ orgId: body.orgId })
    .sort({ entStatus: 1 })

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

// //deactive  category
// router.route("/deactivecategory").post((req, res) => {
//   let data = req.body;

//   CategoryDetails.updateOne(
//     { _id: data.catid, orgId: data.orgId },
//     {
//       $set: {
//         categoryStatus: "Deactive",
//         categoryReason: data.catdeletereason,
//         DeactiveById: data.DeactiveById,
//         DeactiveByName: data.DeactiveByName,
//         DeactiveByDateTime: data.DeactiveByDateTime,
//       },
//     }
//   )
//     .then((data) => {
//       res.status(200).json(data);
//     })

//     .catch((err) => res.status(400).json("Error" + err));
//   // console.log(data)
// });

//edit

router.route("/editinstind").post((req, res) => {
  let data = req.body;

  // let CatHis = new CategoryHistroy(req.body);
  // CatHis.save(req.body).then(() => console.log("Histroy entered for CAtegory"));
  console.log(data);

  EntDetails.updateOne(
    { _id: data.entId, orgId: data.orgId },
    {
      $set: {
        entName: data.entName,
        entOrderDesgId: data.entOrderDesgId,
        entOrderDesg: data.entOrderDesg,
        entEmail: data.entEmail,
        entAddEmail: data.entAddEmail,
        entUrl: data.entUrl,
        entAddurl: data.entAddurl,
        entPhone: data.entPhone,
        entAddPhone: data.entAddPhone,
        entAddress1: data.entAddress1,
        entAddress2: data.entAddress2,
        entAddress3: data.entAddress3,
        entDistrict: data.entDistrict,
        entState: data.entState,
        entPinCode: data.entPinCode,
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

module.exports = router;
