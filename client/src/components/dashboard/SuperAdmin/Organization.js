import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddOrgModal from "./AddOrgModal";
// import { Props } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { getAllOrganization } from "../../../actions/dag";
import { deleteOrganization } from "../../../actions/dag";
// import "../../../../client/src/styles/CustomisedStyle.css";
// import "../../styles/CustomisedStyle.css";

const Organization = ({
    //here to connect to action we need to import the function
    //then again we need to mention inside the const function
    dag: { allorg },
    deleteOrganization,
    getAllOrganization,
}) => {
    useEffect(() => {
        getAllOrganization("");
    }, []);

    const clicking = () => {
        alert("Edit");
    };
    console.log(allorg[0])

    //deactivate
    const [formData, setFormData] = useState({
        Organization_DE_Reason: "",
        isSubmitted: false,
    });

    const { Organization_DE_Reason } = formData;

    const onInputchange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


//edit
    const onORGchange = (e) => {
        setFormDataORG({ ...formData, [e.target.name]: e.target.value });
    };


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


    //deactivate modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //edit modal
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditModalClose = () => setShowEditModal(false);
    const handleOpen = () => setShowEditModal(true);
    const onAddStaffModalChange = (e) => {
        if (e) {
            handleEditModalClose();
        }
    };

    const [OrgId, setId] = useState("");

    const onDelete = (id) => {
        setId(id);
        handleShow();
    };

    const onedit = (id) => {
        setId(id);
        handleOpen();
    };

    const onAdd = () => {
        const reason = {
            Org_id: OrgId,
            // org_status: "Deactive",
            deactive_reason: Organization_DE_Reason,
        };
        deleteOrganization(reason);
        //console.log(reason);
    };
 
    

    return (
        <div>
            <div className="container container_align ">
                {/* OrganiZation Details  start*/}
                <section className="sub_reg">
                    <div className="row col-lg-12 col-md-12 col-sm-12 col-12 no_padding">
                        <div className="col-lg-10 col-md-11 col-sm-11 col-11 ">
                            <h2 className="heading_color">Organization List </h2>
                        </div>

                        <AddOrgModal />
                    </div>
                    <div className="row">
                        <div className="col-lg-11 col-md-11 col-sm-11 col-11 text-center ">
                            <section className="body">
                                <div className="body-inner no-padding  table-responsive fixTableHead">
                                    <table
                                        className="table table-bordered table-striped table-hover"
                                        id="datatable2"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Org Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                {/* <th>Number of Users</th> */}
                                                <th>Current Status</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allorg &&
                                                allorg[0] &&
                                                allorg.map((orgVal, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{orgVal.orgName}</td>
                                                            <td>{orgVal.email}</td>
                                                            <td>{orgVal.phoneNumber}</td>
                                                            <td>{orgVal.address}</td>
                                                            <td>{orgVal.orgStatus}</td>
                                                            <td>
                                                                <img
                                                                    className="img_icon_size log"
                                                                    // onClick={() => onClickHandler()}
                                                                    // onClick={() => clicking()}
                                                                    // onClick={handleOpen}
                                                                    onClick={() => onedit(orgVal._id)}
                                                                    src={require("../../../static/images/edit_icon.png")}
                                                                    alt="Edit"
                                                                    title="Edit User"
                                                                />
                                                                <img
                                                                    className="img_icon_size log"
                                                                    // onClick={() => onClickHandler()}
                                                                    onClick={() => onDelete(orgVal._id)}
                                                                    src={require("../../../static/images/delete.png")}
                                                                    alt="delete User"
                                                                    title="delete User"
                                                                />
                                                            </td>

                                                            {/* {orgVal.AgreementStatus === "Expired" ? (
                                <td>
                                  <center>
                                     <button
                                      variant="success"
                                      className="btn sub_form"
                                      // onClick={() =>
                                      //   onRenewal(orgVal, idx)
                                      // }
                                    >
                                      Renewal
                                    </button> 
                                  </center>
                                </td>
                              
                              ) : (
                                <td></td>
                              )} */}
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>

                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                {/* OrganiZation Deatils End */}
            </div>
           
           
            {/* modal for deactivating start */}
         
            <Modal
                show={show}
                // onHide={handleClose}
                centered
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header >
                    <Modal.Title className='container'><h1 className='font-weight-bold '>DEACTIVATE ORGANIZATION</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <label className="control-label">Reason for Deactivating:</label>
                    <form>
                        <div className="controls">
                            <textarea rows="2" name="Organization_DE_Reason"
                                onChange={(e) => onInputchange(e)} id="org_reason" className="form-control" ></textarea>
                            <span className="form-input-info" ></span>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={handleClose} className="btn contact_reg btn_color"> NO</button>
                    <button onClick={onAdd} className="btn contact_reg btn_color">  YES</button>
                </Modal.Footer>
            </Modal>
           







            {/* Edit OrganiZation start */}
            <Modal
                show={showEditModal}
                backdrop="static"
                size="lg"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header >

                    <Modal.Title className='container'><h1 className='font-weight-bold '>EDIT ORGANIZATION</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container ">
                            <section className="body">
                                <div className="body-inner">
                                    <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label className="control-label">Org Name </label>
                                            <div className="controls">
                                                <input name="OrganizationName" id="cat_name" type="text" className="form-control" value={OrganizationName}  onChange={(e) => onORGchange(e)} />
                                                <span id="category_result" className="form-input-info"></span>
                                            </div>
                                        </div>
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label className="control-label">Email</label>
                                            <div className="controls">
                                                <input name="OrganizationEmail" id="category_status" type="text" className="form-control"  value={OrganizationEmail}  onChange={(e) => onORGchange(e)} readonly />
                                                <span className="form-input-info" ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label className="control-label">Phone No.</label>
                                            <div className="controls">
                                                <input name="OrganizationNumber" id="category_status" type="number" className="form-control" value={OrganizationNumber}  onChange={(e) => onORGchange(e)}  readonly />
                                                <span className="form-input-info" ></span>
                                            </div>

                                        </div>
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label className="control-label">Address</label>
                                            <div className="controls">
                                                <textarea rows="2" name="OrganizationAddress" id="category_description" className="form-control" value={OrganizationAddress}  onChange={(e) => onORGchange(e)}  ></textarea>
                                                <span className="form-input-info" ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                    <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Start Date </label>
                                                <div className="controls">
                                                    <input name="OrganizationStartdate" id="cat_name" type="date" className="form-control" value={OrganizationStartdate} onChange={(e) => onORGchange(e)} />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            {/* <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Logo</label>
                                                <div className="controls">
                                                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div> */}
                                        </div>
                                </div>
                            </section>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                     <button onClick={handleEditModalClose} className="btn contact_reg btn_color"> NO</button>
                    <button onClick={handleEditModalClose} className="btn contact_reg btn_color">  EDIT</button>
                    {/* <div className="col-lg-12 Savebutton " size="lg">
            <button
              variant="success"
              className="btn sub_form btn_continue Save float-right"
              // onClick={() => onSubmitORGdata()}
            >
              Save
            </button>
            <button
              variant="success"
              className="btn sub_form btn_continue Save float-right"
              // onClick={() => onSubmitORGdata()}
              onClick={()=>handleClose()}
            >
             cancel
            </button>
          </div> */}
                </Modal.Footer>
            </Modal>
            {/* End of Edit Organization */}
        </div>
    );
};
const mapStateToProps = (state) => ({
    dag: state.dag,
});
export default connect(mapStateToProps, {
    getAllOrganization,
    deleteOrganization,
})(Organization);
