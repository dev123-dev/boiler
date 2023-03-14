const router = require("express").Router();
const CategoryDetails = require("../../models/CategoryDetails");
const CategoryHistroy = require("../../models/CategoryHistroy");
const EntDetails = require("../../models/InsIndDetails");

//add user
router.route("/addcategory").post((req, res) => {

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
  CategoryDetails.find({ orgId: body.orgId })
    .sort({ categoryStatus: 1 })

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//deactive  category
router.route("/deactivecategory").post((req, res) => {

  let data = req.body;

  CategoryDetails.updateOne(
    { _id: data.catid, orgId: data.orgId },
    {
      $set: {
        categoryStatus: "Deactive",
        categoryReason: data.catdeletereason,
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

    // EntDetails.updateMany(
    //   { "categoryBelongs._id": data.catId },
    //   {
    //     $pull: {
    //        "categoryBelongs.$":{_id: data.catid}
    //      },
    //   }
    // )
    // .then(data)
});

//edit
router.route("/editcategory").post((req, res) => {
  let data = req.body;

  let CatHis = new CategoryHistroy(req.body);
  CatHis.save(req.body).then(() => console.log("Histroy entered for CAtegory"));

  CategoryDetails.updateOne(
    { _id: data.catId, orgId: data.orgId },
    {
      $set: {
        categoryName: data.categoryName,
        categoryDesp: data.categoryDesp,
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
        $set: { "categoryBelongs.$.categoryName": data.categoryName}
      }
    )
    .then((data))
    .catch((data))
});

//joinLeave category
router.route("/addCategoryEnt").post((req, res) => {
  let data = req.body;
  
  CategoryDetails.updateOne(
    { _id: data.catid, orgId: data.orgId },
    {
      $set: {
        categoryEntity: data.categoryEntity,
      },
    }
  )
    .then((data) => {
      res.status(200).json("updated");
    })
    .catch((err) => res.status(400).json("Error" + err));

    data.categoryEntity.map((ele)=>{
       EntDetails.updateOne(
         { _id: ele._id, orgId: data.orgId },
         {
           $addToSet: {
            categoryBelongs: data.categoryBelongs,
           },
         }
       )
       .then((data))
    })
       
    data.notAMember.map((ele)=>{
      
      EntDetails.updateOne(
        { _id: ele._id, orgId: data.orgId },
        {
          $pull: {
           categoryBelongs:{_id: data.catid},
          },
        }
      )
      .then((data))
      .catch((data))
   })


});

module.exports = router;
