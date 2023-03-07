import React, { Fragment, useState } from "react";
import { Navbar, Nav, NavItem, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Login from "../auth/Login";
import axios from "axios";

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [showrestpassword, setshowrestpassword] = useState(false);

  const handleLogoutModalClose = () => setShowLogout(false);
  const handleLogoutModalShow = () => setShowLogout(true);

  const LogoutModalClose = () => {
    handleLogoutModalClose();
    logout();
  };
  const openSecondLevelMenu2 = () => {
    // const menu = document.getElementById("second-level-menu2");
    // if (window.innerWidth <= 992) {
    // if (menu) {
    //   if (menu.style.display === "block") {
    //     menu.style.display = "none";
    //   } else {
    //     menu.style.display = "block";
    //   }
    // } else {
    //   menu.style.display = "none";
    // }
    // }
  };
  //console.log(user)

  //handel reset password
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [confrimNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPassworderror] = useState("");

  const onclose = () => {
    setPassworderror("");
    setshowrestpassword(false);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (newpassword === confrimNewPassword) {
      var linkPath = "";
      axios
        .post(`${linkPath}/api/user/resetpassword`, {
          User_id: user && user._id,
          oldpassword: oldpassword,
          newpassword: confrimNewPassword,
        })
        .then((data) => {
          console.log("password set data ", data.data);
          setPassworderror(data.data);
        });
      setPassworderror("");
      setOldPassword("");
      setnewPassword("");
      setConfirmNewPassword("");
    } else {
      setPassworderror("Please Check the Password");
      setOldPassword("");
      setnewPassword("");
      setConfirmNewPassword("");
    }
  };

  return (
    <Fragment>
      <header>
        <Navbar
          className="navbar_height top_menu"
          expand="lg"
          fixed="top"
          style={{ padding: "0px 1em" }}
        >
          {!loading && isAuthenticated && user && user.userGroup === "Dev" ? (
            <Navbar.Brand>
              <NavLink to="/superdashboard">
                <img
                  className="Icon p-2"
                  alt="Pinnacle Media"
                  src={require("../../static/images/dag_logo1.png")}
                  title="Dashboard"
                />
              </NavLink>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand></Navbar.Brand>
          )}
          {!loading && isAuthenticated && user && user.userGroup === "Admin" ? (
            <Navbar.Brand>
              <NavLink to="/admindashboard">
                <img
                  className="Icon p-2"
                  alt="Pinnacle Media"
                  src={require("../../static/images/dag_logo1.png")}
                  title="Dashboard"
                />
              </NavLink>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand></Navbar.Brand>
          )}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar_Collapse_content">
              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Dev" ? (
                  <NavLink
                    to="/organization"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Organization
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>

              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Dev" ? (
                  <NavLink
                    to="/users"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Users
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>

              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Admin" ? (
                  <NavLink
                    to="/category"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Category
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>
              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Admin" ? (
                  <NavLink
                    to="/entity"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Institution/Individual
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>
              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Admin" ? (
                  <NavLink
                    to="/generatelabel"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Generate Label
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>
              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Admin" ? (
                  <NavLink
                    to="/EmptyCategory"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Empty Category
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>
              <NavItem>
                {!loading &&
                isAuthenticated &&
                user &&
                user.userGroup === "Admin" ? (
                  <NavLink
                    to="/EmptyInstInd"
                    className="navlink"
                    activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                  >
                    Empty Inst/Ind
                  </NavLink>
                ) : (
                  <NavItem></NavItem>
                )}
              </NavItem>
            </Nav>

            {!loading && isAuthenticated && user ? (
              <>
                {user.userGroup === "Dev" ? (
                  <>
                    <Nav>
                      <ul className="top-level-menu text-left">
                        <li>
                          <Link
                            to="#"
                            onClick={() => openSecondLevelMenu2()}
                            className="navbar-right "
                          >
                            {user.userName}
                            {/* <img
              className="Icon p-2"
              style={{background:"transparent"}}
              alt="Pinnacle Media"
              src={require("../../static/images/drpdown.png")} 
              
            /> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-caret-down" />
                          </Link>

                          <ul className="dropdown-menu second-level-menu ">
                            <li className="hwhite">
                              <Link to="/usergroup" className="navlinkitem">
                                User Group
                              </Link>
                            </li>

                            <li className="hwhite">
                              <Link
                                to="#"
                                className="navlinkitem"
                                onClick={() => handleLogoutModalShow()}
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Nav>
                  </>
                ) : (
                  <>
                    <Nav>
                      <ul className="top-level-menu text-left">
                        <li>
                          <Link
                            to="#"
                            onClick={() => openSecondLevelMenu2()}
                            className="navbar-right "
                          >
                            {user.userName}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-caret-down" />
                          </Link>

                          <ul className="dropdown-menu second-level-menu ">
                            <li className="hwhite">
                              <Link to="/designation" className="navlinkitem">
                                Designation Setting
                              </Link>
                            </li>
                            <li className="hwhite">
                              <Link to="/userlist" className="navlinkitem">
                                User Setting
                              </Link>
                            </li>

                            <li className="hwhite">
                              <Link
                                to="#"
                                className="navlinkitem"
                                onClick={() => setshowrestpassword(true)}
                              >
                                Reset Password
                              </Link>
                            </li>

                            <li className="hwhite">
                              <Link
                                to="#"
                                className="navlinkitem"
                                onClick={() => handleLogoutModalShow()}
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Nav>
                  </>
                )}
              </>
            ) : (
              <Fragment>
                <Nav>
                  <NavItem></NavItem>

                  <Modal
                    show={showLogin}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header></Modal.Header>
                    <Modal.Body>
                      <Login />
                    </Modal.Body>
                  </Modal>
                </Nav>
              </Fragment>
            )}
          </Navbar.Collapse>
        </Navbar>
        <Modal
          show={showLogout}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="logout-modal"
        >
          <Modal.Header className="confirmbox-heading">
            <h4 className="mt-0">Confirmation</h4>
          </Modal.Header>
          <Modal.Body>
            <h5>Are you sure you want to logout?</h5>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn contact_reg btn_color"
              onClick={() => LogoutModalClose()}
            >
              YES
            </button>
            <button
              className="btn contact_reg btn_color"
              onClick={() => handleLogoutModalClose()}
            >
              NO
            </button>
          </Modal.Footer>
        </Modal>
        //reset password
        <Modal
          show={showrestpassword}
          backdrop="static"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title className="container">
              <h1 className="font-weight-bold ">Reset password</h1>
            </Modal.Title>
            <div className="col-lg-2">
              <button
                className="close"
                // onClick={() => setshowrestpassword(false)}
                onClick={onclose}
              >
                <img
                  // src={require("../../../static/images/close.png");
                  src={require("../../static/images/close.png")}
                  alt="X"
                  style={{ height: "20px", width: "20px" }}
                />
              </button>
            </div>
          </Modal.Header>

          {/* <Modal.Body> */}
          <Modal.Body>
            <form onSubmit={(e) => resetPassword(e)}>
              <div className="container ">
                <section className="body">
                  <div className="body-inner">
                    <div className="h4 " style={{ color: "red" }}>
                      {passwordError}
                    </div>
                    <div className="row form-group">
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                        <label className="control-label">
                          Old password <span>*</span>
                        </label>

                        <div className="controls">
                          <input
                            name="oldpassword"
                            type="password"
                            className="form-control"
                            value={oldpassword}
                            onChange={(e) => {
                              setOldPassword(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                        <label className="control-label">
                          New password <span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="newpassword"
                            type="password"
                            className="form-control"
                            value={newpassword}
                            onChange={(e) => {
                              setnewPassword(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                        <label className="control-label">
                          Confirm password <span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="confirmpassword"
                            type="password"
                            className="form-control"
                            value={confrimNewPassword}
                            onChange={(e) => {
                              setConfirmNewPassword(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row form-group ">
                      <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12 text-right">
                        <br />
                        <label className="control-label">
                          * Indicates mandatory fields.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-outline-secondary btnall">
                      RESET
                    </button>
                  </div>
                </section>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </header>
    </Fragment>
  );
};
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
