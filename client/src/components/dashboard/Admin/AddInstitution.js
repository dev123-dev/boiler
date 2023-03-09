import React, { useEffect, useState } from "react";

import { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AddInst, getalldesignation } from "../../../actions/dag";
import Modal from "react-bootstrap/Modal";

import AddInstHead from "./AddInstHead";
import Select from "react-select";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const AddInstitution = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  dag: { alldesg },
  AddInst,
  getalldesignation,
}) => {
  useEffect(() => {
    if (user) {
      getalldesignation(user.orgId);
    }
  }, []);

  //console.log("indiv", alldesg);
  let history = useHistory();
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const [showins, setShowins] = useState(true);

  const [designation, getdesignationData] = useState();
  const [designationId, setdesignationId] = useState();
  const [designationName, setdesignationName] = useState();

  const alldesignation = [];
  // console.log("alldesignation",alldesignation)
  alldesg &&
    alldesg.map((designation) =>
      alldesignation.push({
        designationId: designation._id,
        label: designation.designationName,
        value: designation.designationName,
      })
    );

  const ondesignationChange = (e) => {
    //console.log(e);
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
    //getalldesignation(changeData);
  };

  const entOrgId = user ? user.orgId : "";
  const entOrgName = user ? user.orgName : "";
  const [addhead, setaddhead] = useState([]);
  const [formDataENT, setformDataENT] = useState({
    entName: "",
    entOrderDesg: "",
    entEmail: "",
    entAddEmail: "",
    entUrl: "",
    entAddUrl: "",
    entPhone: "",
    entAddPhone: "",
    entAddr1: "",
    entAddr2: "",
    entAddr3: "",
    entDistrict: "",
    entState: "",
    entPincode: "",
    entStatus: "",
    entType: "",
  });
  //console.log("array", addhead);
  const {
    entName,
    entOrderDesg,
    entEmail,
    entAddEmail,
    entUrl,
    entAddUrl,
    entPhone,
    entAddPhone,
    entAddr1,
    entAddr2,
    entAddr3,
    entDistrict,
    entState,
    entPincode,
    entStatus,
    entType,
  } = formDataENT;

  const onENTchange = (e) => {
    setformDataENT({
      ...formDataENT,
      [e.target.name]: e.target.value,
    });
  };

  //delete inst head array

  //deactivate modal
  const [headid, setheadid] = useState("");
  const onDelete = (headid) => {
    setheadid(headid);
    handleShow();
  };

  const onAdd = (e) => {
    e.preventDefault();
    const deletehead = addhead.filter((ele, index) => {
      return index != headid;
    });
    setaddhead(deletehead);
    handleClose();
  };
  const onSubmitENTdata = (e) => {
    e.preventDefault();

    const finalENTdata = {
      entName: entName,
      entOrderDesgId: "",
      entOrderDesg: entOrderDesg,
      entEmail: entEmail,
      entAddEmail: entAddEmail,
      entUrl: entUrl,
      entAddurl: entAddUrl,
      entPhone: entPhone,
      entAddPhone: entAddPhone,
      entAddress1: entAddr1,
      entAddress2: entAddr2,
      entAddress3: entAddr3,
      entDistrict: entDistrict,
      entState: entState,
      entPinCode: entPincode,
      entStatus: "Active",
      entType: "Institution",
      InstHead: addhead,

      orgId: entOrgId,
      orgName: entOrgName,
      EntReason: "",
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

    AddInst(finalENTdata);
    //console.log("final", finalENTdata);
    // getAllCategory(user.orgId);

    setformDataENT({
      ...formDataENT,
      entName: "",
      entOrderDesg: "",
      entEmail: "",
      entAddEmail: "",
      entUrl: "",
      entAddUrl: "",
      entPhone: "",
      entAddPhone: "",
      entAddr1: "",
      entAddr2: "",
      entAddr3: "",
      entDistrict: "",
      entState: "",
      entPincode: "",
      entStatus: "Active",
      entType: "Institution",
    });

    history.push("/entity");
  };

  //Indidual setdata

  const [formDataIND, setformDataIND] = useState({
    indName: "",
    indDesg: "",
    indEmail: "",
    indAddEmail: "",

    indPhone: "",
    indAddPhone: "",
    indAddr1: "",
    indAddr2: "",
    indAddr3: "",
    indDistrict: "",
    indState: "",
    indPincode: "",
    indStatus: "",
  });

  const {
    indName,
    indDesg,
    indEmail,
    indAddEmail,

    indPhone,
    indAddPhone,
    indAddr1,
    indAddr2,
    indAddr3,
    indDistrict,
    indState,
    indPincode,
    indStatus,
  } = formDataIND;

  const onINDchange = (e) => {
    setformDataIND({
      ...formDataIND,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitINDdata = (e) => {
    e.preventDefault();

    const finalINDdata = {
      entName: indName,
      entOrderDesgId: designationId,
      entOrderDesg: designationName,
      entEmail: indEmail,
      entAddEmail: indAddEmail,
      entUrl: "",
      entAddUrl: "",

      entPhone: indPhone,
      entAddPhone: indAddPhone,
      entAddress1: indAddr1,
      entAddress2: indAddr2,
      entAddress3: indAddr3,
      entDistrict: indDistrict,
      entState: indState,
      entPinCode: indPincode,
      entStatus: "Active",
      entType: "Individual",
      // InstHead: addhead,

      orgId: entOrgId,
      orgName: entOrgName,
      EntReason: "",
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

    AddInst(finalINDdata);
    // getAllCategory(user.orgId);

    setformDataIND({
      ...formDataIND,
      indName: "",
      indDesg: "",
      indEmail: "",
      indAddEmail: "",

      indPhone: "",
      indAddPhone: "",
      indAddr1: "",
      indAddr2: "",
      indAddr3: "",
      indDistrict: "",
      indState: "",
      indPincode: "",

      indStatus: "Active",
      entType: "Individual",
    });

    history.push("/entity");
  };

  // console.log(addhead);
  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <div>
        <div className="row py-4">
          <div
            className="divnamefixed h3 font-weight-bold"
            style={{ fontFamily: "Serif", color: "#877bae" }}
          >
            Add Institute/Individual
            <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="row form-group ">
                {/* <div
                  className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12"
                  style={{ border: "1px solid orange" }}
                > */}
                {/* <div className="h2"> Add Institution/Individual</div> */}
                <div className="controls h1 row col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="col-md-10 col-lg-10 col-sm-10 col-xs-6">
                    <label style={{ cursor: "pointer" }}>
                      <input
                        className="radio h1"
                        type="radio"
                        id="institution"
                        name="eventchange"
                        value="institution"
                        onClick={() => setShowins(true)}
                      />
                      &nbsp; Institution
                    </label>
                    &nbsp;&nbsp;
                    <label style={{ cursor: "pointer" }}>
                      <input
                        className="radio h1"
                        type="radio"
                        id="individuals"
                        name="eventchange"
                        value="individuals"
                        onClick={() => setShowins(false)}
                      />
                      &nbsp; Individual
                    </label>
                  </div>
                  <div className="col-md-2 col-lg-2 col-sm-2 col-xs-6 text-right backbtn">
                    <Link to="/entity" className="text-right">
                      <img
                        className="img_icon_size log"
                        src={require("../../../static/images/back.png")}
                        alCategoriest="Add User"
                        title="Back"
                      />
                    </Link>
                  </div>
                </div>

                {/* <div className="text-right col-lg-12 col-md-12 col-sm-12 col-xs-12 "> */}

                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="container py-3">
            <section>
              {showins ? (
                <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <form onSubmit={(e) => onSubmitENTdata(e)}>
                    <div className="h3 px-4"> ADD Institution</div>
                    <div
                      className="row form-group  col-md-12 col-lg-12 col-sm-12 col-xs-12"
                      id="eventDiv"
                    >
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <label
                          className="control-label"
                          id="ent_order_desg_lbl"
                        >
                          Institution Name<span>*</span>
                        </label>
                        <label className="control-label" id="ent_name_label">
                          {" "}
                        </label>
                        <div className="controls">
                          <input
                            name="entName"
                            id="ent_name"
                            type="text"
                            className="form-control required"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div
                        className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
                        id="orderDiv"
                      >
                        <label
                          className="control-label"
                          id="ent_order_desg_lbl"
                        >
                          Order<span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entOrderDesg"
                            id="ent_order_desg"
                            type="text"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>

                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <label className="control-label">
                          Email <span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entEmail"
                            id="ent_email"
                            type="email"
                            className="form-control validEmail"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                          <span className="form-input-info positioning "></span>
                        </div>
                      </div>
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <label className="control-label">
                          Additional Email{" "}
                        </label>
                        <div className="controls">
                          <input
                            name="entAddEmail"
                            id="ent_addl_email"
                            type="email"
                            className="form-control validEmail"
                            onChange={(e) => onENTchange(e)}
                          />
                          <span className="form-input-info positioning"></span>
                        </div>
                      </div>

                      <div
                        className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
                        id="orderDiv"
                      >
                        <label
                          className="control-label"
                          id="ent_order_desg_lbl"
                        >
                          Institution URL
                        </label>
                        <div className="controls">
                          <input
                            name="entUrl"
                            id="ent_order_desg"
                            type="url"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <label className="control-label">Additional Url</label>
                        <div className="controls">
                          <input
                            name="entAddUrl"
                            id="ent_addl_url"
                            type="url"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                          />
                        </div>
                      </div>

                      <div
                        className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
                        id="orderDiv"
                      >
                        <label
                          className="control-label"
                          id="ent_order_desg_lbl"
                        >
                          Contact No.<span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entPhone"
                            id="ent_order_desg"
                            type="number"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <label className="control-label">
                          Additional Contact No.
                        </label>
                        <div className="controls">
                          <input
                            name="entAddPhone"
                            id="ent_addl_url"
                            type="number"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="row form-group col-md-12 col-lg-12 col-sm-12 col-xs-12"
                      id="postageDiv"
                    >
                      <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <label className="txtcolor">
                          <b>Postal Address</b>
                        </label>
                      </div>

                      <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                        <label className="control-label">
                          Address line1 <span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entAddr1"
                            id="ent_addl1"
                            type="text"
                            className="form-control required"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
                        <label className="control-label">
                          District <span>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entDistrict"
                            id="ent_district"
                            type="text"
                            className="form-control required"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                        <label className="control-label">
                          Address line2{" "}
                          <span style={{ color: "#800000" }}>*</span>
                        </label>
                        <div className="controls">
                          <input
                            name="entAddr2"
                            id="ent_addl2"
                            type="text"
                            className="form-control required"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
                        <label className="control-label">State </label>
                        <div className="controls">
                          <input
                            name="entState"
                            id="ent_state"
                            type="text"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                        <label className="control-label">Address line3 </label>
                        <div className="controls">
                          <input
                            name="entAddr3"
                            id="ent_addl3"
                            type="text"
                            className="form-control"
                            onChange={(e) => onENTchange(e)}
                            // maxlength="38"
                          />
                        </div>
                      </div>
                      <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12 ">
                        <label className="control-label">
                          Pincode <span>*</span>
                        </label>
                        <div className="controls ">
                          <input
                            name="entPincode"
                            id="ent_pincode"
                            type="text"
                            className="form-control required"
                            onChange={(e) => onENTchange(e)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/* </div> */}

                    <div>
                      <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12 h4 ">
                        Details of Institution Heads .
                        <AddInstHead
                          setaddhead={setaddhead}
                          addhead={addhead}
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHeadinst">
                        <table
                          border="1"
                          id="datatable2"
                          className="table-striped table table-bordered table-hover"
                        >
                          <thead>
                            <tr className="headingsizes">
                              <th>Name</th>
                              <th>Designation</th>
                              <th>Addl. Email</th>
                              <th>Email</th>
                              <th>Phone No.</th>
                              <th>Addl. Phone</th>

                              <th>Operation</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>

                            {addhead.map((headVal, index) => {
                              return (
                                <>
                                  <tr key={index}>
                                    <td>{headVal.headName}</td>
                                    <td>{headVal.desigbelongs}</td>
                                    <td>{headVal.headEmail}</td>
                                    <td>{headVal.headAddEmail}</td>
                                    <td>{headVal.headPhone}</td>
                                    <td>{headVal.headAddPhone}</td>
                                    <td>
                                      <img
                                        className="img_icon_size log"
                                        onClick={() => onDelete(index)}
                                        src={require("../../../static/images/delete.png")}
                                        alt="Deactivate"
                                        title="Deactivate"
                                      />
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="text-right mb-5 pt-3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <button className="btn btn-outline-secondary btnall">
                          ADD
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <div className="container">
                    <div className="h2 px-3"> ADD Individual</div>
                    {/* <div className="text-right">
                <img
                  className="img_icon_size log"
                  //   onClick={handleOpen}
                  src={require("../../../static/images/back.png")}
                  alt="Add User"
                  title="Back"
                />
              </div> */}

                    <form onSubmit={(e) => onSubmitINDdata(e)}>
                      <div className="row form-group mt-4" id="eventDiv">
                        <div
                          className="row form-group  col-md-12 col-lg-12 col-sm-12 col-xs-12"
                          id="eventDiv"
                        >
                          <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <label
                              className="control-label"
                              id="ent_order_desg_lbl"
                            >
                              Individual's Name<span>*</span>
                            </label>
                            <label
                              className="control-label"
                              id="ent_name_label"
                            >
                              {" "}
                            </label>
                            <div className="controls">
                              <input
                                name="indName"
                                id="ent_name"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control required"
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
                            id="orderDiv"
                          >
                            <label
                              className="control-label"
                              id="ent_order_desg_lbl"
                            >
                              Designation<span>*</span>
                            </label>
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
                              value={designation}
                              // placeholder={desigbelongs}
                              onChange={(e) => ondesignationChange(e)}
                            />
                            {/* <div className="controls">
                          <select
                            className="form-control"
                            id="desg_menu"
                            name="indDesg"
                            required
                          >
                            <option selected value="">
                              --Select Designation--
                            </option>
                          </select>
                        </div> */}
                            {/* <input
                          name="indDesg"
                          id="ent_email"
                          type="text"
                          onChange={(e) => onINDchange(e)}
                          className="form-control validEmail"
                          required
                        /> */}
                          </div>

                          <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <label className="control-label">
                              Email <span>*</span>
                            </label>
                            <div className="controls">
                              <input
                                name="indEmail"
                                id="ent_email"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control validEmail"
                                required
                              />
                              <span className="form-input-info positioning "></span>
                            </div>
                          </div>
                          <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <label className="control-label">
                              Additional Email{" "}
                            </label>
                            <div className="controls">
                              <input
                                name="indAddEmail"
                                id="ent_addl_email"
                                onChange={(e) => onINDchange(e)}
                                type="text"
                                className="form-control validEmail"
                              />
                              <span className="form-input-info positioning"></span>
                            </div>
                          </div>

                          <div
                            className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
                            id="orderDiv"
                          >
                            <label
                              className="control-label"
                              id="ent_order_desg_lbl"
                            >
                              Contact No.<span>*</span>
                            </label>
                            <div className="controls">
                              <input
                                name="indPhone"
                                id="ent_order_desg"
                                onChange={(e) => onINDchange(e)}
                                type="text"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <label className="control-label">
                              Additional Contact No.
                            </label>
                            <div className="controls">
                              <input
                                name="indAddPhone"
                                id="ent_addl_url"
                                onChange={(e) => onINDchange(e)}
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="row form-group col-md-12 col-lg-12 col-sm-12 col-xs-12"
                          id="postageDiv"
                        >
                          <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <label className="txtcolor">
                              <b>Postal Address</b>
                            </label>
                          </div>

                          <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                            <label className="control-label">
                              Address line1 <span>*</span>
                            </label>
                            <div className="controls">
                              <input
                                name="indAddr1"
                                id="ent_addl1"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control required"
                                required
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
                            <label className="control-label">
                              District <span>*</span>
                            </label>
                            <div className="controls">
                              <input
                                name="indDistrict"
                                id="ent_district"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control required"
                                required
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                            <label className="control-label">
                              Address line2 <span>*</span>
                            </label>
                            <div className="controls">
                              <input
                                name="indAddr2"
                                id="ent_addl2"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control required"
                                required
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
                            <label className="control-label">State </label>
                            <div className="controls">
                              <input
                                name="indState"
                                id="ent_state"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
                            <label className="control-label">
                              Address line3{" "}
                            </label>
                            <div className="controls">
                              <input
                                name="indAddr3"
                                id="ent_addl3"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12 ">
                            <label className="control-label">
                              Pincode <span>*</span>
                            </label>
                            <div className="controls ">
                              <input
                                name="indPincode"
                                id="ent_pincode"
                                type="text"
                                onChange={(e) => onINDchange(e)}
                                className="form-control required"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right my-4 col-md-12 col-lg-12 col-sm-12 col-xs-12 ">
                        <button
                          className="btn btn-outline-secondary btnall"
                          type="submit"
                        >
                          ADD
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
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
            <div className="h4">Do You Want to DELETE this Institute Head?</div>
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
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, { AddInst, getalldesignation })(
  AddInstitution
);
