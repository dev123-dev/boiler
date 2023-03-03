import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";
import { loadUser } from "../../../actions/auth";
import { getAllCategory } from "../../../actions/dag";

const AdminDashboard = ({
  auth: { isAuthenticated, user },
  dag: { allcat },
  loadUser,
 
}) => {

  useEffect(() => {

    loadUser()
    if (user) {
      getAllCategory(user.orgId);
      console.log("run get allcat")
    }
    getcatcount();

  }, []);
  
console.log(user)
  const[catcount,setCatcount]=useState(null)

  const getcatcount=()=>{
    allcat.map((ele,index)=>setCatcount(index+1))
  }

  return !isAuthenticated || !user ? (
    <NotFound />
  ) : (
    <>
      <div className="container container_align ">
        <section className="sub_reg">
          <div className="row col-lg-12 col-md-12 col-sm-12 col-12 no_padding">
            <h1
              style={{
                fontFamily: "Serif",
                color: "#877bae",
                fontSize: "45px",
              }}
              className="font-weight-bold "
            >
              Dashboard
            </h1>
            <br />
            <br />
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 card h2 text-center pt-5 " id="shadow-bck">
              <div className="text-center">
                <img
                  className="img_icon_sizeDashboard log "
                  src={require("../../../static/images/category.png")}
                  alt="category"
                />
              </div>
              <div onClick={()=> getAllCategory(user.orgId)}>
                <h2>Category</h2>
                <h4>{catcount}</h4>
              </div>
            </div>
            <div className="col-lg-5 card  h2 text-center pt-5" id="shadow-bck">
              <div className="text-center">
                <img
                  className="img_icon_sizeDashboard log "
                  src={require("../../../static/images/institution.png")}
                  alt="category"
                />
              </div>
              <div>
                <h2>Instit/Individal</h2>
                <h4> 555</h4>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 card h2 text-center pt-5" id="shadow-bck">
              <div>
                <h2> Empty Category</h2>
                <h4> 555</h4>
              </div>{" "}
            </div>
            <div className="col-lg-5 card h2 text-center pt-5 " id="shadow-bck">
              <div>
                <h2> Empty Instit/Individual</h2>
                <h4> 555</h4>
              </div>{" "}
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
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});

export default connect(mapStateToProps, {
 getAllCategory,loadUser,
})(AdminDashboard);
