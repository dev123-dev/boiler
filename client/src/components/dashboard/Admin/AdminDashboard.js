import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFound from "../../layout/NotFound";
import { loadUser } from "../../../actions/auth";
import { getAllCategory, getAllEntity } from "../../../actions/dag";

const AdminDashboard = ({
  auth: { isAuthenticated, user },
  dag: { allcat, allent },
  getAllCategory,
  getAllEntity,
}) => {
  const myuser = JSON.parse(localStorage.getItem("user"));
  const[refreshPage,setRefreshPage]=useState(true)
  useEffect(() => {
    if (myuser) {
      getAllCategory(myuser.orgId);
      console.log("user  ",myuser.fullName)
      console.log("allcat ",allcat)
      
     
      getAllEntity(myuser.orgId);
      setarr();
    }
  }, [refreshPage]);
  
  const [emptyCatcount, setemptyCatcount] = useState(0);
  
  const setarr = () => {
   
    
    const catArray = allcat && allcat.map(ele => ele && ele.categoryEntity);
   
    const emptyHobbiesArray = catArray && catArray.filter(ele => ele && ele.length === 0);
    const countEmptycat =emptyHobbiesArray && emptyHobbiesArray.length;
    //console.log(countEmptycat);

    setemptyCatcount(countEmptycat);

  };

  return !isAuthenticated || !user ? (
    <NotFound />
  ) : (
    <>
      <div className="container container_align ">
        <div>
          <div className="row col-lg-12 col-md-12 col-sm-12 col-12 no_padding">
            <h1
              style={{
                fontFamily: "Serif",
                color: "#877bae",
              }}
              className="font-weight-bold "
            >
              Dashboard
            </h1>
            <br />
            <br />
          </div>

          <section className="sub_reg">
            <div className="row">
              <div className="col-lg-1"></div>
              <div
                className="col-lg-5 card h2 text-center pt-5 "
                id="shadow-bck"
              >
                <div className="text-center">
                  <img
                    className="img_icon_sizeDashboard log "
                    src={require("../../../static/images/category.png")}
                    alt="category"
                  />
                </div>
                <div>
                  <h2>Category</h2>
                  <h4>{allcat && allcat.length}</h4>
                </div>
              </div>
              <div
                className="col-lg-5 card  h2 text-center pt-5"
                id="shadow-bck"
              >
                <div className="text-center">
                  <img
                    className="img_icon_sizeDashboard log "
                    src={require("../../../static/images/institution.png")}
                    alt="category"
                  />
                </div>
                <div>
                  <h2>Instit/Individal</h2>
                  <h4>{allent && allent.length}</h4>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div
                className="col-lg-5 card h2 text-center pt-5"
                id="shadow-bck"
              >
                <div>
                  <h2> Empty Category</h2>
                  <h4>
                    {" "}
                    { emptyCatcount}
                    {/* {allcat &&
                      allcat.categoryEntity &&
                      allcat.categoryEntity.length} */}
                  </h4>
                </div>{" "}
              </div>
              <div
                className="col-lg-5 card h2 text-center pt-5 "
                id="shadow-bck"
              >
                <div>
                  <h2> Empty Instit/Individual</h2>
                  <h4> 5</h4>
                </div>{" "}
              </div>
              <div className="col-lg-1"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllCategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});

export default connect(mapStateToProps, {
  getAllCategory,
  getAllEntity,
  loadUser,
})(AdminDashboard);
