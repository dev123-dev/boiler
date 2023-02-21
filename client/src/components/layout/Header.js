import React, { Fragment, useState } from "react";
import { Container, Navbar, Nav, NavItem, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Login from "../auth/Login";

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  // const handleLoginModalClose = () => setShowLogin(false);
  // const handleLoginModalShow = () => setShowLogin(true);

  const handleLogoutModalClose = () => setShowLogout(false);
  const handleLogoutModalShow = () => setShowLogout(true);

  const LogoutModalClose = () => {
    handleLogoutModalClose();
    logout();
  };
  const openSecondLevelMenu2 = () => {
    const menu = document.getElementById("second-level-menu2");
    if (window.innerWidth <= 992) {
      if (menu) {
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      } else {
        menu.style.display = "none";
      }
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
          <Navbar.Brand>
            <img
              className="Icon"
              alt="Pinnacle Media"
              src={require("../../static/images/dag_logo1.png")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar_Collapse_content">
            <NavItem>


            {!loading && isAuthenticated && user ? (
                    <NavLink
                      to="/add-tenant-details" className='navlink'
                      activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                    >
                      Organization
                    </NavLink>
                  ) : (
                    <NavItem></NavItem>
                  )}
                   </NavItem>

             <NavItem>   
             {!loading && isAuthenticated && user ? (
                    <NavLink
                      to="/all-tenant-shop-Details" className='navlink'
                      activeStyle={{ color: "#e79d69", textDecoration: "none" }}
                    >
                      Users
                    </NavLink>
                  ) : (
                    <NavItem></NavItem>
                  )}
             </NavItem>
             </Nav>

            {!loading && isAuthenticated && user ? (
              <Nav>
                <ul className="top-level-menu text-right">
                    <li>
                      <Link
                        to="#"
                        onClick={() => openSecondLevelMenu2()}
                        className="navbar-right "
                      >
                        {user.UserType}&nbsp;
                        <i className="fa fa-caret-down" />
                      </Link>

                      <ul className="dropdown-menu second-level-menu ">
                        <li>
                          <Link to="/shop-Details" className="navlinkitem" >User Group</Link>
                        </li>

                        {/* <li>
                          <Link                                  if modal is required
                            to="#"
                            // onClick={() => handleTenantSettingModalShow()}
                          >
                            Tenant Setting
                          </Link>
                        </li> */}
                        <li>
                          <Link to="#" className="navlinkitem" onClick={() => handleLogoutModalShow()}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </Nav>
    
              
            ) : (
              <Fragment>
                <Nav>
                  <NavItem>
                    {/* <Link to="#" onClick={() => handleLoginModalShow()}>
                      LOGIN
                    </Link> */}
                  </NavItem>

                  <Modal
                    show={showLogin}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header></Modal.Header>
                    <Modal.Body>
                      {/* <button
                        onClick={() => handleLoginModalClose()}
                        className="close"
                      >
                        <img
                          src={require("../../static/images/close.png")}
                          alt="X"
                        />
                      </button> */}
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


