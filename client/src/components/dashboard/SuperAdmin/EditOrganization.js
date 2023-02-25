import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { updateOrganization } from "../../../actions/dag";

const EditOrganization = ({
  auth: { isAuthenticated, user, users },
  Org, closeedit,
  updateOrganization
}) => {
  console.log(Org);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleOpen = () => setShowEditModal(true);
  
  const onAddStaffModalChange = (e) => {
    if (e) {
      handleEditModalClose();
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [OrgId, setId] = useState("");



  const onedit = (id) => {
    setId(id);
    handleOpen();
  };

  const [inputdata, setinput] = useState("");
  //   const [items, setitem] = useState(org.Location); 


  //   const handleLocationclose = (ele1,index) => {

  //     const delitem = items.filter((ele, ind) => {
  //       return ele1 != ele;
  //     });
  //     setitem(delitem);
  //   };

  //   const addItem = () => {
  //     if (!inputdata) {
  //     } else {
  //       setitem([...items, inputdata]);
  //       setinput("");
  //     }
  //   };
  //multiple location end

  const [formDataORG, setFormDataORG] = useState({
    OrganizationId: Org._id,
    OrganizationName: Org.orgName,
    OrganizationEmail: Org.email,
    OrganizationNumber: Org.phoneNumber,
    OrganizationAddress: Org.address,
    OrganizationStartdate:Org.startDate,

  });
  const {
    OrganizationId,
    OrganizationName,
    OrganizationEmail,
    OrganizationNumber,
    OrganizationAddress,
    OrganizationStartdate,

  } = formDataORG;
  const onInputChange = (e) => {
    setFormDataORG({ ...formDataORG, [e.target.name]: e.target.value });
  };

  const onUpdate = () => {


      // Parse the date string into a Date object
      const originalDate = new Date(OrganizationStartdate);
    
      // Add one year to the original date
      const oneYearLater = new Date(originalDate.getFullYear() + 1, originalDate.getMonth(), originalDate.getDate());
      
      // Format the date as a string in the desired format
      const oneYearLaterString = `${oneYearLater.getFullYear()}-${("0" + (oneYearLater.getMonth() + 1)).slice(-2)}-${("0" + oneYearLater.getDate()).slice(-2)}`;
      
  
  
    const update = {
      OrganizationId: OrganizationId,
      OrganizationName: OrganizationName,
      OrganizationEmail: OrganizationEmail,
      OrganizationNumber: OrganizationNumber,
      OrganizationAddress: OrganizationAddress,
      OrganizationStartdate:OrganizationStartdate,
      OrganizationEnddate:oneYearLaterString,

    }
    closeedit()
    console.log("main page" + update)
    updateOrganization(update)
    
  };
  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (


    <Fragment>
      <form >
        <div className="container ">
          <section className="body">
            <div className="body-inner">
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Org Name </label>
                  <div className="controls">
                    <input name="OrganizationName" id="cat_name" type="text" className="form-control" value={OrganizationName} onChange={(e) => onInputChange(e)} />
                    <span id="category_result" className="form-input-info"></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Email</label>
                  <div className="controls">
                    <input name="OrganizationEmail" id="category_status" type="text" className="form-control" value={OrganizationEmail} onChange={(e) => onInputChange(e)} />
                    <span className="form-input-info" ></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Phone No.</label>
                  <div className="controls">
                    <input name="OrganizationNumber" id="category_status" type="text" className="form-control" value={OrganizationNumber} onChange={(e) => onInputChange(e)} />
                    <span className="form-input-info" ></span>
                  </div>

                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Address</label>
                  <div className="controls">
                    <textarea rows="2" name="OrganizationAddress" id="category_description" className="form-control" value={OrganizationAddress} onChange={(e) => onInputChange(e)}  ></textarea>
                    <span className="form-input-info" ></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                {/* <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Org Logo</label>
                  <div className="controls">
                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
                    <span id="category_result" className="form-input-info"></span>
                  </div>
                </div> */}
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Start Date </label>
                  <div className="controls">
                    <input name="OrganizationStartdate" id="cat_name" type="date" className="form-control" 
                    
                    
                    placeholder="dd/mm/yyyy"
                    // className="form-control cpp-input datevalidation"
                    // name="instistartDate"
                    // value={aggrementStartDate}
                    
                    value={OrganizationStartdate} onChange={(e) => onInputChange(e)}  />
                    <span id="category_result" className="form-input-info"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-right">
          {/* <button className="btn contact_reg btn_color"  onClick={handleClose}>CANCEL</button> */}
          <button className="btn contact_reg btn_color" onClick={()=>onUpdate()}>UPDATE</button>

          </div>
         
        </div>
      </form>


    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  // UpdateTenantsDetails,
  // getAllTenants,
  // tenantsDetailsHistory,
  updateOrganization,
})(EditOrganization);
