import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddOrgModal from "./AddOrgModal";

import Modal from "react-bootstrap/Modal";
import { getAllOrganization } from "../../../actions/dag";
import { deleteOrganization } from "../../../actions/dag";

import EditOrganization from "./EditOrganization";

const Organization = ({
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { allorg },
  auth: { isAuthenticated, user, users },
  deleteOrganization,
  getAllOrganization,
}) => {
  useEffect(() => {
    getAllOrganization();
  }, []);

  // const onClickReset = () => {

  //   // setCurrentData(1);
  //   // getbatchsData("");
  //   getAllOrganization("");
  // };

  //deactivate
  const [formData, setFormData] = useState({
    Organization_DE_Reason: "",
    isSubmitted: false,
  });

  const { Organization_DE_Reason } = formData;

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
  const onAddStaffModalChange = (e) => {
    if (e) {
      handleEditModalClose();
    }
  };

  const [OrgId, setId] = useState("");

  const onDelete = (id) => {
    setId(id);
    handleShow();
  };

  const [orgdata, setorgdata] = useState(null);
  const onedit = (org) => {
    setShowUpdateModal(true);

    setorgdata(org);
    handleOpen();
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => setShowUpdateModal(false);

  const onAdd = (e) => {
    e.preventDefault();
    const reason = {
      Org_id: OrgId,

      deactive_reason: Organization_DE_Reason,
      DeactiveById: user._id,
      DeactiveByName: user.Name,
      DeactiveByDateTime: new Date().toLocaleString("en-GB"),
    };
    deleteOrganization(reason);
    handleClose();
  };

  return (
    <div>
      <div className="row">
        {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
    </div> */}

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
          <br />
          <br />
          <h1
            style={{ fontFamily: "Serif", color: "#877bae" }}
            className="font-weight-bold "
          >
            Organisation Lists
          </h1>

          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
            <img
              className="img_icon_size log text-right"
              src={require("../../../static/images/refresh-icon.png")}
              onClick={() => onClickReset()}
              // src={refresh}
              alt="refresh"
            />{" "}
            &nbsp;
            <AddOrgModal />
          </div> */}
          <AddOrgModal />

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
            <table
              border="1"
              id="datatable2"
              className="table-striped table table-bordered table-hover"
            >
              <thead>
                <tr className="headingsizes">
                  <th>Org Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Address</th>

                  <th>Status</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {allorg &&
                  allorg.map((orgVal, idx) => {
                    if (orgVal.orgStatus == "Active") {
                      return (
                        <tr key={idx}>
                          <td>{orgVal.orgName}</td>
                          <td>{orgVal.email}</td>
                          <td>{orgVal.phoneNumber}</td>
                          <td>{orgVal.address}</td>

                          <td>{orgVal.orgStatus}</td>
                          <td>
                            <img
                              className="img_icon_size log"
                              onClick={() => onedit(orgVal)}
                              src={require("../../../static/images/edit_icon.png")}
                              alt="Edit"
                              title="Edit Organization"
                            />
                            &nbsp;&nbsp;
                            <img
                              className="img_icon_size log"
                              onClick={() => onDelete(orgVal._id)}
                              src={require("../../../static/images/delete.png")}
                              alt="delete User"
                              title="Deactivate Organization"
                            />
                          </td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*deactivating  */}

      <Modal
        show={show}
        // onHide={handleClose}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title className="container">
            <h1 className="font-weight-bold ">DEACTIVATE ORGANIZATION</h1>
          </Modal.Title>
          <div className="col-lg-2">
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
                name="Organization_DE_Reason"
                onChange={(e) => onInputchange(e)}
                id="org_reason"
                className="form-control"
                required
              ></textarea>
              Do You really want to Deactivate this Organization?
              <span className="form-input-info"></span>
            </div>
            <div className="text-right">
              <button className="btn contact_reg btn_color" type="submit">
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
          <div className="col-lg-11 ">
            <h3 className="modal-title text-center">
              Edit Organization Details{" "}
            </h3>
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
          <EditOrganization Org={orgdata} closeedit={handleUpdateModalClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dag: state.dag,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  getAllOrganization,
  deleteOrganization,
})(Organization);
