import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddOrgModal from "./AddOrgModal";
// import { Props } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { getAllOrganization } from "../../../actions/dag";
import { deleteOrganization } from "../../../actions/dag";
import { editOrganization } from "../../../actions/dag";
import EditOrganization from "./EditOrganization"
// import "../../../../client/src/styles/CustomisedStyle.css";
// import "../../styles/CustomisedStyle.css";

const Organization = ({
    //here to connect to action we need to import the function
    //then again we need to mention inside the const function
    dag: { allorg },
    deleteOrganization,
    getAllOrganization,
    editOrganization,
}) => {
    useEffect(() => {
        getAllOrganization("");
    }, []);

    const clicking = () => {
        alert("Edit");
    };
    // console.log(allorg[0])

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
    const[orgdata,setorgdata]=useState(null);
    const onedit = (org) => {
        setShowUpdateModal(true);
        //setId(id);
        setorgdata(org)
        handleOpen();
        
      };
     
   

      const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleUpdateModalClose = () => setShowUpdateModal(false);

  const onUpdateModalChange = (e) => {
    if (e) {
      handleUpdateModalClose();
    }
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
    // const onEdit = () => {
    //     const editdata = {
    //         Org_id: OrgId,
    //         orgName:OrganizationName,
    //         email:OrganizationEmail,
    //         phoneNumber:OrganizationNumber,
    //         address:OrganizationAddress,

            
           
    //     };
    //     console.log(editdata)
    //  editOrganization(editdata);
   
       
    // };
    

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
                                                                    onClick={() => onedit(orgVal)}
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
{/* edit modal */}
            <Modal
          show={showUpdateModal}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <div className="col-lg-10">
              <h3 className="modal-title text-center">Edit Organization Details </h3>
            </div>
            <div className="col-lg-2">
              <button onClick={handleUpdateModalClose} className="close">
                <img
                  src={require("../../../static/images/close.png")}
                  alt="X"
                  style={{ height: "20px", width: "20px" }}
                />
              </button>
            </div>
          </Modal.Header>
          <Modal.Body>

            <EditOrganization  Org={orgdata}/>
               
          </Modal.Body>
        </Modal>
     
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
