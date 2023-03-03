import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { AddOrganization } from "../../../actions/dag";

const AddOrgModal = ({ auth: { isAuthenticated, user }, AddOrganization }) => {
  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const [formDataORG, setFormDataORG] = useState({
    OrganizationName: "",
    OrganizationEmail: "",
    OrganizationNumber: "",
    OrganizationAddress: "",
    OrganizationStartdate: "",
  });

  const {
    OrganizationName,
    OrganizationEmail,
    OrganizationNumber,
    OrganizationAddress,
    OrganizationStartdate,
  } = formDataORG;

  const onORGchange = (e) => {
    setFormDataORG({
      ...formDataORG,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  const onSubmitORGdata = (e) => {
    e.preventDefault();

    // Parse the date string into a Date object
    const originalDate = new Date(OrganizationStartdate);

    // Add one year to the original date
    const oneYearLater = new Date(
      originalDate.getFullYear() + 1,
      originalDate.getMonth(),
      originalDate.getDate()
    );

    // Format the date as a string in the desired format
    const oneYearLaterString = `${oneYearLater.getFullYear()}-${(
      "0" +
      (oneYearLater.getMonth() + 1)
    ).slice(-2)}-${("0" + oneYearLater.getDate()).slice(-2)}`;

    //console.log(oneYearLaterString); // Output: "2024-02-15"

    const finalORGdata = {
      orgName: OrganizationName,
      email: OrganizationEmail,
      startDate: OrganizationStartdate,
      phoneNumber: OrganizationNumber,
      endDate: oneYearLaterString,
      address: OrganizationAddress,
      orgStatus: "Active",
      // expStatus:"Active",
      orgDeactiveReason: "",
      EnterById: user._id,
      EnterByName: user.userName,
      EnterByDateTime: new Date().toLocaleString("en-GB"),
      EditById: "",
      EditByName: "",
      EditByDateTime: "",
      DeactiveById: "",
      DeactiveByName: "",
      DeactiveByDateTime: "",
    };
    AddOrganization(finalORGdata);

    setFormDataORG({
      ...formDataORG,
      orgName: "",
      email: "",
      startDate: "",
      phoneNumber: "",
      address: "",
      endDate: "",
      orgStatus: "Active",
      orgDeactiveReason: "",
    });
    // console.log(user)
    handleAddClose();
  };

  return !isAuthenticated || !user ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right">
        <img
          className="img_icon_size log"
          onClick={handleOpen}
          src={require("../../../static/images/add-icon.png")}
          alt="Add User"
          title="Add Org"
        />
      </div>
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
            <h1 className="font-weight-bold ">ADD ORGANIZATION</h1>
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
          <form onSubmit={(e) => onSubmitORGdata(e)}>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Org Name <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="OrganizationName"
                          id="cat_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onORGchange(e)}
                          required
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Email<span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="OrganizationEmail"
                          id="category_status"
                          type="email"
                          className="form-control"
                          onChange={(e) => onORGchange(e)}
                          required
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Start Date <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="OrganizationStartdate"
                          id="cat_name"
                          type="date"
                          className="form-control"
                          onChange={(e) => onORGchange(e)}
                          required
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Phone No.<span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="OrganizationNumber"
                          id="category_status"
                          type="number"
                          className="form-control"
                          onChange={(e) => onORGchange(e)}
                          required
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Address</label>
                      <div className="controls">
                        <textarea
                          rows="2"
                          name="OrganizationAddress"
                          id="category_description"
                          className="form-control"
                          onChange={(e) => onORGchange(e)}
                        ></textarea>
                        <span className="form-input-info"></span>
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
                  <button className="btn btn-outline-secondary btnall">
                    {" "}
                    ADD
                  </button>
                </div>
              </section>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, { AddOrganization })(AddOrgModal);
