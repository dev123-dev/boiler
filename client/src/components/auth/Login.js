import React, { Fragment, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, removeError } from "../../actions/auth";

const Login = ({
  login,
  isAuthenticated,
  errorResponse,
  removeError,
  loading,
}) => {
  useEffect(() => {
    removeError();
  }, [removeError]);

  let modalTitle = { marginTop: "-30px", marginBottom: "20px" };

  const [formData, setFormData] = useState({
    email: "shain@gmail.com",
    password: "Password@123",
  });

  const { email, password } = formData;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        if (value === "") {
          setError({
            ...error,
            emailValChecker: true,
            emailValResult: "Please Enter Your Email",
            emailValStyle: { color: "#FF0000" },
            emailInptErrStyle: { borderBottom: "1px solid #FF0000" },
          });
          setFormData({ ...formData, [e.target.name]: "" });
        } else {
          setError({
            ...error,
            emailValChecker: false,
            emailInptErrStyle: { borderBottom: "1px solid #43b90f" },
          });
          setFormData({ ...formData, [e.target.name]: value });
        }
        break;
      case "password":
        if (value === "") {
          setError({
            ...error,
            passwordValChecker: true,
            passwordValResult: "Please Enter Your Password",
            passwordValStyle: { color: "#FF0000" },
            passwordInptErrStyle: { borderBottom: "1px solid #FF0000" },
          });
          setFormData({ ...formData, [e.target.name]: "" });
        } else {
          setError({
            ...error,
            passwordValChecker: false,

            passwordInptErrStyle: { borderBottom: "1px solid #43b90f" },
          });
          setFormData({ ...formData, [e.target.name]: value });
        }
        break;
      default:
        break;
    }
  };

  const [error, setError] = useState({
    emailValChecker: false,
    emailValResult: "",
    emailValStyle: {},
    emailInptErrStyle: {},

    passwordValChecker: false,
    passwordValResult: "",
    passwordValStyle: {},
    passwordInptErrStyle: {},
  });

  const {
    emailValChecker,
    emailValResult,
    emailValStyle,
    emailInptErrStyle,

    passwordValChecker,
    passwordValResult,
    passwordValStyle,
    passwordInptErrStyle,
  } = error;

  const checkErrors = (formData) => {
    if (formData && formData.email === "") {
      setError({
        ...error,
        emailValChecker: true,
        emailValResult: "Please Enter Your Email",
        emailValStyle: { color: "#FF0000" },
        emailInptErrStyle: { borderBottom: "1px solid #FF0000" },
      });
      return false;
    } else {
      const emailFilter =
        /^(\d*[a-zA-Z][a-zA-Z\d_.+-]*)\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})*$/;
      if (!emailFilter.test(formData && formData.email)) {
        setError({
          ...error,
          emailValChecker: true,
          emailValResult: "Please Enter Valid Email",
          emailValStyle: { color: "#FF0000" },
          emailInptErrStyle: { borderBottom: "1px solid #FF0000" },
        });
        return false;
      }
    }
    if (formData && formData.password === "") {
      setError({
        ...error,
        passwordValChecker: true,
        passwordValResult: "Please Enter Your Password",
        passwordValStyle: { color: "#FF0000" },
        passwordInptErrStyle: { borderBottom: "1px solid #FF0000" },
      });
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkErrors(formData)) {
      login(email, password);
    }
    setFormData({ ...formData, submitted: true });
  };

  if (isAuthenticated) {
    return <Navigate to="/route-driver" />;
  }

  return (
    <Fragment>
      <div className="col-md-12 col-lg-12 col-sm-12 col-12">
        <div className="modal-header">
          {loading ? (
            <h2 className="modal-title " id="myModalLabel" style={modalTitle}>
              Please Wait
            </h2>
          ) : (
            <h2 className="modal-title " id="myModalLabel" style={modalTitle}>
              SIGN IN
            </h2>
          )}
        </div>
        {errorResponse && <p style={{ color: "red" }}>{errorResponse}</p>}
        {/* <!-- form --> */}
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group form_top">
            <input
              type="text"
              name="email"
              value={email}
              style={emailInptErrStyle}
              className="form-control form_contct"
              onChange={(e) => onInputChange(e)}
              autoComplete="flase"
            />
            {emailValChecker && (
              <span style={emailValStyle}>
                {emailValResult}
                <br />
              </span>
            )}
            <label className="pop_up">
              <span className="label-content">email *</span>
            </label>
          </div>

          <div className="form-group form_top">
            <input
              type="password"
              name="password"
              value={password}
              style={passwordInptErrStyle}
              className="form-control form_contct"
              onChange={(e) => onInputChange(e)}
              autoComplete="false"
            />
            {passwordValChecker && (
              <span style={passwordValStyle}>
                {passwordValResult}
                <br />
              </span>
            )}
            <label className="pop_up">password *</label>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12 col-12 text-center">
            <button className="btn contact_reg">SIGN IN</button>
          </div>
        </form>
      </div>
      <div className="col-md-12 col-sm-12 col-lg-12 col-12 text-center">
        <p className="create">
          <Link to="/register">New? Create an account.</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  errorResponse: PropTypes.string,
  removeError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  errorResponse: state.auth.errorResponse,
});

export default connect(mapStateToProps, { login, removeError })(Login);
