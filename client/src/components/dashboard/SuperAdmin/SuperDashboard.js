import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
// import refresh from "../../static/images/download.png"
import refresh from "../../../static/images/download.png"
import { getAllOrganization } from "../../../actions/dag";
// import AddStaffFeedBack from "./AddStaffFeedBack";





const SuperDashboard = ({
  auth: { isAuthenticated, user, users },
  dag: { allorg }

}) => {
  useEffect(() => {
    getAllOrganization();
  },[]);

 console.log("superdashboard",allorg);
  //   const [showModal, setShowModal] = useState(false);
  //   const handleViewModalClose = () => setShowModal(false);

  //   const [userData, setUserData] = useState(null);

  //   const handleViewModalShow = (user) => {
  //     setUserData(user);
  //     setShowModal(true);
  //   };

  //   const [searchData, setSearchData] = useState({
  //     alphaSearch: "",
  //   });

  //   const { alphaSearch } = searchData;

  //   const onSelectChange = (e) => {
  //     if (e) {
  //       setSearchData({
  //         ...searchData,
  //         alphaSearch: e.value,
  //       });
  //       const finalData = {
  //         alphaSearch: e.value,
  //       };

  //       getSearchUsersByFilter(finalData);
  //     }
  //   };
  // const onKeyUp = (e) => {
  //   if (e.keyCode === 13) {
  //     const finalData = {
  //       alphaSearch: "",
  //     };
  //     getSearchUsersByFilter(finalData);
  //   }
  // };

  const onClickReset = () => {
    //added the reference value

    // setSearchData({
    //   ...searchData,
    //   alphaSearch: "",
    // });
    // getAllUsers();
  };

  return !isAuthenticated || !user ? (
    <NotFound />
  ) : (


    <div className="row">
      {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
    </div> */}
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
        <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Organisation Lists</h1><br /><br/>
        {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

        {/* <div className='text-right'>
            <button onClick={deletehandleShow}>Delete</button>
            <button onClick={edithandleShow}>edit</button>
            <img
                className="img_icon_size log text-right"
                //   onClick={() => handleAddOrg()}
                // onClick={handleShow}
                onClick={addhandleShow}
                src={addicon}
                alt="add-icon"
                title="add icon"
            /> &nbsp;&nbsp;&nbsp;
            <img
                className="img_icon_size log text-right"
                // onClick={() => onClickReset()}
                src={refresh}
                alt="refresh"

            />
        </div><br /> */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive">


          <table border="1" id="datatable2" >
          <thead>
            <tr className='headingsizes'>
              <th>Org Name</th>
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
                  return (
                    <tr key={idx}>
                      <td>{orgVal.orgName}</td>
                      <td>{orgVal.email}</td>
                      <td>{orgVal.phoneNumber}</td>
                      <td>{orgVal.startDate}</td>
                      <td>{orgVal.endDate}</td>
                      <td>{orgVal.orgStatus}</td>
                      <td>
                        {/* <img
                                                        className="img_icon_size log"
                                                        // onClick={() => onClickHandler()}
                                                        // onClick={() => clicking()}
                                                        // onClick={handleOpen}
                                                        // onClick={() => onedit(orgVal)}
                                                        src={require("../../../static/images/edit_icon.png")}
                                                        alt="Edit"
                                                        title="Edit User"
                                                    /> */}
                        {/* <img
                                                        className="img_icon_size log"
                                                        // onClick={() => onClickHandler()}
                                                        // onClick={() => onDelete(orgVal._id)}
                                                        src={require("../../../static/images/delete.png")}
                                                        alt="delete User"
                                                        title="delete User"
                                                    /> */}
                        <button>RENEWAL</button>
                      </td>

                      {/* {orgVal.AgreementStatus === "Expired" ? (
                    <td>
                      <center>
                         <button
                          variant="success"
                          className="btn sub_form"
                          // onClick={() =>
                          //   onRenewal(orgVal, idx)
                          // }
                        >
                          Renewal
                        </button> 
                      </center>
                    </td>
                  
                  ) : (
                    <td></td>
                  )} */}
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



