import React, { useEffect, useState } from "react";

import { Fragment } from "react";
import { connect } from "react-redux";

import { UpdateInst, getalldesignation } from "../../../actions/dag";

import Select from "react-select";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import AddInstHead from "./AddInstHead";
import { Modal } from "react-bootstrap";

const EditEntity = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  dag: { alldesg },

  UpdateInst,
  getalldesignation,
}) => {
  useEffect(() => {
    if (user) {
      getalldesignation(user.orgId);
    }
  }, []);

  // console.log("indiv", alldesg);
  let history = useHistory();
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const [mydata, setmydata] = useState(
    JSON.parse(localStorage.getItem("editEnity"))
  );

  const [designation, getdesignationData] = useState();
  const [designationId, setdesignationId] = useState();
  const [designationName, setdesignationName] = useState();

  const alldesignation = [];

  alldesg &&
    alldesg.map((designation) =>
      alldesignation.push({
        designationId: designation._id,
        label: designation.designationName,
        value: designation.designationName,
      })
    );

  //deactivate modal
  const [headid, setheadid] = useState("");
  const onDelete = (headid) => {
    setheadid(headid);
    handleShow();
  };
  //delete inst head array
  const onAdd = (e) => {
    e.preventDefault();
    const deletehead = addhead1.filter((ele, index) => {
      return index !== headid;
    });
    setaddhead1(deletehead);
    handleClose();
  };

  const ondesignationChange = (e) => {
    var designationId = "";
    var designationName = "";
    getdesignationData(e);

    designationId = e.designationId;
    designationName = e.value;

    setdesignationId(designationId);
    setdesignationName(designationName);
    // const changeData = {
    //   designationIdVal: e.designationId,
    // };
  };

  const entOrgId = user ? user.orgId : "";
  const entOrgName = user ? user.orgName : "";

  const [addhead1, setaddhead1] = useState(mydata.InstHead);

  const [formDataENT, setformDataENT] = useState({
    entId: mydata._id,
    entName: mydata.entName,
    entOrderDesg: mydata.entOrderDesg,
    entEmail: mydata.entEmail,
    entAddEmail: mydata.entAddEmail,
    entUrl: mydata.entUrl,
    entAddUrl: mydata.entAddurl,
    entPhone: mydata.entPhone,
    entAddPhone: mydata.entAddPhone,
    entAddr1: mydata.entAddress1,
    entAddr2: mydata.entAddress2,
    entAddr3: mydata.entAddress3,
    entDistrict: mydata.entDistrict,
    entState: mydata.entState,
    entPincode: mydata.entPinCode,
    entType: mydata.entType,
    InstHead: mydata.InstHead,
  });

  const {
    entId,
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
    entType,
    InstHead,
  } = formDataENT;

  const onENTchange = (e) => {
    setformDataENT({
      ...formDataENT,
      [e.target.name]: e.target.value,
    });
  };

  //delete inst head array

  const onUpdateENTdata = (e) => {
    e.preventDefault();

    const update = {
      entId: entId,
      entName: entName,
      entOrderDesgId: "",
      InstHead: addhead1,
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

      entType: entType,
      //InstHead: addhead,

      orgId: entOrgId,
      orgName: entOrgName,
      EntReason: "",
      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),

      //   EnterById: user._id,
      //   EnterByName: user.userName,
      //   EnterByDateTime: new Date().toLocaleString("en-GB"),
      //   EditById: "",
      //   EditByName: "",
      //   EditByDateTime: "",
      //   DeactiveById: "",
      //   DeactiveByName: "",
      //   DeactiveByDateTime: "",
    };

    UpdateInst(update);

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
    indId: mydata._id,
    indName: mydata.entName,
    indDesg: mydata.entOrderDesg,
    indEmail: mydata.entEmail,
    indAddEmail: mydata.entAddEmail,

    indPhone: mydata.entPhone,
    indAddPhone: mydata.entAddPhone,
    indAddr1: mydata.entAddress1,
    indAddr2: mydata.entAddress2,
    indAddr3: mydata.entAddress3,
    indDistrict: mydata.entDistrict,
    indState: mydata.entState,
    indPincode: mydata.entPinCode,
  });

  const {
    indId,
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
  } = formDataIND;

  const onINDchange = (e) => {
    setformDataIND({
      ...formDataIND,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateINDdata = (e) => {
    e.preventDefault();

    const updateIND = {
      entId: indId,
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

      // InstHead: addhead,

      orgId: entOrgId,
      orgName: entOrgName,
      EntReason: "",
      //   EnterById: user._id,
      //   EnterByName: user.userName,
      //   EnterByDateTime: new Date().toLocaleString("en-GB"),
      //   EditById: "",
      //   EditByName: "",
      //   EditByDateTime: "",
      //   DeactiveById: "",
      //   DeactiveByName: "",
      //   DeactiveByDateTime: "",
      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),
    };

    UpdateInst(updateIND);

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

  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <div>
        {mydata.entType === "Institution" ? (
          <>
            <div className="row">
              <div className="container col-md-12 col-lg-12 col-sm-12 col-xs-12 text-left">
                <br />
                <br />
                <section>
                  <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <form onSubmit={(e) => onUpdateENTdata(e)}>
                      <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <h1
                          style={{ fontFamily: "Serif", color: "#877bae" }}
                          className="font-weight-bold"
                        >
                          EDIT Institution
                        </h1>
                      </div>
                      <div className="text-right col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <Link to="/entity">
                          <img
                            className="img_icon_size log"
                            src={require("../../../static/images/back.png")}
                            alCategoriest="Add User"
                            title="Back"
                            alt="Back"
                          />
                        </Link>
                      </div>
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
                              value={entName}
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
                              value={entOrderDesg}
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
                              value={entEmail}
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
                              value={entAddEmail}
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
                              value={entUrl}
                              type="url"
                              className="form-control"
                              onChange={(e) => onENTchange(e)}
                            />
                          </div>
                        </div>
                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
                          <label className="control-label">
                            Additional Url
                          </label>
                          <div className="controls">
                            <input
                              name="entAddUrl"
                              id="ent_addl_url"
                              type="url"
                              value={entAddUrl}
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
                              value={entPhone}
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
                              value={entAddPhone}
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
                              value={entAddr1}
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
                              value={entDistrict}
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
                              value={entAddr2}
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
                              value={entState}
                              className="form-control"
                              onChange={(e) => onENTchange(e)}
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
                              name="entAddr3"
                              id="ent_addl3"
                              type="text"
                              value={entAddr3}
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
                              value={entPincode}
                              className="form-control required"
                              onChange={(e) => onENTchange(e)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12 h4 ">
                          Details of Institution Heads .
                          <AddInstHead
                            setaddhead={setaddhead1}
                            addhead={addhead1}
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

                                <th>Email</th>
                                <th>Addl. Email</th>
                                <th>Phone No.</th>
                                <th>Addl. Phone </th>

                                <th>Operation</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr></tr>

                              {addhead1.map((headVal, index) => {
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
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="container col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
                <br />
                <br />
                <section>
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <h1
                      style={{ fontFamily: "Serif", color: "#877bae" }}
                      className="font-weight-bold"
                    >
                      EDIT Individual
                    </h1>
                  </div>

                  <form onSubmit={(e) => onUpdateINDdata(e)}>
                    <div className="row form-group mt-4" id="eventDiv">
                      <div className="text-right col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <Link to="/entity">
                          <img
                            className="img_icon_size log"
                            src={require("../../../static/images/back.png")}
                            alt="Add User"
                            title="Back"
                          />
                        </Link>
                      </div>
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
                          <label className="control-label" id="ent_name_label">
                            {" "}
                          </label>
                          <div className="controls">
                            <input
                              name="indName"
                              id="ent_name"
                              type="text"
                              value={indName}
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
                            value={indDesg}
                            placeholder={indDesg}
                            onChange={(e) => ondesignationChange(e)}
                          />
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
                              value={indEmail}
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
                              value={indAddEmail}
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
                              value={indPhone}
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
                              value={indAddPhone}
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
                              value={indAddr1}
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
                              value={indDistrict}
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
                              value={indAddr2}
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
                              value={indState}
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
                              value={indAddr3}
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
                              value={indPincode}
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
                        Update
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </>
        )}

        <Modal
          show={show}
          // onHide={handleClose}
          centered
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header>
            <Modal.Title className="container">
              <h1 className="font-weight-bold ">DEACTIVATE</h1>
            </Modal.Title>
            <div className="col-lg-2">
              <button onClick={handleClose} className="close">
                <img
                  src={require("../../../static/images/close.png")}
                  alt="X"
                  title="close"
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
export default connect(mapStateToProps, { UpdateInst, getalldesignation })(
  EditEntity
);
