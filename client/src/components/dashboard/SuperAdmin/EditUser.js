import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
// import AddOrgModal from "./AddOrgModal";
// import { Props } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { getAllOrganization } from "../../actions/tenants";
// import { deleteOrganization } from "../../actions/tenants";
import { updateUser } from "../../../actions/dag";
// import "../../../../client/src/styles/CustomisedStyle.css";
// import { editOrganization } from "../../../actions/dag";
const EditUser = ({
  auth: { isAuthenticated, user, users },
  userdata,
  updateUser
}) => {
  console.log(userdata);
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

  //  console.log(org.Location)

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
    User_id: userdata._id,
    fullName: userdata.fullName,
    UserName:userdata.userName,
     UserEmail: userdata.email,
   UserNumber: userdata.phone,
     UserAddress: userdata.address,
  });
  const {
    User_id,
    fullName,
    UserName,
    UserEmail,
    UserNumber,
    UserAddress,
  } = formDataORG;
  const onInputChange = (e) => {
    setFormDataORG({ ...formDataORG, [e.target.name]: e.target.value });
  };

  const onUpdate = () => {
    const update = {
        User_id: User_id,
        UserName: UserName,
        fullName:fullName,
     UserEmail: UserEmail,
        UserNumber: UserNumber,
        UserAddress: UserAddress,
        
    }
    console.log("main page" + update)
    updateUser(update)
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
                  <label className="control-label">Full Name </label>
                  <div className="controls">
                    <input name="fullName" id="cat_name" type="text" className="form-control" value={fullName} onChange={(e) => onInputChange(e)} />
                    <span id="category_result" className="form-input-info"></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">User Name</label>
                  <div className="controls">
                    <input name="UserName" id="category_status" type="text" className="form-control" value={UserName} onChange={(e) => onInputChange(e)} />
                    <span className="form-input-info" ></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Phone No.</label>
                  <div className="controls">
                    <input name="UserNumber" id="category_status" type="text" className="form-control" value={UserNumber} onChange={(e) => onInputChange(e)} />
                    <span className="form-input-info" ></span>
                  </div>

                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Email </label>
                  <div className="controls">
                    <input name="UserEmail" id="cat_name" type="text" className="form-control"   
                    value={UserEmail} onChange={(e) => onInputChange(e)}  />
                    <span id="category_result" className="form-input-info"></span>
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
                  <label className="control-label">Address</label>
                  <div className="controls">
                    <textarea rows="2" name="UserAddress" id="category_description" className="form-control" value={UserAddress} onChange={(e) => onInputChange(e)}  ></textarea>
                    <span className="form-input-info" ></span>
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
  tenants1: state.tenants,
});

export default connect(mapStateToProps, {
  // UpdateTenantsDetails,
  // getAllTenants,
  // tenantsDetailsHistory,
  updateUser,
})(EditUser);