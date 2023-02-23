import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { AddOrganization } from "../../../actions/dagaction";

const AddOrgModal=({

    auth: { isAuthenticated, user, users, finalDataRep },
    AddOrganization,
  }) => {
    const [show, setshow] = useState("");
    const handleClose = () => setshow("false");
    const handleShow = () => setshow("true");

    const [inputdata, setinput] = useState("");
    const [items, setitem] = useState([]);

    const [formDataORG, setFormDataORG] = useState({
        OrganizationName: "",
        OrganizationEmail: "",
        OrganizationNumber: "",
        OrganizationAddress: "",
        OrganizationStartdate:"",
       
        
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

      const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);
  const onAddStaffModalChange = (e) => {
    if (e) {
      handleEditModalClose();
    }
  };

  const onSubmitORGdata = () => {

// Parse the date string into a Date object
const originalDate = new Date(OrganizationStartdate);

// Add one year to the original date
const oneYearLater = new Date(originalDate.getFullYear() + 1, originalDate.getMonth(), originalDate.getDate());

// Format the date as a string in the desired format
const oneYearLaterString = `${oneYearLater.getFullYear()}-${("0" + (oneYearLater.getMonth() + 1)).slice(-2)}-${("0" + oneYearLater.getDate()).slice(-2)}`;

console.log(oneYearLaterString); // Output: "2024-02-15"

    const finalORGdata = {
      orgName: OrganizationName,
      email: OrganizationEmail,
      startDate: OrganizationStartdate,
      phoneNumber: OrganizationNumber,
      endDate: oneYearLaterString,
      address: OrganizationAddress,
      orgStatus:"Active"
      
    };

    AddOrganization(finalORGdata);
    // console.log(finalORGdata)
    setFormDataORG({
      ...formDataORG,
      orgName: "" /*name*/,
      email: "",
      startDate: "",
      phoneNumber: "",
      address: "",
      endDate:"",
      orgStatus:"Active",
     
     
    });
    handleEditModalClose();
  };

  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <div>
      <Fragment>
        
          <div className="col-lg-12 col-md-11 col-sm-11 col-11 py-4 text-right">
            <img
              className="img_icon_size log"
              // onClick={() => onClickHandler()}
              onClick={handleOpen}
              src={require("../../../static/images/add-icon.png")}
              alt="Add User"
              title="Add User"
            />
         
        </div>
        {/* Adding Organization */}
     
            <Modal show={showEditModal}  backdrop="static"
          keyboard={false} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header >

                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD ORGANIZATION</h1></Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        <form >
                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Name <span >*</span></label>
                                                <div className="controls">
                                                    <input name="OrganizationName" id="cat_name" type="text" className="form-control" value={OrganizationName}  onChange={(e) => onORGchange(e)} />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email<span >*</span></label>
                                                <div className="controls">
                                                    <input name="OrganizationEmail" id="category_status" type="text" className="form-control"  value={OrganizationEmail}  onChange={(e) => onORGchange(e)} readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Start Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="OrganizationStartdate" id="cat_name" type="date" className="form-control" value={OrganizationStartdate} onChange={(e) => onORGchange(e)} />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Phone No.<span >*</span></label>
                                                <div className="controls">
                                                    <input name="OrganizationNumber" id="category_status" type="text" className="form-control" value={OrganizationNumber} onChange={(e) => onORGchange(e)} readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            {/* <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">End  Date <span ></span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div> */}
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2" name="OrganizationAddress" id="category_description" className="form-control"  value={OrganizationAddress}  onChange={(e) => onORGchange(e)} ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Logo <span >*</span></label>
                                                <div className="controls">
                                                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="row form-group ">
                                            <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12 text-right">
                                                <br /><label className="control-label" >* Indicates mandatory fields.</label>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </Modal.Body>

         
           <Modal.Footer>
  
                        <button onClick={()=>handleEditModalClose()} className="btn contact_reg btn_color"> CANCEL</button>
                        <button onClick={() => onSubmitORGdata()} className="btn contact_reg btn_color">  ADD</button>
                    </Modal.Footer>
          </Modal>
       

       
      </Fragment>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dagaction: state.dagaction,
});
export default connect(mapStateToProps, { AddOrganization })(AddOrgModal);

