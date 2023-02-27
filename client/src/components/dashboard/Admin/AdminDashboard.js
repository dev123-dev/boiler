import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { getAllOrganization } from "../../../actions/dag";



const AdminDashboard = ({
  auth: { isAuthenticated, user, users },
  dag: { allorg },getAllOrganization

}) => {


  useEffect(() => {
    getAllOrganization();
  }, []);

 //deactivate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orgdata, setorgdata] = useState(null);
 const onRenewal=(orgObj, id)=>{
  handleShow()
setorgdata(orgObj)

 }



  return !isAuthenticated || !user ? (
    <NotFound />
  ) : (

<>
<div className="container container_align ">
          <section className="sub_reg">
            <div className="row col-lg-12 col-md-12 col-sm-12 col-12 no_padding">
              {/* <div className="col-lg-10 col-md-11 col-sm-11 col-11 "> */}
              <h1  style={{ fontFamily: "Serif", color: "#877bae",fontSize:"45px" }} className="font-weight-bold ">Dashboard</h1><br/><br/>
              {/* </div> */}
            </div>
            {/* <div className="container-fluid mt-5"> */}
              <div className="row">
                <div className="col-lg-1"></div>
                <div
                  className="col-lg-4 card h2 text-center pt-5 "
                  id="shadow-bck"
                >
                Category
                </div>
                <div
                  className="col-lg-4 card  h2 text-center pt-5"
                  id="shadow-bck"
                >
                  Institution/Individual
                </div>
                <div className="col-lg-1"></div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div
                  className="col-lg-4 card h2 text-center pt-5"
                  id="shadow-bck"
                >
                  Empty Category
                </div>
                <div
                  className="col-lg-4 card h2 text-center pt-5 "
                  id="shadow-bck"
                >
                  Empty Institution/Individual
                </div>
                <div className="col-lg-1"></div>
              </div>
            {/* </div> */}
          </section>
        </div>
      


</>

  );
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  // getAllUsers: PropTypes.func.isRequired,
  // getSearchUsersByFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});

export default connect(mapStateToProps, {
  getAllOrganization,
})(AdminDashboard);



