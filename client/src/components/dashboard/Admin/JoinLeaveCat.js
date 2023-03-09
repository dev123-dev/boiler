import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getAllCategory } from "../../../actions/dag";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
//import { loadUser } from "../../../actions/auth";

const JoinLeaveCat = ({
  auth: { user },
  dag: { allent },
  location,
  getAllCategory,
}) => {
  const myuser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (myuser) {
      getAllCategory(myuser.orgId);
    }
  }, []);
  const history = useHistory();
  const [mydata, setmydata] = useState(location.state);
  const [showjoin, setShoejoin] = useState(false);
  console.log("datafromemtycat", mydata);

  const ent = allent;

  const [entCatMembers, setEntCatMembers] = useState(mydata.categoryEntity);

  const [notMember, setNotMember] = useState(
    ent.filter(
      (ele) => !entCatMembers.some((item) => item["_id"] === ele["_id"])
    )
  );
  console.log("not a mem", entCatMembers);

  const JoinEnt = (ele, index) => {
    setEntCatMembers([...entCatMembers, ele]);

    const updated = notMember.filter((elem, id) => {
      return index !== id;
    });
    setNotMember(updated);
  };

  const LeaveEnt = (ele, index) => {
    setNotMember([...notMember, ele]);

    const updated = entCatMembers.filter((elem, id) => {
      return index !== id;
    });

    setEntCatMembers(updated);
  };

  const savent = () => {
    //console.log("inside save",mydata._id, " user org id",user.orgId);

    var linkPath = "";

    axios
      .post(`${linkPath}/api/category/addCategoryEnt`, {
        catid: mydata._id,
        orgId: user.orgId,
        categoryEntity: entCatMembers,
      })
      .then((res) => {
        console.log(res);
      });
    setShoejoin(false);
    history.push("/category");
  };

  return (
    <div>
      <div className="mt-5">
        <section id="section-register">
          <div className="container-fluid " style={{ minheight: "100%" }}>
            <div className="container">
              <div className="row-fluid">
                <section className="body">
                  <div className="row form-group">
                    <div className="col-md-10 col-lg-10 col-sm-10 col-xs-9 no-pad">
                      <h3>
                        Join or Leave For {" " + mydata.categoryName + " "}{" "}
                        category
                        <span style={{ color: "#ff9500" }}></span>
                      </h3>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right">
                      <button
                        className="btn btn-outline-secondary btn-sm mx-3"
                        onClick={() => setShoejoin(true)}
                        style={{ border: "1px solid black" }}
                      >
                        Save
                      </button>
                      <img
                        className="img_icon_size log"
                        src={require("../../../static/images/back.png")}
                        alt="Add User"
                        title="Back"
                        onClick={() => {
                          history.push("/category");
                        }}
                      />
                    </div>
                    <br />
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 padding_right table-responsive fixTableHeadjoin">
                      {/* <div className="body-inner table-responsive padding_col_xs">  */}
                      <table
                        className="table table-bordered table-striped table-hover"
                        id="datatable2"
                      >
                        <thead>
                          <tr>
                            <th style={{ width: "5%" }}>Join</th>
                            {/* <form id="joinForm" method="POST"> */}
                            <th style={{ width: "80%" }}>
                              Name
                              <input
                                type="hidden"
                                name="callFromJoin"
                                value="SearchJoin"
                              />
                              {/* <input
                                className="search_control"
                                type="text"
                                name="joinEntName"
                                placeholder="Search"
                              /> */}
                            </th>
                            {/* </form> */}
                            <th style={{ width: "10%" }}>Type</th>
                            <th style={{ width: "5%" }}>Op</th>
                          </tr>
                        </thead>
                        <tbody>
                          {notMember.map((ele, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <button onClick={() => JoinEnt(ele, index)}>
                                    +
                                  </button>
                                </td>
                                <td>{ele.entName}</td>
                                <td>{ele.entType}</td>
                                <td>
                                  {" "}
                                  <button>Op</button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      <label
                        style={{
                          fontsize: "18px",
                          color: "#5b5b5b",
                          margintop: "-0.2px;",
                        }}
                        className=" text-right"
                      >
                        Total: <strong style={{ fontsize: "18px" }}></strong>
                      </label>
                    </div>

                    <div
                      className="col-md-6 col-lg-6 col-sm-12 col-xs-12 padding_left  table-responsive fixTableHeadjoin"
                      style={{ paddingright: " 0px" }}
                    >
                      <table
                        className="table table-bordered table-striped table-hover"
                        id="datatable2"
                      >
                        <thead>
                          <tr>
                            <th style={{ width: "5%" }}>Leave</th>
                            {/* <form id="leaveForm" method="POST"> */}
                            <th style={{ width: "80%" }}>
                              Name &nbsp;
                              {/* <input
                                id="idSrchLeave"
                                className="search_control"
                                type="text"
                                name="leaveEntName"
                                placeholder="Search"
                              />
                              <input type="hidden" name="callFromLeave" /> */}
                            </th>
                            {/* </form> */}
                            <th style={{ width: "10%" }}>Type</th>
                            <th style={{ width: "5%" }}>Op</th>
                          </tr>
                        </thead>
                        <tbody>
                          {entCatMembers.map((ele, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <button onClick={() => LeaveEnt(ele, index)}>
                                    -
                                  </button>
                                </td>
                                <td>{ele.entName}</td>
                                <td>{ele.entType}</td>
                                <td>
                                  {" "}
                                  <button>Op</button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {/* <ul className="pagination pagination-sm" style={{margintop: "1px"}}>

</ul> */}
                      <label
                        style={{
                          fontsize: "18px",
                          color: "#5b5b5b",
                          margintop: "-0.2px",
                        }}
                        className="pull-right"
                      >
                        Total: <strong style={{ fontsize: "18px" }}></strong>
                      </label>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        show={showjoin}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="logout-modal"
      >
        <Modal.Header className="confirmbox-heading">
          <h4 className="mt-0">Confirmation</h4>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to join this Entity?</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn contact_reg btn_color" onClick={savent}>
            YES
          </button>
          <button
            className="btn contact_reg btn_color"
            onClick={() => setShoejoin(false)}
          >
            NO
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, {
  //deleteCategory,
  // loadUser,
  getAllCategory,
})(JoinLeaveCat);
