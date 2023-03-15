const router = require("express").Router();
const CategoryDetails = require("../../models/CategoryDetails");
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

 
});

//edit

router.route("/editinstind").post((req, res) => {
  let data = req.body;

  EntDetails.updateOne(
    { _id: data.entId, orgId: data.orgId },
    {
      $set: {
        entName: data.entName,
        entOrderDesgId: data.entOrderDesgId,
        entOrderDesg: data.entOrderDesg,
        entEmail: data.entEmail,
        InstHead: data.InstHead,
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

    EntDetails.updateMany(
      { "categoryBelongs._id": data.catId },
      {
        $set: { categoryName: data.categoryName}
      }
    )
    .then(data)

});

//joinLeave entity
router.route("/addEntCat").post((req, res) => {
  let data = req.body;
  //console.log("request", req.body);
  EntDetails.updateOne(
    { _id: data.entid, orgId: data.orgId },
    {
      $set: {
        categoryBelongs: data.categoryBelongs,
      },
    }
  )
    .then((data) => {
      res.status(200).json("updated");
    })
    .catch((err) => res.status(400).json("Error" + err));

  data.categoryBelongs.map((ele) => {
    //console.log("ent  is ",ele.categoryName)
    CategoryDetails.updateOne(
      { _id: ele._id, orgId: data.orgId },
      {
        $addToSet: {
          categoryEntity: data.categoryEntity,
        },
      }
    ).then(data);

    data.notAMember.map((ele) => {
      CategoryDetails.updateOne(
        { _id: ele._id, orgId: data.orgId },
        {
          $pull: {
            categoryEntity: { _id: data.enttid },
          },
        }
      ).then(data);
    });
  });

  // CategoryDetails.updateOne(
  //   { _id: data.catid, orgId: data.orgId },
  //   {
  //     $set: {
  //       categoryEntity: data.entity,
  //     },
  //   }
  // )
});

//get all view  data
router.route("/getviewentdetails").post((req, res) => {
  let body = req.body;
  //console.log("bodyapi", body);
  CategoryDetails.find({ _id: body.userId })

    .then((data) => {
      res.status(200).json(data);
      console.log("dataid", data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});
module.exports = router;
