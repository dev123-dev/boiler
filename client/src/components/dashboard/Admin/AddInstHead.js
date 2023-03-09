import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
//import { addDesignation, getalldesignation } from "../../../actions/dag";
//import { getAllCategory } from "../../../actions/dag";
import Select from "react-select";
import { getalldesignation } from "../../../actions/dag";

const AddInstHead = ({
  auth: { isAuthenticated, user },
  dag: { alldesg },
  //addDesignation,
  setaddhead,
  addhead,
  getalldesignation,
}) => {
  useEffect(() => {
    if (user) {
      getalldesignation(user.orgId);
    }
  }, []);
  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const handleShow = () => setshow("true");

  //select dropdown

  const [designation, getdesignationData] = useState();
  const [designationId, setdesignationId] = useState();
  const [designationName, setdesignationName] = useState();

  const alldesignation = [];
  //console.log("alldesg", alldesg);

  alldesg &&
    alldesg.map((designation) =>
      alldesignation.push({
        designationId: designation._id,
        label: designation.designationName,
        value: designation.designationName,
      })
    );

  const [desigbelongs, setdesigbelongs] = useState("");
  const [desigbelongsId, setdesigbelongsId] = useState("");

  const ondesignationChange = (e) => {
    // console.log("dropdown", e);
    // console.log("dropdownvalue", e.value);
    setdesigbelongs(e.value);

    setdesigbelongsId(e.designationId);
    // var designationId = "";
    // var designationName = "";
    // getdesignationData(e);

    // designationId = e.designationId;
    // designationName = e.value;

    // setdesignationId(designationId);
    // setdesignationName(designationName);
    // const changeData = {
    //   designationIdVal: e.designationId,
    // };
  };
  //console.log("desigbelongs", desigbelongs);

  //   const desigOrgId = user ? user.orgId : "";
  //   const desigOrgName = user ? user.orgName : "";

  const [formDataHead, setformDataHead] = useState({
    headName: "",
    headEmail: "",
    headPhone: "",
    headAddEmail: "",
    headAddPhone: "",
    headDesgBelongs: "",
    desigbelongs: "",

    headStatus: "",
  });

  const {
    headName,
    headEmail,
    headPhone,
    headAddEmail,
    headAddPhone,
    headDesgBelongs,

    // headStatus,
  } = formDataHead;

  const onInputChange = (e) => {
    setformDataHead({
      ...formDataHead,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setShowAddModal(true);
    // console.log("e", e);

    var designationId = "";
    var designationName = "";
    getdesignationData(e);

    designationId = e.designationId;
    designationName = e.value;

    setdesignationId(designationId);
    setdesignationName(designationName);
    const changeData = {
      designationIdVal: e.designationId,
    };
  };

  const onSubmitDESGdata = (e) => {
    console.log("cliecked");
    if (
      e.target.name === headName ||
      e.target.name === headEmail ||
      e.target.name === headPhone
      // e.target.name === headDesgBelongs
    ) {
      if (e.target.value === "") {
        alert("enter all fierlds");
      }

      e.preventDefault();
    } else {
      e.preventDefault();

      const finalDESGdata = {
        headName: headName,
        headEmail: headEmail,
        headPhone: headPhone,
        headAddEmail: headAddEmail,
        headAddPhone: headAddPhone,
        desigbelongs: desigbelongs,
        desgId: designationId,
        headDesgBelongs: designationName,
        desigbelongsId: desigbelongsId,

        // designationStatus: "Active",
        //orgId: desigOrgId,
        // orgName: desigOrgName,
        //  EnterById: user._id,
        // EnterByName: user.userName,
        //EnterByDateTime: new Date().toLocaleString("en-GB"),
      };
      //  console.log("final", finalDESGdata);
      setaddhead([...addhead, finalDESGdata]);
      //addDesignation(finalDESGdata);
      // getalldesignation(user.orgId);
      setformDataHead({
        ...formDataHead,
        headName: "",
        headEmail: "",
        headPhone: "",
        headAddEmail: "",
        headAddPhone: "",
        headDesgBelongs: "",

        // headStatus: "",
      });
      handleAddClose();
    }
    // setdesigbelongs("");
    // setdesigbelongsId("");
  };

  return !isAuthenticated || !user ? (
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
          <form>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Name <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="headName"
                          id="full_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
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
                        Designation<span>*</span>
                      </label>
                      <div className="controls">
                        <Select
                          name="desigbelongs"
                          options={alldesignation}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: "#e79d69",
                              primary: "#877bae",
                            },
                          })}
                          isSearchable={true}
                          value={desigbelongs}
                          placeholder={desigbelongs}
                          onChange={(e) => ondesignationChange(e)}
                        />
                        {/* <input
                          name="headDesgBelongs"
                          id="full_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
                          required
                        /> */}

                        {/* <select style={{ backgroundcolor: '#877bae' }} name="UserOrgbelongs" className=" selectorgcolor form-control" onChange={(e) => onUserchange(e)} required>
                          <option>--Select Organization--</option>

                          {allorg &&
                            allorg.map((org, idx) => {

                              if (org.orgStatus === "Active") {
                                return (<option key={idx} value={org.orgName}>{org.orgName}</option>)
                              }
                            })
                          }
                        </select> */}

                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Email<span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="headEmail"
                          id="username"
                          type="email"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
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
                          name="headPhone"
                          id="user_phone"
                          type="number"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
                          required
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Additional Email</label>
                      <div className="controls">
                        <input
                          name="headAddEmail"
                          id="user_email"
                          type="email"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Additional Phone No.
                      </label>
                      <div className="controls">
                        <input
                          name="headAddPhone"
                          id="user_phone"
                          type="number"
                          className="form-control"
                          onChange={(e) => onInputChange(e)}
                        />
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
                  <button
                    onClick={handleClose}
                    className="btn btn-outline-secondary btnall "
                  >
                    CANCEL
                  </button>
                  <button
                    className="btn btn-outline-secondary btnall"
                    onClick={onSubmitDESGdata}
                  >
                    ADD
                  </button>
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
export default connect(mapStateToProps, { getalldesignation })(AddInstHead);
//, getAllCategory

//addDesignation, getalldesignation;
