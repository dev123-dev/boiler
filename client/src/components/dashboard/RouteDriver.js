import React, { Fragment, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";

const RouteDriver = ({ auth: { user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (user && user.firstLoginDisclaimer === false) {
    return <Navigate to="/first_login_disclaimer" />;
  }

  if (user && user.firstLoginDisclaimer === true) {
    return <Navigate to="/landing-page" />;
  }
  return <Fragment>loading...</Fragment>;
};

RouteDriver.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(RouteDriver);
