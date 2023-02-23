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
  dag:{allorg}
  
}) => {
  useEffect(() => {
    getAllOrganization("");
    
  },[]);

  // console.log(users);
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
    <div className="container container_align ">
    {/* OrganiZation Details  start*/}
    <section className="sub_reg">
        <div className="row col-lg-12 col-md-12 col-sm-12 col-12 no_padding">
            <div className="col-lg-10 col-md-11 col-sm-11 col-11 ">
                <h2 className="heading_color">Organization List </h2>
            </div>

           
        </div>
        <div className="row">
            <div className="col-lg-11 col-md-11 col-sm-11 col-11 text-center ">
                <section className="body">
                    <div className="body-inner no-padding  table-responsive fixTableHead">
                        <table
                            className="table table-bordered table-striped table-hover"
                            id="datatable2"
                        >
                            <thead>
                                <tr>
                                    <th>Org Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    {/* <th>Number of Users</th> */}
                                    <th> Status</th>
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
                </section>
            </div>
        </div>
    </section>
    {/* OrganiZation Deatils End */}
</div>



    
);
};

SuperDashboard .propTypes = {
auth: PropTypes.object.isRequired,
// getAllUsers: PropTypes.func.isRequired,
// getSearchUsersByFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
auth: state.auth,
dag:state.dag,
});

export default connect(mapStateToProps, {
getAllOrganization,
})(SuperDashboard);



