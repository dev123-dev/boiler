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
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("user"));

    if (myuser) {
      getAllCategory(myuser.orgId);
      getAllEntity(myuser.orgId);
      console.log("called get cat", allcat);
      setarr();
    }
  }, []);

  const [emptyCatcount, setemptyCatcount] = useState(0);
  // const userNames = allcat.map(({ categoryEntity }) => categoryEntity);
  // console.log("username", userNames);
  const setarr = () => {
    // console.log("allcat", allcat);

    const emptyarrlength =
      allcat &&
      allcat.map((obj) => {
        const innerarray = obj.categoryEntity;
        if (innerarray !== null && innerarray.length === 0) {
          return 1;
        } else {
          return 0;
        }
      });
    const zerocount =
      emptyarrlength &&
      emptyarrlength.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    console.log("zerocount", zerocount);
    setemptyCatcount(zerocount);
  };

  // const [emptCatcount, setEmptCatcount] = useState(0);
  // const setarr = () => {
  //   const arr =
  //     allcat &&
  //     allcat.map((ele) => {
  //       if (ele.categoryEntity.length === 0) {
  //         return 1;
  //       } else {
  //         return 2;
  //       }
  //     });
  //   const element = 1;
  //   let count = 0;
  //   console.log("array", arr);
  //   console.log("arraylength", arr && arr.length);
  //   for (var i = 0; i < arr.length; ++i) {
  //     if (arr[i] == element) count++;
  //   }
  //   setEmptCatcount(count);
  //   console.log("count", count);
  // };

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
                    {emptyCatcount}
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
