import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddUserModal from "./AddUserModal";
import Modal from "react-bootstrap/Modal";
import { getAllUser } from "../../../actions/dag";
import { getAllOrganization } from "../../../actions/dag";
import { deleteUser } from "../../../actions/dag";
import EditUser from "./EditUser";
import Select from "react-select";
import { useHistory } from "react-router-dom";

const Users = ({
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { alluser },
  dag: { allorg },

  deleteUser,
  getAllUser,
  getAllOrganization,
}) => {
  useEffect(() => {
    getAllUser();
    getAllOrganization();
    // console.log(alluser)
  }, []);

  //deactivate
  const [formData, setFormData] = useState({
    User_DE_Reason: "",
    isSubmitted: false,
  });

  const { User_DE_Reason } = formData;
  const onInputchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //deactivate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);

  const [UserId, setId] = useState("");

  const onDelete = (id) => {
    setId(id);
    handleShow();
  };

  const [orgdata, setorgdata] = useState(null);
  const onedit = (user2) => {
    setShowUpdateModal(true);
    setorgdata(user2);
    handleOpen();
  };

  const onClickReset = () => {
    // setCurrentData(1);
    // getbatchsData("");
    getAllUser("");
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => setShowUpdateModal(false);

  const [oraganisation, getOraganisationData] = useState();
  const [oraganisationId, setOraganisationId] = useState();
  const [oraganisationName, setOraganisationName] = useState();

  const allOraganisation = [];
  allorg.map((oraganisation) =>
    allOraganisation.push({
      oraganisationId: oraganisation._id,
      label: oraganisation.orgName,
      value: oraganisation.orgName,
    })
  );

  const onOraganisationChange = (e) => {
    //console.log(e);
    var oraganisationId = "";
    var oraganisationName = "";
    getOraganisationData(e);

    oraganisationId = e.oraganisationId;
    oraganisationName = e.value;

    setOraganisationId(oraganisationId);
    setOraganisationName(oraganisationName);
    const changeData = {
      oraganisationIdVal: e.oraganisationId,
    };
    getAllUser(changeData);
  };

  //deactivate
  const onAdd = (e) => {
    e.preventDefault();
    const reason = {
      User_id: UserId,

      deactive_reason: User_DE_Reason,
    };
    deleteUser(reason);
    handleClose();
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
              Users Lists
            </h1>

            {/* <select>
            <option>-select Org name-</option>
            {allorg &&
                            allorg.map((org, idx) => {

                              if (org.orgStatus === "Active") {
                                return (<option key={idx} value={org.orgName}>{org.orgName}</option>)
                              }
                            })
                          }

          </select> */}
            <div style={{ width: "250px" }}>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "grey" : "purple",
                  }),
                }}
                name="institutionName"
                options={allOraganisation}
                isSearchable={true}
                value={oraganisation}
                placeholder="Select Oraganisation"
                onChange={(e) => onOraganisationChange(e)}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                onClick={() => onClickReset()}
                alt="refresh"
              />{" "}
              &nbsp;
              <AddUserModal />
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table-striped table table-bordered table-hover"
              >
                <thead>
                  <tr className="headingsizes">
                    <th>Full Name</th>
                    <th>Org Name</th>
                    <th>User Group</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Address</th>

                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {alluser &&
                    alluser.map((userVal, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{userVal.fullName}</td>
                          <td>{userVal.orgName}</td>
                          <td>{userVal.userGroup}</td>
                          <td>{userVal.email}</td>
                          <td>{userVal.phone}</td>
                          <td>{userVal.address}</td>

                          <td>
                            {userVal.userStatus === "Active" ? (
                              <>
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onedit(userVal)}
                                  src={require("../../../static/images/edit_icon.png")}
                                  alt="Edit"
                                  title="Edit User"
                                />
                                &nbsp;&nbsp;
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onDelete(userVal._id)}
                                  src={require("../../../static/images/delete.png")}
                                  alt="delete User"
                                  title="Deactivate User"
                                />
                              </>
                            ) : (
                              <>Deactivated</>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="text-right">
                <label>No. of Users :{alluser && alluser.length}</label>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* modal for deactivating start */}

      <Modal
        show={show}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          {/* <Modal.Title className="container">
            <h1 className="font-weight-bold ">DEACTIVATE USERS</h1>
          </Modal.Title> */}
          <div className="col-lg-11 ">
            <h3 className="modal-title text-center">DEACTIVATE </h3>
          </div>

          <div className="col-lg-1">
            <button onClick={handleClose} className="close">
              <img
                src={require("../../../static/images/close.png")}
                alt="X"
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <label className="control-label">Reason for Deactivating:</label>
          <form onSubmit={(e) => onAdd(e)}>
            <div className="controls">
              <textarea
                rows="2"
                name="User_DE_Reason"
                onChange={(e) => onInputchange(e)}
                id="org_reason"
                className="form-control"
                required
              ></textarea>
              <span className="form-input-info"></span>
              Do You really want to Deactivate this user?
            </div>
            <div className="text-right">
              <button className="btn btn-outline-secondary btnall">
                {" "}
                DEACTIVATE
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* edit modal */}
      <Modal
        show={showUpdateModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h3 className="modal-title text-center">Edit Users Details </h3>
          </div>
          <div className="col-lg-1">
            <button onClick={handleUpdateModalClose} className="close">
              <img
                src={require("../../../static/images/close.png")}
                alt="X"
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <EditUser userdata={orgdata} closeedit={handleUpdateModalClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dag: state.dag,
});
export default connect(mapStateToProps, {
  getAllUser,
  deleteUser,
  getAllOrganization,
})(Users);
