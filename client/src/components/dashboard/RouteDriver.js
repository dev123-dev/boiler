import React, { Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getAllOrganization } from "../../actions/dag";
//import { getAllOrganization } from "../../actions/dag";
const RouteDriver = ({ auth: { user }, loadUser,dag: { allorg } }) => {
  useEffect(() => {
    loadUser();
    getAllOrganization();
   console.log("inside",allorg)
  }, [loadUser]);

  if (user) {
    // return <Redirect to="/all-staff-details" />;
    getAllOrganization();
    console.log("data",allorg)
    return <Redirect to="/superdashboard" />
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

export default connect(mapStateToProps, { loadUser })(RouteDriver);
