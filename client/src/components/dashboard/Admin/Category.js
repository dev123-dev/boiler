import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { deleteCategory } from "../../../actions/dag";
import { getAllCategory } from "../../../actions/dag";
import Addcategory from "./AddCategory";
import EditCategory from "./EditCategory";
//import { loadUser } from "../../../actions/auth";

const Category = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  //here to connect to action we need to import the function
  //then again we need to mention inside the const function
  dag: { allcat },
  deleteCategory,
  //loadUser,
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
    // getAllCategory(user.orgId);
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
      DeactiveById: user._id,
      DeactiveByName: user.fullName,
      DeactiveByDateTime: new Date().toLocaleString("en-GB"),
    };
    deleteCategory(reason);
    getAllCategory(user.orgId);
    handleClose();
  };

  //edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);

  const [catdata, setcatdata] = useState(null);
  const onedit = (user2) => {
    setShowUpdateModal(true);
    setcatdata(user2);
    handleOpen();
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    getAllCategory(user.orgId);
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

            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                onClick={() => onClickReset()}
                alt="refresh"
              />{" "}
              &nbsp;
              <Addcategory />
            </div>

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

                          <td>
                            {catVal.categoryStatus == "Active" ? (
                              <>
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onedit(catVal)}
                                  src={require("../../../static/images/edit_icon.png")}
                                  alt="Edit"
                                  title="Edit Category"
                                />
                                &nbsp;
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onDelete(catVal._id)}
                                  src={require("../../../static/images/delete.png")}
                                  alt="Delete User"
                                  title="Delete Category"
                                />
                                &nbsp;
                                <img
                                  className="img_icon_size log"
                                  onClick={() => onDelete(catVal._id)}
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
                    })}
                </tbody>
              </table>
              <div className="text-right ">
                No. of Categories:{allcat && allcat.length}
              </div>
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
            <h3 className="modal-title text-center">Edit Category</h3>
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
          {/* <EditUser userdata={orgdata} closeedit={handleUpdateModalClose} /> */}
          <EditCategory
            categorydata={catdata}
            closeedit={handleUpdateModalClose}
          />
        </Modal.Body>
      </Modal>

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
            <h1 className="font-weight-bold ">DEACTIVATE </h1>
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
          <form onSubmit={(e) => onAdd(e)}>
            <div className="row col-lg-12 col-md-9 col-sm-9 col-12 ">
              <div className="col-lg-12 col-md-4 col-sm-4 col-12">
                <label>Reason for deactivation</label>
              </div>
              <div className="col-lg-12 col-md-4 col-sm-4 col-12 text-center">
                <textarea
                  rows="3"
                  name="category_DE_Reason"
                  onChange={(e) => onInputchange(e)}
                  id="org_reason"
                  className="textarea form-control"
                  required
                ></textarea>
              </div>
              <div className="col-lg-12 col-md-4 col-sm-4 col-12 py-2">
                <label>Are you sure you want to deactive ?</label>
              </div>
              <div className=" col-lg-12 col-md-9 col-sm-9 col-12 text-right">
                <button
                  className="btn btn-outline-secondary btnall"
                  type="submit"
                >
                  {" "}
                  DEACTIVATE
                </button>
              </div>
            </div>
            {/* <div className="controls col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div
                className="col-lg-2 col-md-12 col-sm-12 col-xs-12"
                style={{ border: "1px solid green" }}
              ></div>
              <div
                className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-center"
                style={{ border: "1px solid blue" }}
              >
                <textarea
                  rows="2"
                  name="category_DE_Reason"
                  onChange={(e) => onInputchange(e)}
                  id="org_reason"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div
                className="col-lg-2 col-md-12 col-sm-12 col-xs-12"
                style={{ border: "1px solid green" }}
              ></div>
              Do You really want to Deactivate this Category?
              <span className="form-input-info"></span>
              <div className="text-right">
                <button className="btn contact_reg btn_color" type="submit">
                  {" "}
                  DEACTIVATE
                </button>
              </div>
            </div> */}
          </form>
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
  //   getallcatGroup,
  deleteCategory,
  // loadUser,
  getAllCategory,
})(Category);
