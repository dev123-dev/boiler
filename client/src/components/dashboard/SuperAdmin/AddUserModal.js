import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { AddUser, getAllOrganization } from "../../../actions/dag";

const AddUserModal = ({

  dag: { allorg },
  auth: { isAuthenticated, user, users, finalDataRep },
  AddUser,
  getAllOrganization,
}) => {
  useEffect(() => {
    getAllOrganization();
  }, []);




  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  const handleShow = () => setshow("true");

  const [inputdata, setinput] = useState("");
  const [items, setitem] = useState([]);

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
    UserPassword,
    UserConfpassword,


  } = formDataUSER;

  const onUserchange = (e) => {
    setformDataUSER({
      ...formDataUSER,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  

  const onSubmitUSERdata = () => {

    
    const finalUSERdata = {
      userName: UserName,
      fullName: UserFullname,
      email: UserEmail,
      userGroup: "Admin",
      orgName: UserOrgbelongs,
      phone: UserNumber,
      address: UserAddress,
      password: UserConfpassword,
      userStatus: "Active",
      userDeactiveReason: "",

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

      <div className="col-lg-12 col-md-12 col-sm-12 col-12 py-4 text-right">
       
        <img
          className="img_icon_size log"
         
          onClick={handleOpen}
          src={require("../../../static/images/add-icon.png")}
          alt="Add User"
          title="Add User"
        />
       
      </div><br />


      {/* Adding Organization */}

      <Modal show={showAddModal} backdrop="static"
        keyboard={false} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header >

          <Modal.Title className='container'><h1 className='font-weight-bold '>ADD USER</h1></Modal.Title>
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
          <form >

            <div className="container ">
              <section className="body">
                <div className="body-inner">
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Full Name <span >*</span></label>
                      <div className="controls">
                        <input name="UserFullname" id="full_name" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span id="category_result" className="form-input-info"></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Organization Belongs<span >*</span></label>
                      <div className="controls">
                       



                        <select name="UserOrgbelongs" className="form-control" onChange={(e) => onUserchange(e)}>
                          <option>--Select Organization--</option>
                          {allorg &&
                            allorg.map((org, idx) =>
                              <option key={idx} value={org.orgName}>{org.orgName}</option>
                            )}


                        </select>
                        <span className="form-input-info" ></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">UserName <span >*</span></label>
                      <div className="controls">
                        <input name="UserName" id="username" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span id="category_result" className="form-input-info"></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Phone No.<span >*</span></label>
                      <div className="controls">
                        <input name="UserNumber" id="user_phone" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span className="form-input-info" ></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Email <span >*</span></label>
                      <div className="controls">
                        <input name="UserEmail" id="user_email" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span id="category_result" className="form-input-info"></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Address</label>
                      <div className="controls">
                        <textarea rows="2" name="UserAddress" id="user_address" className="form-control" onChange={(e) => onUserchange(e)}></textarea>
                        <span className="form-input-info" ></span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Password <span >*</span></label>
                      <div className="controls">
                        <input name="UserPassword" id="user_password" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span id="category_result" className="form-input-info"></span>
                      </div>
                    </div>
                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                      <label className="control-label">Confirm Password <span >*</span></label>
                      <div className="controls">
                        <input name="UserConfpassword" id="user_confpass" type="text" className="form-control" onChange={(e) => onUserchange(e)} />
                        <span id="category_result" className="form-input-info"></span>
                      </div>
                    </div>
                  </div>


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

          
          <button onClick={() => onSubmitUSERdata()} className="btn contact_reg btn_color">  ADD</button>
        </Modal.Footer>
      </Modal>



    </Fragment>

  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, { AddUser, getAllOrganization })(AddUserModal);

