import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";

//import { getAllOrganization } from "../../../actions/dag";
import { getAllCategory } from "../../../actions/dag";
const AdminDashboard = ({

  auth: { isAuthenticated, user},
  dag: { allcat },getAllCategory
  
}) => {
  useEffect(() => {
    //getAllOrganization();
    getAllCategory(user.orgId);
  }, []);

  const[catcount,setCatcount]=useState(null)
allcat.map((ele,index)=>setCatcount(index+1))

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
                Category<br></br>
                {catcount}
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
 getAllCategory,
})(AdminDashboard);



