import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { AddUser, getAllOrganization } from "../../../actions/dag";

import Select from "react-select";

const AddUserModal = ({
  dag: { allorg },
  auth: { isAuthenticated, user, users },
  AddUser,
  getAllOrganization,
}) => {
  useEffect(() => {
    getAllOrganization();
  }, []);

  console.log("allorg", allorg);

  const [oraganisation, getOraganisationData] = useState();
  const [oraganisationId, setOraganisationId] = useState();
  const [oraganisationName, setOraganisationName] = useState();

  const allOraganisation = [];
  // console.log("allOraganisation",allOraganisation)
  allorg.map((oraganisation) =>
    allOraganisation.push({
      oraganisationId: oraganisation._id,
      label: oraganisation.orgName,
      value: oraganisation.orgName,
    })
  );

  const onOraganisationChange = (e) => {
    //console.log(e);
    var oraganisationId = "";
    var oraganisationName = "";
    getOraganisationData(e);

    oraganisationId = e.oraganisationId;
    oraganisationName = e.value;

    setOraganisationId(oraganisationId);
    setOraganisationName(oraganisationName);
    const changeData = {
      oraganisationIdVal: e.oraganisationId,
    };
    getAllOrganization(changeData);
  };

  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const handleShow = () => setshow("true");

  // const [inputdata, setinput] = useState("");
  // const [items, setitem] = useState([]);

  const [pas, setpas] = useState("");
  const [err, seterr] = useState(null);

  const [formDataUSER, setformDataUSER] = useState({
    UserFullname: "",
    UserOrgbelongs: "",
    UserName: "",
    UserNumber: "",
    UserEmail: "",
    UserAddress: "",
    UserPassword: "",
    UserConfpassword: "",
  });

  const {
    UserFullname,
    UserOrgbelongs,
    UserName,
    UserNumber,
    UserEmail,
    UserAddress,

    UserConfpassword,
  } = formDataUSER;

  const onUserchange = (e) => {
    // console.log(e.target.name)
    // var pass;
    if (e.target.name === "UserPassword" && e.target.value) {
      setpas(e.target.value);
    }

    if (e.target.name === "UserConfpassword" && e.target.value) {
      if (e.target.value !== pas) {
        seterr(true);
        setDisabled(true);
      } else if (e.target.value === pas) {
        seterr(false);
        setDisabled(false);
      }
    }

    setformDataUSER({
      ...formDataUSER,
      [e.target.name]: e.target.value,
    });
  };

  const [disabled, setDisabled] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  const onSubmitUSERdata = (e) => {
    e.preventDefault();
    //console.log(formDataUSER)

    const finalUSERdata = {
      userName: UserName,
      fullName: UserFullname,
      email: UserEmail,
      userGroup: "Admin",
      //orgId
      orgId: oraganisationId,
      orgName: oraganisationName,
      phone: UserNumber,
      address: UserAddress,
      password: UserConfpassword,
      userStatus: "Active",
      userDeactiveReason: "",
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

    AddUser(finalUSERdata);
    // console.log(finalUSERdata)
    setformDataUSER({
      ...formDataUSER,
      UserFullname: "",
      UserOrgbelongs: "",
      UserName: "",
      UserNumber: "",
      UserEmail: "",
      UserAddress: "",
      UserPassword: "",
      UserConfpassword: "",
      userStatus: "Active",
      userDeactiveReason: "",
    });

    handleAddClose();
  };

  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right"> */}

      <img
        className="img_icon_size log"
        onClick={handleOpen}
        src={require("../../../static/images/add-icon.png")}
        alt="Add User"
        title="Add User"
      />

      {/* </div> */}
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
            <h1 className="font-weight-bold ">ADD USER</h1>
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
          <form onSubmit={(e) => onSubmitUSERdata(e)}>
            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Full Name <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="UserFullname"
                          id="full_name"
                          type="text"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
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
                        Organization Belongs<span>*</span>
                      </label>
                      <div className="controls">
                        <Select
                          name="UserOrgbelongs"
                          options={allOraganisation}
                          isSearchable={true}
                          value={oraganisation}
                          placeholder="Select Oraganisation"
                          onChange={(e) => onOraganisationChange(e)}
                        />

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
                        UserName <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="UserName"
                          id="username"
                          type="text"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
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
                          name="UserNumber"
                          id="user_phone"
                          type="number"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
                          required
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Email <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="UserEmail"
                          id="user_email"
                          type="email"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
                          required
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Address</label>
                      <div className="controls">
                        <textarea
                          rows="2"
                          name="UserAddress"
                          id="user_address"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
                        ></textarea>
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Password <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="UserPassword"
                          id="user_password"
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          a
                          onChange={(e) => onUserchange(e)}
                          required
                        />
                        {err ? (
                          <span id="Passerr" className="form-input-info">
                            password doesnt match
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Confirm Password <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="UserConfpassword"
                          id="user_confpass"
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          onChange={(e) => onUserchange(e)}
                          required
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
                    disabled={disabled}
                    className="btn btn-outline-secondary btnall"
                    type="submit"
                  >
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
export default connect(mapStateToProps, { AddUser, getAllOrganization })(
  AddUserModal
);
