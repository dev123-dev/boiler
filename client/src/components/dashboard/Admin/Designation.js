import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { getalldesignation } from "../../../actions/dag";

//import EditCategory from "./EditCategory";
import AddDesignation from "./AddDesignation";
import EditDesignation from "./EditDesignation";
//import { loadUser } from "../../../actions/auth";

const Designation = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { alldesg },
  //   deleteCategory,
  //loadUser,
  getalldesignation,
}) => {
  useEffect(() => {
    //loadUser();
    // if (user) {
    //   console.log("inside");
    getalldesignation(user.orgId);
    // getalldesignation();
    // }
  }, []);

  const onClickReset = () => {
    // setCurrentData(1);
    // getbatchsData("");
    getalldesignation(user.orgId);
  };

  //deactivate
  const [formData, setFormData] = useState({
    category_DE_Reason: "",
    isSubmitted: false,
  });
  const { category_DE_Reason } = formData;

  //deactivate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [catId, setCatId] = useState("");

  const onDelete = (id) => {
    setCatId(id);
    handleShow();
  };
  const onInputchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //deactivate
  const onAdd = (e) => {
    e.preventDefault();
    const reason = {
      catid: catId,
      catdeletereason: category_DE_Reason,
      orgId: user.orgId,
    };

    getalldesignation(user.orgId);
    handleClose();
  };

  //edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);

  const [designationdata, setdesgdata] = useState(null);
  const onedit = (user2) => {
    setShowUpdateModal(true);
    setdesgdata(user2);
    handleOpen();
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    getalldesignation(user.orgId);
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
              Designation Lists
            </h1>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                onClick={() => onClickReset()}
                alt="refresh"
              />{" "}
              &nbsp;
              <AddDesignation />
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table-striped table table-bordered table-hover"
              >
                <thead>
                  <tr className="headingsizes">
                    <th>Designation Name</th>

                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {alldesg &&
                    alldesg.map((desgVal, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{desgVal.designationName}</td>

                          <td>
                            <>
                              <img
                                className="img_icon_size log"
                                onClick={() => onedit(desgVal)}
                                src={require("../../../static/images/edit_icon.png")}
                                alt="Edit"
                                title="Edit Category"
                              />
                              &nbsp;
                            </>
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
          <div className="col-lg-10">
            <h3 className="modal-title text-center">Edit Designation</h3>
          </div>
          <div className="col-lg-2">
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
          <EditDesignation
            desigdata={designationdata}
            closeedit={handleUpdateModalClose}
          />

          {/* <EditCategory
            categorydata={catdata}
            closeedit={handleUpdateModalClose}
          /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, {
  //   getalldesgGroup,

  // loadUser,
  getalldesignation,
})(Designation);
