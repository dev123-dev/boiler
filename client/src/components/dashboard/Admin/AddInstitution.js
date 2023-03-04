import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function AddInstitution() {
  const [show, setShow] = useState(false);
  const [editshow, editsetShow] = useState(false);
  const [deleteshow, deletesetShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  return (
    <div>
      <h2> Add Institution</h2>
      <div className="container">
        <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div class="row form-group ">

            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-8">
              <div className="h2"> Add Institution/Individual</div>
              
              <div class="controls">
                <label style={{ cursor: "pointer" }}>
                  <input
                    className="radio"
                    type="radio"
                    id="institution"
                    name="eventchange"
                    value="institution"
                    onclick="ShowHideDiv()"
                  />
                  &nbsp; Institution
                </label>
                &nbsp;&nbsp;
                <label style={{ cursor: "pointer" }}>
                  <input
                    className="radio"
                    type="radio"
                    id="individuals"
                    name="eventchange"
                    value="individuals"
                    onclick="ShowHideDiv()"
                  />
                  &nbsp; Individual
                </label>
              </div>
            </div>

            
          </div>
          <div
            className="row form-group  col-md-12 col-lg-12 col-sm-12 col-xs-12"
            id="eventDiv"
          >
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label" id="ent_order_desg_lbl">
                Institution Name
              </label>
              <label className="control-label" id="ent_name_label">
                {" "}
              </label>
              <div className="controls">
                <input
                  name="ent_name"
                  id="ent_name"
                  type="text"
                  className="form-control required"
                  value=""
                />
              </div>
            </div>
            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Order
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>

            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Email </label>
              <div className="controls">
                <input
                  name="ent_email"
                  id="ent_email"
                  type="text"
                  className="form-control validEmail"
                  value=""
                />
                <span className="form-input-info positioning "></span>
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Email </label>
              <div className="controls">
                <input
                  name="ent_addl_email"
                  id="ent_addl_email"
                  type="text"
                  className="form-control validEmail"
                  value=""
                />
                <span className="form-input-info positioning"></span>
              </div>
            </div>

            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Institution URL
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Url</label>
              <div className="controls">
                <input
                  name="ent_addl_url"
                  id="ent_addl_url"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>

            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Contact No.
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Contact No.</label>
              <div className="controls">
                <input
                  name="ent_addl_url"
                  id="ent_addl_url"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
          </div>

          <div
            class="row form-group col-md-12 col-lg-12 col-sm-12 col-xs-12"
            id="postageDiv"
          >
            <div class="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <label class="txtcolor">
                <b>Postal Address</b>
              </label>
            </div>

            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">
                Address line1 <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_addl1"
                  id="ent_addl1"
                  type="text"
                  class="form-control required"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
              <label class="control-label">
                District <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_district"
                  id="ent_district"
                  type="text"
                  class="form-control required"
                  value=""
                />
              </div>
            </div>
            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">
                Address line2 <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_addl2"
                  id="ent_addl2"
                  type="text"
                  class="form-control required"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
              <label class="control-label">State </label>
              <div class="controls">
                <input
                  name="ent_state"
                  id="ent_state"
                  type="text"
                  class="form-control"
                  value=""
                />
              </div>
            </div>
            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">Address line3 </label>
              <div class="controls">
                <input
                  name="ent_addl3"
                  id="ent_addl3"
                  type="text"
                  class="form-control"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12 ">
              <label class="control-label">
                Pincode <span style={{ color: "#800000;" }}>*</span>
              </label>
              <div class="controls ">
                <input
                  name="ent_pincode"
                  id="ent_pincode"
                  maxlength="6"
                  type="text"
                  class="form-control required"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12 h3 ">
          Details of Institution Heads
          <img
            className="img_icon_size log text-right"
            onClick={handleShow}
            src={require("../../../static/images/add-icon.png")}
            alt="add-icon"
            title="add icon"
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
                <th>Phone No.</th>

                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>

            </tbody>
          </table>
        </div>

        <div className="text-right mb-5 pt-3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <button className="btn contact_reg btn_color">CANCEL</button>
          <button className="btn contact_reg btn_color">ADD</button>
        </div>
      </div>



{/* add ins model  */}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="container">
            <h1 className="font-weight-bold ">ADD INSTITUTION HEAD</h1>
          </Modal.Title>
        </Modal.Header>
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
                          name="full_name"
                          id="full_name"
                          type="text"
                          className="form-control"
                          value=""
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
                        <input
                          name="org_belongs"
                          id="org_belongs"
                          type="text"
                          className="form-control"
                          readonly
                        />
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
                          name="username"
                          id="username"
                          type="text"
                          className="form-control"
                          value=""
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
                          name="user_phone"
                          id="user_phone"
                          type="text"
                          className="form-control"
                          readonly
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
                          name="user_email"
                          id="user_email"
                          type="text"
                          className="form-control"
                          value=""
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
                          name="user_phone"
                          id="user_phone"
                          type="text"
                          className="form-control"
                          value=""
                        />
                        <span className="form-input-info"></span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Password <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="user_password"
                          id="user_password"
                          type="text"
                          className="form-control"
                          value=""
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">
                        Confirm Password <span>*</span>
                      </label>
                      <div className="controls">
                        <input
                          name="user_confpass"
                          id="user_confpass"
                          type="text"
                          className="form-control"
                          value=""
                        />
                        <span
                          id="category_result"
                          className="form-input-info"
                        ></span>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">End Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <br /><label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2"  name="category_description" id="category_description" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
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
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
}
