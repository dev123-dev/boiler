import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { getAllUserGroup } from "../../../actions/dag";
import { deleteUserGroup } from "../../../actions/dag";
import AddUserGroup from "./AddUserGroup";

const UserGroup = ({
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { allusergrp },
  deleteUserGroup,
  getAllUserGroup,
}) => {
  useEffect(() => {
    getAllUserGroup();
  }, []);

  //deactivate
  const [formData, setFormData] = useState({
    User_DE_Reason: "",
    isSubmitted: false,
  });

  //deactivate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [groupname, setname] = useState("");

  const onDelete = (grpname) => {
    setname(grpname);
    handleShow();
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => setShowUpdateModal(false);

  //deactivate
  const onAdd = (e) => {
    e.preventDefault();
    const reason = {
      groupName: groupname,
    };
    deleteUserGroup(reason);
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
              User Group Lists
            </h1>

            <AddUserGroup />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table-striped table table-bordered table-hover"
              >
                <thead>
                  <tr className="headingsizes">
                    <th>Group Name</th>
                    <th>Status</th>

                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {allusergrp &&
                    allusergrp.map((grpVal, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{grpVal.groupName}</td>
                          <td>{grpVal.groupStatus}</td>

                          <td>
                            {grpVal.groupStatus == "Active" ? (
                              <>
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onDelete(grpVal.groupName)}
                                  src={require("../../../static/images/delete.png")}
                                  alt="delete User"
                                  title="delete UserGroup"
                                />
                              </>
                            ) : (
                              <></>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      {/*DEACTIVATE MODAL */}

      <Modal
        show={show}
        // onHide={handleClose}
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
          <div className="h4">Do You Want to DELETE this User Group?</div>
          <div className="text-right">
            <button
              onClick={(e) => onAdd(e)}
              className="btn btn-outline-secondary btnall"
            >
              DELETE
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dag: state.dag,
});
export default connect(mapStateToProps, {
  getAllUserGroup,
  deleteUserGroup,
})(UserGroup);
