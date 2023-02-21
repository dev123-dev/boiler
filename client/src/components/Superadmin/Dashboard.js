import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../layout/NotFound";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import refresh from "../../static/images/download.png"
// import AddStaffFeedBack from "./AddStaffFeedBack";





const DashBoard= ({
  auth: { isAuthenticated, user, users },

}) => {
  useEffect(() => {
    // getAllUsers();
  }, );

  console.log(users);

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
    
     <div>
         <div className="row">
    

          
            <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
            
            <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Dashboard</h1><br/>
           

    
            {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}
            <div className='text-right'>
             <img
                className="img_icon_size log text-right"
                
                src={refresh}
                alt="refresh"
                title="Refresh"
              />
              </div>
    
           
                  <br/>
           
             <div className="">  
            <table border="1" id="datatable2"  >
                <tr className='headingsizes'>
                    <th>Org Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Operation</th>
                </tr>
                <tr>
                    
                </tr>
            </table>
            </div> 
            </div>
            
        </div>
        {/* <section className="sub_reg">
          <form>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <h2 className="heading_color">All Staff Details</h2>
              </div>
              <div
                className="col-lg-2 col-md-6 col-sm-6 col-6 no_padding "
                style={{ marginTop: "15px" }}
              >
                <Select
                  name="alphaSearch"
                  options={optName}
                  isSearchable={false}
                  placeholder="Filter By:All"
                  onChange={(e) => onSelectChange(e)}
                  theme={(theme) => ({
                    ...theme,
                    height: 26,
                    minHeight: 26,
                    borderRadius: 1,
                    colors: {
                      ...theme.colors,
                      primary: "black",
                    },
                  })}
                />
              </div>

              <div className="col-lg-1 col-md-2 col-sm-12 col-12 label-control align_right">
                <img
                  className="img_icon_size log"
                  onClick={() => onClickReset()}
                  src={require("../../static/images/refresh-icon.png")}
                  alt="refresh"
                  title="Refresh"
                />
              </div>
            </div>
          </form>
          <section className="body">
            <div className="body-inner no-padding  table-responsive">
              <table
                className="table table-bordered table-striped table-hover"
                id="datatable2"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <strong>Staff Name</strong>
                    </th>

                    <th>
                      <strong>Designation</strong>
                    </th>

                    <th>
                      <strong>Operations</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, idx) => {
                      return (
                        <tr key={idx}>
                          <td>
                            <img
                              src={require(`../../static/staffprofile/${user.sdProfile}`)}
                              alt="green"
                            />
                          </td>
                          <td>{user.sdName}</td>
                          <td>{user.sdDesig}</td>

                          <td style={{ width: "17%" }}>
                            <Link
                              to="#"
                              className="btnLink"
                              onClick={() => handleViewModalShow(user)}
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <Modal
                show={showModal}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <div className="col-lg-10">
                    <h3 className="modal-title text-center">User Details</h3>
                  </div>
                  <div className="col-lg-2">
                    <button onClick={handleViewModalClose} className="close">
                      <img
                        src={require("../../static/images/close.png")}
                        alt="X"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </button>
                  </div>
                </Modal.Header>

                <Modal.Body className="userDetailsModalBody">
                  <AddStaffFeedBack user={userData} />
                </Modal.Body>
              </Modal>
            </div>
          </section>
        </section> */}
      
    </div>
  );
};

DashBoard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getSearchUsersByFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
//   getAllUsers,
//   getSearchUsersByFilter,
})(DashBoard);
