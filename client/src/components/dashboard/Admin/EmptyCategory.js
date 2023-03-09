import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllCategory } from "../../../actions/dag";

import { useHistory } from "react-router-dom";

const EmptyCategory = ({
  auth: { user },
  dag: { allcat },

  getAllCategory,
}) => {
  useEffect(() => {
    if (user) {
      getAllCategory(user.orgId);
    }
  }, []);

  const onClickReset = () => {
    if (user) {
      getAllCategory(user.orgId);
    }
  };

  let history = useHistory();
  const onJoinCat = (data) => {
    history.push("/joinleavecat", data);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
          <br />
          <br />
          <section>
            <h1
              style={{ fontFamily: "Serif", color: "#877bae" }}
              className="font-weight-bold "
            >
              List of Empty <span style={{ color: "#e79d69" }}>Categories</span>
            </h1>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                onClick={() => onClickReset()}
                alt="refresh"
                title="Refresh"
              />{" "}
              &nbsp;
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table table-bordered table-hover table-striped"
              >
                <thead>
                  <tr className="headingsizes">
                    <th style={{ width: "50%" }}>Category Name</th>
                    <th style={{ width: "40%" }}>Description</th>

                    <th style={{ width: "10%" }}>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {allcat &&
                    allcat.map((catVal, idx) => {
                      if (
                        catVal.categoryEntity &&
                        catVal.categoryEntity.length === 0 &&
                        catVal.categoryStatus === "Active"
                      ) {
                        return (
                          <tr key={idx}>
                            <td>{catVal.categoryName}</td>
                            <td>{catVal.categoryDesp}</td>

                            <td>
                              {catVal.categoryStatus === "Active" ? (
                                <>
                                  <img
                                    className="img_icon_size log"
                                    onClick={() => onJoinCat(catVal)}
                                    src={require("../../../static/images/account1.png")}
                                    alt="Join Leave"
                                    title="Join Leave Page"
                                  />
                                </>
                              ) : (
                                <>Deactivated</>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, {
  getAllCategory,
})(EmptyCategory);
