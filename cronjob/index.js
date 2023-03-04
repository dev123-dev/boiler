const express = require("express");

const cron = require("node-cron");

//const TenentAgreement = require("../server/models/TenantAgreementDetails");
const org = require("../models/OrganizationDetails");

async function updateExpiryStatus() {
  console.log("Running Cron Job");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  var todayDateymd = yyyy + "-" + mm + "-" + dd;

  try {
    console.log("hit");
    org
      .updateMany(
        { endDate: { $lte: todayDateymd }, orgStatus: "Active" },
        {
          $set: {
            orgStatus: "Expired",
          },
        }
      )
      .then((res) => console.log(res));
    console.log("Status updated as Expired");
  } catch (error) {
    console.error("Error Here");
    res.status(500).send("Internal Server Error.");
  }
}

function expairyNotif() {
  cron.schedule("19 * * * *", function () {
    updateExpiryStatus();
  });
}

module.exports = expairyNotif();
