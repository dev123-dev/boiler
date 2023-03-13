import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getAllCategory } from "../../../actions/dag";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

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

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => {
    setShowAddModal(true);
  };

  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");

  const [viewdata, setviewdata] = useState(null);
  const onView = (user2) => {
    setviewdata(user2);

    handleOpen();
  };
  console.log("viewdata", viewdata);

  const history = useHistory();
  const [mydata, setmydata] = useState(location.state);
  const [showjoin, setShowjoin] = useState(false);
  //console.log("datafromemtycat", mydata);

  const ent = allent;

  const [entCatMembers, setEntCatMembers] = useState(mydata.categoryEntity);

  const [notMember, setNotMember] = useState(
    ent.filter(
      (ele) => !entCatMembers.some((item) => item["_id"] === ele["_id"])
    )
  );

  console.log("entcatmember", entCatMembers);
  console.log("not a mydata", mydata);
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
    var linkPath = "";
    const { categoryEntity, ...mydata1 } = mydata;

    axios
      .post(`${linkPath}/api/category/addCategoryEnt`, {
        catid: mydata._id,
        orgId: user.orgId,
        notAMember: notMember,
        categoryEntity: entCatMembers,
        categoryBelongs: mydata1,
        // {"_id":mydata._id,
        //  "categoryName":mydata.categoryName,
        //  "OrgId":mydata.orgId}
      })
      .then((res) => {
        console.log(res);
      });
    setShowjoin(false);
    history.push("/category");
    console.log("not a member", notMember);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
          <br />
          <br />
          <section>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-4">
              <h1
                style={{ fontFamily: "Serif", color: "#877bae" }}
                className="font-weight-bold "
              >
                Join or Leave From
                <span style={{ color: "#e79d69" }}>
                  {" "}
                  {" " + mydata.categoryName + " "}{" "}
                </span>
              </h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
                &nbsp;
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
            </div>
            <div className="container-fluid " style={{ minheight: "100%" }}>
              <div className="container">
                <div className="row-fluid">
                  <section className="body">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 padding_right table-responsive fixTableHeadjoin">
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
                                    {/* <button
                                      className="btn btn-sm "
                                      onClick={() => JoinEnt(ele, index)}
                                    >
                                      +
                                    </button> */}
                                    <img
                                      className="img_icon_size log"
                                      onClick={() => JoinEnt(ele, index)}
                                      src={require("../../../static/images/add-icon.png")}
                                      alt="Add "
                                      title="Add "
                                    />
                                  </td>
                                  <td>{ele.entName}</td>
                                  <td>{ele.entType}</td>
                                  <td>
                                    {" "}
                                    <a
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                      }}
                                      onClick={() => onView(ele)}
                                    >
                                      View
                                    </a>
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
                          Total:{" "}
                          <strong style={{ fontsize: "18px" }}>
                            {notMember && notMember.length}
                          </strong>
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
                                    {/* <button
                                      className="btn btn-sm "
                                      onClick={() => LeaveEnt(ele, index)}
                                    >
                                      -
                                    </button> */}
                                    <img
                                      className="img_icon_size log"
                                      onClick={() => LeaveEnt(ele, index)}
                                      src={require("../../../static/images/close2.png")}
                                      alt="Leave "
                                      title="Leave"
                                    />
                                  </td>
                                  <td>{ele.entName}</td>
                                  <td>{ele.entType}</td>
                                  <td>
                                    {" "}
                                    {/* <button
                                      onClick={() => onView(ele)}
                                      // onClick={handleOpen}
                                      className="btn btn-sm "
                                    >
                                      View
                                    </button> */}
                                    <a
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                      }}
                                      onClick={() => onView(ele)}
                                    >
                                      View
                                    </a>
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
                          Total:{" "}
                          <strong style={{ fontsize: "18px" }}>
                            {entCatMembers && entCatMembers.length}
                          </strong>
                        </label>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="text-right my-4">
                  <button
                    className="btn btn-outline-secondary btnall "
                    onClick={() => setShowjoin(true)}
                    style={{ border: "1px solid black" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Save  */}
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
            <button
              className="btn btn-outline-secondary btnall"
              onClick={savent}
            >
              YES
            </button>
            <button
              className="btn btn-outline-secondary btnall"
              onClick={() => setShowjoin(false)}
            >
              NO
            </button>
          </Modal.Footer>
        </Modal>

        {/* View Modal */}
        <Modal
          show={showAddModal}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title className="container">
              <h1 className="font-weight-bold ">Additional Details</h1>
            </Modal.Title>
            <div className="col-lg-2">
              <button onClick={() => handleAddClose()} className="close">
                <img
                  src={require("../../../static/images/close.png")}
                  alt="X"
                  style={{ height: "20px", width: "20px" }}
                />
              </button>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label"> Name </label>
                      <div className="controls">
                        <input
                          name="fullName"
                          id="cat_name"
                          type="text"
                          className="form-control"
                          readOnly
                          value={viewdata && viewdata.entName}
                        />

                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Designation/Order</label>
                      <div className="controls">
                        <input
                          name="UserName"
                          id="category_status"
                          type="text"
                          className="form-control"
                          value={viewdata && viewdata.entOrderDesg}
                          readOnly
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Phone No.</label>
                      <div className="controls">
                        <input
                          name="UserNumber"
                          id="category_status"
                          type="text"
                          className="form-control"
                          readOnly
                          value={viewdata && viewdata.entPhone}
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Email </label>
                      <div className="controls">
                        <input
                          name="UserEmail"
                          id="cat_name"
                          type="text"
                          className="form-control"
                          value={viewdata && viewdata.entEmail}
                          readOnly
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Address</label>
                      <div className="controls">
                        <textarea
                          rows="2"
                          name="UserAddress"
                          id="category_description"
                          className="form-control"
                          value={
                            viewdata &&
                            viewdata.entAddress1 +
                              " " +
                              viewdata.entAddress2 +
                              " " +
                              viewdata.entAddress3
                          }
                          readOnly
                        ></textarea>
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  body-inner no-padding table-responsive fixTableHeadview">
                    <label>Category List in which they exists</label>
                    <table
                      border="1"
                      id="datatable2"
                      className="table-striped table table-bordered table-hover"
                    >
                      <thead>
                        <tr className="headingsizes">
                          <th style={{ width: "30%" }}>SL. No.</th>
                          <th style={{ width: "70%" }}>Category Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {viewdata &&
                          viewdata.categoryBelongs &&
                          viewdata.categoryBelongs.map((catVal, idx) => {
                            return (
                              <tr key={idx}>
                                <td> {idx + 1}</td>
                                <td>{catVal.categoryName}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <div className="text-right">
                <button
                  onClick={handleAddClose}
                  className="btn btn-outline-secondary btnall "
                >
                  CANCEL
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
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
