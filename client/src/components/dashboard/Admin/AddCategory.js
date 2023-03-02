import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../../actions/dag";
import { getAllCategory } from "../../../actions/dag";

const AddCategory = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  addCategory,
  getAllCategory,
}) => {
  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const handleShow = () => setshow("true");

  const catOrgId = user.orgId;
  const catOrgName = user.orgName;

  const [formDataCAT, setformDataCAT] = useState({
    catName: "",
    catDesp: "",
    catStatus: "",
  });

  const { catName, catDesp, categoryStatus } = formDataCAT;

  const onCATchange = (e) => {
    setformDataCAT({
      ...formDataCAT,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  const onSubmitCATdata = (e) => {
    e.preventDefault();

    const finalCATdata = {
      categoryName: catName,
      categoryDesp: catDesp,
      categoryStatus: "Active",
      orgId: catOrgId,
      orgName: catOrgName,
      categoryReason: "",
    };
    addCategory(finalCATdata);
    getAllCategory(user.orgId);
    setformDataCAT({
      ...formDataCAT,
      catName: "",
      catDesp: "",
      catStatus: "Active",
    });
    handleAddClose();
  };

  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <img
        className="img_icon_size log"
        onClick={handleOpen}
        src={require("../../../static/images/add-icon.png")}
        alt="Add Category"
        title="Add Category"
      />

      <br />

      {/* Adding Organization */}

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
            <h1 className="font-weight-bold ">ADD CATEGORY</h1>
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

        {/* <Modal.Body> */}
        <Modal.Body>
          <form onSubmit={(e) => onSubmitCATdata(e)}>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Category Name <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="catName"
                          id="full_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onCATchange(e)}
                          required
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
                      <label className="control-label">
                        Description<span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="catDesp"
                          id="cat_Desp"
                          type="text"
                          className="form-control"
                          onChange={(e) => onCATchange(e)}
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div className="row form-group ">
                    <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12 text-right">
                      <br />
                      <label className="control-label">
                        * Indicates mandatory fields.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={handleClose}
                    className="btn contact_reg btn_color "
                  >
                    CANCEL
                  </button>
                  <button className="btn contact_reg btn_color">ADD</button>
                </div>
              </section>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, { addCategory, getAllCategory })(
  AddCategory
);
