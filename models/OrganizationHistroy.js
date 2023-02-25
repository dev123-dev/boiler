const mongoose = require("mongoose");

const OrgHistroySchema = new mongoose.Schema({

  OrganizationId: {
    type: String,
  },
  OrganizationName: {
    type: String,
  },
   OrganizationEmail: {
    type: String,
  },
     OrganizationNumber: {
    type: String,
  },
   OrganizationAddress: {
    type: String,
  },
    OrganizationStartdate: {
    type: String,
  },
    OrganizationEnddate: {
    type: String,
  },
     OrganizationIdOld: {
    type: String,
  },
     OrganizationNameOld: {
    type: String,
  },
     OrganizationEmailOld: {
    type: String,
  },
     OrganizationNumberOld: {
    type: String,
  },
     OrganizationAddressOLd: {
    type: String,
  },
    OrganizationStartdateOld: {
    type: String,
  },
     OrganizationEnddateOld: {
    type: String,
  },
    EditById: {
    type: String,
  },
    EditByName: {
    type: String,
  },
     EditByDateTime: {
    type: String,
  }
});

module.exports = OrgHistroy = mongoose.model("OrgHistroys", OrgHistroySchema);

