import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import refresh from "../../../static/images/download.png"
import { getAllOrganization } from "../../../actions/dag";
import RenewOrg from "./RenewOrg";

const SuperDashboard = ({
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
    <div className="row">
      {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
    </div> */}
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
        <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Dashboard</h1><br/><br/>
        
        
        <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">


          <table border="1" id="datatable2" className="table-striped  table-bordered table-hover" >
          <thead>
            <tr className='headingsizes'>
              <th>Organization Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
            </thead>
            <tbody>
              {allorg &&

                allorg.map((orgVal, idx) => {
<<<<<<< HEAD
                  
=======
>>>>>>> db1784cb34bf447018a8565e7f9756599599c72a
                  // var ED = orgVal.startDate.split(
                  //   /\D/g
                  // );
                  // var StartDate = [ED[2], ED[1], ED[0]].join(
                  //   "-"
                  // );
                  // var EDE = orgVal.endDate.split(
                  //   /\D/g
                  // );
                  // var EndDate = [
                  //   EDE[2],
                  //   EDE[1],
                  //   EDE[0],
                  // ].join("-");
<<<<<<< HEAD

=======
>>>>>>> db1784cb34bf447018a8565e7f9756599599c72a
                  return (
                    <tr key={idx}>
                      <td>{orgVal.orgName}</td>
                      <td>{orgVal.email}</td>
                      <td>{orgVal.phoneNumber}</td>
                      <td>{orgVal.startDate}</td>
                      <td>{orgVal.endDate}</td>
                      <td>{orgVal.orgStatus}</td>
                      <td>
                        {orgVal.orgStatus === "Deactive" ? (
                    
                         <button
                          // variant="success"
                          className="btn contact_reg btn_color"
                          // onClick={() =>
                          //   onRenewal(orgVal, idx)
                          // }
                          onClick={() => onRenewal(orgVal, idx)}
                        >
                          Renewal
                        </button> 
                    
      
                  
                  ) : (
                    <></>
                  )}
                        {/* <button>RENEWAL</button> */}
                      </td>

                      
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
    </div> */}
    </div>

    <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div className="col-lg-10">
            <h3 className="modal-title text-center">Renew Organization</h3>
          </div>
          <div className="col-lg-2">
            <button onClick={handleClose} className="close">
              <img
                src={require("../../../static/images/close.png")}
                alt="X"
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>

          {/* <EditOrganization Org={orgdata} /> */}
          <RenewOrg Org={orgdata} />


        </Modal.Body>

      </Modal>
</>

  );
};

SuperDashboard.propTypes = {
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
})(SuperDashboard);



