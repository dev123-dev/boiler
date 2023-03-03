import {
  GET_ALL_SHOPS,
  GET_ALL_TENANTS,
  GET_ALL_SETTINGS,
  MONTH_EXP_CNT,
  YEAR_EXP_CNT,
  EXP_REPORT,
  GET_DOORNOS,
  GET_DOORNUMBER,
  GET_ALL_ORGANIZATION,
  GET_ALL_ORGANIZATION_DETAILS,
  GET_ALL_SUPERUSER,
  GET_ALL_CATEGORY,
  GET_ALL_USER,
  GET_ALL_DESIGNATION,
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
  allsuperuser: [""],
};

const dagreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXP_REPORT:
      return {
        ...state,
        expReport: payload,
      };
    case GET_DOORNOS:
      return {
        ...state,
        allDoorNos: payload,
      };
    case GET_DOORNUMBER:
      return {
        ...state,
        allDoorNumber: payload,
      };
    case GET_ALL_SHOPS:
      return {
        ...state,
        allShopDetails: payload,
      };

    case GET_ALL_TENANTS:
      return {
        ...state,
        allTenants: payload,
      };
    case GET_ALL_SETTINGS:
      return {
        ...state,
        allTenantSetting: payload,
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
    case GET_ALL_CATEGORY:
      return {
        ...state,
        allcat: payload,
      };
    case GET_ALL_DESIGNATION:
      return {
        ...state,
        alldesg: payload,
      };
    default:
      return state;
  }
};

export default dagreducer;
