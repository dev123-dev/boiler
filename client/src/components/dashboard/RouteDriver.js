import React, { Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getAllOrganization } from "../../actions/dag";


const RouteDriver = ({ auth: { user }, loadUser,dag: { allorg } }) => {

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (user) {
   if(user.userGroup==="Dev")
   {
    return <Redirect to="/superdashboard" />
  }
  else if(user.userGroup==="Admin"){
    return <Redirect to="/admindashboard" />
  }
  }
  return <Fragment>loading...</Fragment>;
};

RouteDriver.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});

export default connect(mapStateToProps, { loadUser,getAllOrganization })(RouteDriver);
