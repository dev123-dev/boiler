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
  GET_ALL_CATEGORY,
  FINAL_DATA_REP,
  GET_ALL_ORGANIZATION,
  GET_ALL_DESIGNATION,
  GET_ALL_SUPERUSER,
  GET_ALL_ORGANIZATION_DETAILS,
  GET_ALL_ENTITY,
} from "./types";

var linkPath = "";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// var linkPath = process.env.REACT_APP_BASE_URL;
var linkPath = "";

export const AddOrganization = (OrganizationData) => async (dispatch) => {
  //  console.log(OrganizationData)
  try {
    await axios.post(
      `${linkPath}/api/organization/addorganization`,
      OrganizationData,
      config
    );
    //diapatching get function because it should relfex immidiatly after adding
    dispatch(getAllOrganization());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//getting all organization

export const getAllOrganizationDetails = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${linkPath}/api/organization/allorganizationdetails`
    );
    dispatch({
      type: GET_ALL_ORGANIZATION_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//gettting organization details Active  for dropdown
export const getAllOrganization = () => async (dispatch) => {
  try {
    const res = await axios.get(`${linkPath}/api/organization/`);
    dispatch({
      type: GET_ALL_ORGANIZATION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//deleting organization details
export const deleteOrganization = (id) => async (dispatch) => {
  // console.log('INSIDE ACTION')
  // console.log(id);
  try {
    const res = await axios.post(
      `${linkPath}/api/organization/deactiveorg`,
      id,
      config
    );
    dispatch(getAllOrganization());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }
};

//edit organization details
export const updateOrganization = (updatedata) => async (dispatch) => {
  // console.log(updatedata);
  try {
    axios.post(`${linkPath}/api/organization/editOrganization`, updatedata);
    dispatch(getAllOrganization());
  } catch (err) {}
};

//renew org
export const renewOrganization = (renewdata) => async (dispatch) => {
  try {
    axios.post(`${linkPath}/api/organization/renewalorganization`, renewdata);
    dispatch(getAllOrganizationDetails());
  } catch (err) {}
};

//add user
export const AddUser = (UserData) => async (dispatch) => {
  // console.log(UserData)
  try {
    await axios.post(`${linkPath}/api/user/adduser`, UserData, config);
    //diapatching get function because it should relfex immidiatly after adding
    dispatch(getAllUser());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//gettting User details
export const getAllUser = (changeData) => async (dispatch) => {
  // console.log("changeData",changeData)
  try {
    const res = await axios.post(`${linkPath}/api/user/getuser`, {
      ...changeData,
    });
    dispatch({
      type: GET_ALL_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//deleting organization details
export const deleteUser = (id) => async (dispatch) => {
  // console.log('INSIDE ACTION')
  // console.log(id);
  try {
    const res = await axios.post(
      `${linkPath}/api/user/deactiveuser`,
      id,
      config
    );
    dispatch(getAllUser());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }
};

//edit user details
export const updateUser = (updatedata) => async (dispatch) => {
  console.log("inside action");
  // console.log(updatedata);
  try {
    axios.post(`${linkPath}/api/user/edituser`, updatedata);
    dispatch(getAllUser());
  } catch (err) {}
};

//add usergroup
export const AddGroup = (grpData) => async (dispatch) => {
  // console.log(UserData)
  try {
    await axios.post(`${linkPath}/api/group/addgroup`, grpData, config);
    //diapatching get function because it should relfex immidiatly after adding
    dispatch(getAllUserGroup());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//gettting UserGroup details
export const getAllUserGroup = () => async (dispatch) => {
  try {
    const res = await axios.get(`${linkPath}/api/group/getgroup`);
    dispatch({
      type: GET_ALL_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//deleting user group details
export const deleteUserGroup = (groupName) => async (dispatch) => {
  // console.log('INSIDE ACTION')
  // console.log(id);
  try {
    const res = await axios.post(
      `${linkPath}/api/group/deactivegroup`,
      groupName,
      config
    );
    dispatch(getAllUserGroup());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }
};

////////////////////////////////////
//add category
export const addCategory = (UserData) => async (dispatch) => {
  console.log(UserData);
  try {
    await axios.post(`${linkPath}/api/category/addcategory`, UserData, config);
    //diapatching get function because it should relfex immidiatly after adding
    //  dispatch(getAllCategory());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//getting all category

export const getAllCategory = (userdata) => async (dispatch) => {
  console.log(userdata);
  let body = { orgId: userdata };
  // console.log("run with ",userdata )
  try {
    const res = await axios.post(`${linkPath}/api/category/getcategory`, body);
    console.log("res data", res.data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data,
    });
    console.log("res",res.data);
  } catch (err) {
    dispatch({
      type: GET_ALL_CATEGORY,
    });
  }
};

//deleting category details
export const deleteCategory = (id) => async (dispatch) => {
  // console.log('INSIDE ACTION')
  // console.log("delete", id);
  try {
    const res = await axios.post(
      `${linkPath}/api/category/deactivecategory`,
      id,
      config
    );
    //dispatch(getAllCategory());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }
};

//edit category details
export const updateCategory = (updatedata) => async (dispatch) => {
  //console.log("cat action", updatedata);
  //console.log("inside action");
  // console.log(updatedata);
  try {
    axios.post(`${linkPath}/api/category/editcategory`, updatedata);
    // dispatch(getAllCategory());
  } catch (err) {}
};

//add Designation
export const addDesignation = (UserData) => async (dispatch) => {
  console.log(UserData);
  try {
    await axios.post(
      `${linkPath}/api/designation/adddesignation`,
      UserData,
      config
    );
    //diapatching get function because it should relfex immidiatly after adding
    //dispatch(getAllCategory());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//getting all designation

export const getalldesignation = (userdata) => async (dispatch) => {
  // console.log(userdata);
  let body = { orgId: userdata };
  try {
    const res = await axios.post(
      `${linkPath}/api/designation/getDesignation`,
      body
    );

    dispatch({
      type: GET_ALL_DESIGNATION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_DESIGNATION,
    });
  }
};

//edit designation details
export const updateDesignation = (updatedata) => async (dispatch) => {
  console.log("cat action", updatedata);
  console.log("inside action");
  // console.log(updatedata);
  try {
    axios.post(`${linkPath}/api/designation/editdesignation`, updatedata);
    //dispatch(getalldesignation());
  } catch (err) {}
};

//Add institiion

export const AddInst = (UserData) => async (dispatch) => {
  //console.log("inserted to database");
  try {
    await axios.post(`${linkPath}/api/entity/addinsind`, UserData, config);
    //diapatching get function because it should relfex immidiatly after adding
    //dispatch(getAllCategory());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//getting all inst/indvi

export const getAllEntity = (userdata) => async (dispatch) => {
  // console.log(userdata);
  let body = { orgId: userdata };
  try {
    const res = await axios.post(`${linkPath}/api/entity/getinsind`, body);

    dispatch({
      type: GET_ALL_ENTITY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_ENTITY,
    });
  }
};

//deleting entity details
export const deleteEntity = (id) => async (dispatch) => {
  // console.log('INSIDE ACTION')
  // console.log("delete", id);
  try {
    const res = await axios.post(
      `${linkPath}/api/entity/deactiveinstind`,
      id,
      config
    );
    //dispatch(getAllCategory());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }
};
