import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { addDesignation } from "../../../actions/dag";
//import { getAllCategory } from "../../../actions/dag";

const AddDesignation = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  addDesignation,
  //getAllCategory,
}) => {
  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const handleShow = () => setshow("true");

  const desigOrgId = user.orgId;
  const desigOrgName = user.orgName;

  const [formDataDesig, setformDataDesig] = useState({
    designationName: "",

    designationStatus: "",
  });
  console.log("dddddd", user);

  const { designationName, designationStatus } = formDataDesig;

  const onDESGchange = (e) => {
    setformDataDesig({
      ...formDataDesig,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  const onSubmitDESGdata = (e) => {
    e.preventDefault();

    const finalDESGdata = {
      designationName: designationName,

      designationStatus: "Active",
      orgId: desigOrgId,
      orgName: desigOrgName,
      EnterById: user._id,
      EnterByName: user.userName,
      EnterByDateTime: new Date().toLocaleString("en-GB"),
    };
    addDesignation(finalDESGdata);
    // getAllCategory(user.orgId);
    setformDataDesig({
      ...formDataDesig,
      designationName: "",

      designationStatus: "Active",
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
        alt="Add Designation"
        title="Add Designation"
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
            <h1 className="font-weight-bold ">ADD Designation</h1>
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
          <form onSubmit={(e) => onSubmitDESGdata(e)}>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Designation Name <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="designationName"
                          id="full_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onDESGchange(e)}
                          required
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row form-group">
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
                          onChange={(e) => onDESGchange(e)}
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                  </div> */}

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
export default connect(mapStateToProps, { addDesignation })(AddDesignation);
//, getAllCategory
