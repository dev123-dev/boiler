import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { getAllEntity } from "../../../actions/dag";

import { useHistory } from "react-router-dom";

const LabelForInstInd = ({
  auth: { user },
  dag: { allent },

  getAllEntity,
}) => {
  useEffect(() => {
    if (user) {
      getAllEntity(user.orgId);
    }
  }, []);

  const onClickReset = () => {
    if (user) {
      getAllEntity(user.orgId);
    }
  };

  //deactivate

  //deactivate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [catId, setCatId] = useState("");

  // const onInputchange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  //deactivate

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    getAllEntity(user.orgId);
  };

  ////

  //   const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onexport = () => {
    // setShowEditModal(true);
    handleShow();
  };
  let history1 = useHistory();
  const generatepage = () => {
    history1.push("/generatelabel");
  };

  return (
    <div>
      <div className="row ">
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-left">
          <br />
          <br />
          <section>
            {/* <div className="col-md-10 col-lg-10 col-sm-9 col-xs-9 no-pad"> */}
            <h1
              style={{ fontFamily: "Serif", color: "#877bae" }}
              className="font-weight-bold "
            >
              Generate label for
              <span style={{ color: "#e79d69" }}> Institution/Individual</span>
            </h1>
            {/* </div> */}
            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                // onClick={() => onClickReset()}
                alt="refresh"
                title="Refresh"
              />{" "}
              &nbsp;
            </div> */}

            <div
              className="row form-group"
              //   style={{
              //     fontsize: "15px",
              //     margintop: "-0.5em",
              //     height: " 33.07px",
              //   }}
            >
              <div className=" col-md-9 col-lg-9 col-sm-9 col-xs-9 ">
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    id="all_category"
                    name="all_category"
                    //  onclick="selectCheckOptions(this.id, this.checked)"
                  />
                  Select All
                </label>
                <label
                  className="checkbox-inline"
                  style={{ marginLeft: "15px" }}
                >
                  <input
                    type="checkbox"
                    id="this_page"
                    name="this_page"
                    //onclick="selectCheckOptions(this.id, this.checked)"
                  />
                  Select This Page
                </label>
              </div>
              <div
                className="col-md-3 col-lg-3 col-sm-3 col-xs-3 pull-right text-right"
                id="exportButton"
                name="exportButton"
                //  style={{ display: "none" }}
              >
                <button
                  type="button"
                  // onClick="openExportingModal()"
                  onClick={onexport}
                  className="btn btn-default btn-md"
                >
                  <strong>Export</strong>
                </button>
                <span style={{ marginRight: "5px", marginLeft: "13px" }}>
                  <img
                    className="img_icon_size log text-right"
                    src={require("../../../static/images/refresh-icon.png")}
                    onClick={() => onClickReset()}
                    alt="refresh"
                    title="Refresh"
                  />{" "}
                </span>
              </div>
            </div>

            <div className="body-inner col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding table-responsive text-center fixTableHead">
              <table
                id="datatable2"
                className="table table-bordered table-hover table-striped"
              >
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Select</th>
                    <th style={{ width: "50%" }}>
                      Name
                      <input
                        id="idSrch"
                        className="search_control"
                        type="text"
                        //   value="<?=@$SrchName; ?>"
                        placeholder="Search"
                        // autofocus
                      />
                    </th>
                    <th style={{ width: "40%" }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {allent &&
                    allent.map((entVal, idx) => {
                      if (
                        entVal.categoryBelongs &&
                        entVal.categoryBelongs.length !== 0 &&
                        entVal.entStatus === "Active"
                      ) {
                        return (
                          <tr key={idx}>
                            <td>
                              {" "}
                              <input
                                type="checkbox"
                                id="all_category"
                                name="all_category"
                                //  onclick="selectCheckOptions(this.id, this.checked)"
                              />
                            </td>
                            <td>{entVal.entName}</td>
                            <td>{entVal.entType}</td>

                            {/* <td>
                              {entVal.entStatus === "Active" ? (
                                <>
                                  <img
                                    className="img_icon_size log"
                                    // onClick={() => onJoinCat(entVal)}
                                    src={require("../../../static/images/account1.png")}
                                    alt="Join Leave"
                                    title="Join Leave Page"
                                  />
                                </>
                              ) : (
                                <>Deactivated</>
                              )}
                            </td> */}
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
              {/* <ul className="pagination pagination-sm" style="margin-top: 1px;"></ul>
        <label
          style="font-size:18px;color:#5b5b5b;margin-top: -0.2px;"
          className="pull-right"
        />
        Total Categories: <strong style={{ fontsize: "18px" }}></strong> */}
            </div>
          </section>
        </div>
      </div>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        // onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title className="container">
            <h1 className="font-weight-bold ">Generate Label</h1>
          </Modal.Title>
          <div className="col-lg-1">
            <button onClick={() => handleClose()} className="close">
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
          {/* onSubmit={(e) => onSubmitCATdata(e)} */}
          <form>
            {/* <div className="container "> */}
            {/* <section className="body"> */}
            <div className="body-inner">
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <div className="controls">
                    <input
                      name="checkbox"
                      id="full_name"
                      type="checkbox"
                      //onChange={(e) => onCATchange(e)}
                      required
                    />{" "}
                    &nbsp;
                    <label className="control-label">
                      Export Label by Designation
                    </label>
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <div className="controls">
                    <input
                      name="catDesp"
                      id="cat_Desp"
                      type="checkbox"
                      //   className="form-control"
                      //  onChange={(e) => onCATchange(e)}
                    />
                    &nbsp;
                    <label className="control-label">Export Unique Label</label>
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
              </div>

              <div className="row form-group">
                <div className="control-group col-md-10 col-lg-10 col-sm-10 col-xs-12">
                  {/* <div
                        className="controls col-md-10 col-lg-10 col-sm-10 col-xs-12"
                        style={{ border: "1px solid green" }}
                      > */}
                  <span>
                    {/* <label className="control-label"> */}
                    From which index you want to export?
                    {/* </label> */}
                    <input
                      name="catDesp"
                      id="cat_Desp"
                      type="text"
                      style={{ width: "10%" }}
                      //   className="form-control"
                      //  onChange={(e) => onCATchange(e)}
                    />
                    &nbsp;
                    {/* <span
                          id="category_result"
                          className="form-input-info"
                        ></span> */}
                  </span>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={handleClose}
                className="btn btn-outline-secondary btnall"
              >
                CANCEL
              </button>

              <button className="btn btn-outline-secondary btnall">
                GENERATE
              </button>
            </div>
            {/* </section> */}
            {/* </div> */}
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
  getAllEntity,
})(LabelForInstInd);
