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

//gettting organization details
export const getAllOrganization = () => async (dispatch) => {
  try {
  
    const res = await axios.get(`${linkPath}/api/organization/`);
    dispatch({
      type: GET_ALL_ORGANIZATION,
      payload: res.data,
    

    }  );
    
    
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};


//deleting organization details
export const deleteOrganization = (id) => async(dispatch)=>{
  // console.log('INSIDE ACTION')
  // console.log(id);
  try {
    const res = await axios.post(`${linkPath}/api/organization/deactiveorg`,id,config);
    dispatch(getAllOrganization());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }

};

//edit organization details
export const updateOrganization = (updatedata) => async(dispatch)=>{
// console.log(updatedata);
try {
   axios.post(
    `${linkPath}/api/organization/editOrganization`,
   updatedata,
    
  );
  dispatch(getAllOrganization());
} catch (err) {}
};

//renew org
export const renewOrganization = (renewdata) => async(dispatch)=>{
  
  try {
     axios.post(
      `${linkPath}/api/organization/renewalorganization`,
     renewdata,
      
    );
    dispatch(getAllOrganization());
  } catch (err) {}
  };







//add user
export const AddUser = (UserData)=> async(dispatch)=>{
  // console.log(UserData)
  try {
   await axios.post(
     `${linkPath}/api/user/adduser`,
    UserData,
     config
   );
   //diapatching get function because it should relfex immidiatly after adding
    dispatch(getAllUser());
 
 } catch (err) {
   dispatch({
     type: AUTH_ERROR,
   });
 }
 };

 //gettting User details
export const getAllUser = () => async (dispatch) => {
  try {
  
    const res = await axios.get(`${linkPath}/api/user/getuser`);
    dispatch({
      type: GET_ALL_USER,
      payload: res.data,
    

    }  );
    
    
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//deleting organization details
export const deleteUser = (id) => async(dispatch)=>{
  // console.log('INSIDE ACTION')
  // console.log(id);
  try {
    const res = await axios.post(`${linkPath}/api/user/deactiveuser`,id,config);
    dispatch(getAllUser());
  } catch (err) {
    console.log("error while sending from action");
    dispatch({
      type: TENANT_FEEDBACK_ERROR,
    });
  }

};

//edit user details
export const updateUser = (updatedata) => async(dispatch)=>{
  
  

  console.log("inside action")
  // console.log(updatedata);
  try {
     axios.post(
      `${linkPath}/api/user/edituser`,
     updatedata,
      
    );
    dispatch(getAllUser());
  } catch (err) {}
  };
  
  