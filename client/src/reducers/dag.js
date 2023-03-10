import {
  GET_ALL_SHOPS,
  GET_ALL_TENANTS,
  GET_ALL_SETTINGS,
  EXP_REPORT,
  GET_DOORNOS,
  GET_DOORNUMBER,
  GET_ALL_ORGANIZATION,
  GET_ALL_ORGANIZATION_DETAILS,
  GET_ALL_SUPERUSER,
  GET_ALL_CATEGORY,
  GET_ALL_USER,
  GET_ALL_USERGRP,
  GET_ALL_DESIGNATION,
  GET_ALL_ENTITY,
  GET_ALL_User_Admin,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  users: [],
  errorResponse: "",
  successResponse: "",

  allShopDetails: [],
  alltenants: [""],
  allTenantSetting: [""],
  allDoorNos: [""],
  allDoorNumber: [""],
  monthExpCnt: [],
  yearExpCnt: [],
  expReport: [],
  allorg: [""],
  allcat: [""],
  // allorgdetails : [""],
  alluser: [""],
  allusergrp: [""],
  allent: [""],
  allsuperuser: [""],
  alluseradmin: [""],
};

const dagreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXP_REPORT:
      return {
        ...state,
        expReport: payload,
      };
    
   
    case GET_ALL_ORGANIZATION:
      return {
        ...state,
        allorg: payload,
      };
    case GET_ALL_ORGANIZATION_DETAILS:
      return {
        ...state,
        allorg: payload,
      };
    case GET_ALL_SUPERUSER:
      return {
        ...state,
        allsuperuser: payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        alluser: payload,
      };
    case GET_ALL_USERGRP:
      return {
        ...state,
        allusergrp: payload,
      };
    case GET_ALL_CATEGORY:
      // localStorage.setItem("category", JSON.stringify(payload))
      //console.log("reducer",payload)
      return {
        ...state,
        allcat: payload,
      };
    case GET_ALL_DESIGNATION:
      return {
        ...state,
        alldesg: payload,
      };

    case GET_ALL_ENTITY:
      return {
        ...state,
        allent: payload,
      };
    case GET_ALL_User_Admin:
      return {
        ...state,
        alluseradmin: payload,
      };

    default:
      return state;
  }
};

export default dagreducer;
