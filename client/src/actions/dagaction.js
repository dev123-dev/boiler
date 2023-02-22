import axios from "axios";
import { setAlert } from "./alert";
// import { getAllUsers } from "./auth";

import {
  TENANT_ADD_INIT,
  AUTH_ERROR,
  SHOP_ADD_INIT,
  AGREEMENT_ADD_INIT,
  MONTH_EXP_CNT,
  YEAR_EXP_CNT,
  EXP_REPORT,
  GET_DOORNOS,
  NEW_TENENTDETAILS,
  TENANT_FEEDBACK_ERROR,
  GET_ALL_SHOPS,
  GET_ALL_TENANTS,
  GET_ALL_SETTINGS,
  GET_DELAYS,
  GET_DOORNUMBER,
  GET_ALL_USER,
  FINAL_DATA_REP,
  GET_ALL_ORGANIZATION,
  GET_ALL_SUPERUSER
} from "./types";

var linkPath = "";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// var linkPath = process.env.REACT_APP_BASE_URL;
var linkPath = "";

export const AddOrganization = (OrganizationData)=> async(dispatch)=>{
 console.log(OrganizationData)
 try {
  await axios.post(
    `${linkPath}/api/organization/addorganization`,
    OrganizationData,
    config
  );
  //diapatching get function because it should relfex immidiatly after adding
//   dispatch(getAllOrganization());

} catch (err) {
  dispatch({
    type: AUTH_ERROR,
  });
}
};