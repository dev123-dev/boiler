import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
// import { getallcatGroup } from "../../../actions/dag";
import { getAllCategory } from "../../../actions/dag";
import Addcategory from "./AddCategory";

const Category = ({
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { allcat },
  //deleteCategory,
  getAllCategory,
}) => {
  useEffect(() => {
    getAllCategory();
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
    //deleteUserGroup(reason);
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
              Category Lists
            </h1>

            <Addcategory />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table-striped table table-bordered table-hover"
              >
                <thead>
                  <tr className="headingsizes">
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Status</th>

                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {allcat &&
                    allcat.map((catVal, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{catVal.categoryName}</td>
                          <td>{catVal.categoryDesp}</td>
                          <td>{catVal.categoryStatus}</td>

                          <td>
                            {catVal.categoryStatus == "Active" ? (
                              <>
                                <img
                                  className="img_icon_size log"
                                  //onClick={() => onedit(catVal)}
                                  src={require("../../../static/images/edit_icon.png")}
                                  alt="Edit"
                                  title="Edit Organization"
                                />
                                &nbsp;&nbsp;
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onDelete(catVal.categoryName)}
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
          <Modal.Title className="container">
            <h1 className="font-weight-bold ">DEACTIVATE USERS</h1>
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
          <div className="h4">Do You Want to DELETE this User Group?</div>
          <div className="text-right">
            <button
              onClick={(e) => onAdd(e)}
              className="btn contact_reg btn_color"
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
  //   getallcatGroup,
  //   deleteUserGroup,
  getAllCategory,
})(Category);
