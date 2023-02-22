const router = require("express").Router();

 const OrgDetails = require("../../models/OrganizationDetails");

router.route("/addorganization").post((req, res) => {
    console.log(req.body)
let Org=new OrgDetails(req.body)
    Org.save(req.body)
    .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => res.status(400).json("Error" + err));

});

module.exports = router;