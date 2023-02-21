import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../layout/NotFound";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import refresh from "../../static/images/download.png"
// import AddStaffFeedBack from "./AddStaffFeedBack";





const DashBoard = ({
  auth: { isAuthenticated, user, users },

}) => {
  useEffect(() => {
    // getAllUsers();
  },);

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




    <div className="row">




      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left overflow-hidden"><br /><br />
        <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Dashboard</h1><br />

        {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}
        <div className="text-right">

          <img
            className="img_icon_size log text-right"
            // onClick={() => onClickReset()}
            src={refresh}
            alt="refresh"
            title="Refresh"
          />
        </div><br/>
        


     
        <div className="container-fluid">
          <div className="row  text-center body-inner no-padding table-responsive">
          <table border="1" id="datatable2" className="text-left mr-4">
   <tr className='headingsizes'>
       <th>Org Name</th>
       <th>Email</th>
       <th>Phone No.</th>
       <th>Start Date</th>
       <th>End Date</th>
       <th>Status</th>
       <th>Operation</th>
   </tr>
   
</table>














            {/* <div className="col">Org Name</div>
            <div className="col">Org Name</div>
            <div className="col">Org Name</div>
            <div className="col">Org Name</div>
            <div className="col">Org Name</div>
            <div className="col">Org Name</div>
            <div className="col">Org Name</div> */}




          </div>
        </div>
      </div>
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
