import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { AddGroup } from "../../../actions/dag";

const AddUserGroup = ({

    auth: { isAuthenticated, user, users, finalDataRep },
    AddGroup,
}) => {
    const [show, setshow] = useState("");
    const handleClose = () => setshow("false");
    const handleShow = () => setshow("true");



    const [formDataGRP, setformDataGRP] = useState({
        groupName: "",
        groupStatus: "",

    });

    const {
        groupName,
        groupStatus,

    } = formDataGRP;

    const onGRPchange = (e) => {
        setformDataGRP({
            ...formDataGRP,
            [e.target.name]: e.target.value,
        });
    };

    const [showAddModal, setShowAddModal] = useState(false);
    const handleAddClose = () => setShowAddModal(false);
    const handleOpen = () => setShowAddModal(true);


    const onSubmitGRPdata = (e) => {
        e.preventDefault()

        const finalGRPdata = {
            groupName: groupName,
            groupStatus: "Active",


        };
        AddGroup(finalGRPdata);

        setformDataGRP({
            ...formDataGRP,
            groupName: "",
            groupStatus: "Active",


        });
        handleAddClose();
    };

    return !isAuthenticated || !user || !users ? (
        <Fragment></Fragment>
    ) : (

        <Fragment>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right">
                {/* <div className="text-right"> */}
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

                    <Modal.Title className='container'><h1 className='font-weight-bold '>ADD ORGANIZATION</h1></Modal.Title>
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
                    <form onSubmit={(e) => onSubmitGRPdata(e)} >

                        <div className="container ">
                            <section className="body">
                                <div className="body-inner">
                                    <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">

                                            <div className="controls">
                                                <label className="control-label">User Group <span >*</span></label><br />
                                                <input name="groupName" id="cat_name" type="text" className="form-control" onChange={(e) => onGRPchange(e)} required />
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
                                <div className="text-right">
                                    <button>ADD</button>
                                </div>
                            </section>
                        </div>
                    </form>
                </Modal.Body>



            </Modal>

        </Fragment>

    );
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    dag: state.dag,
});
export default connect(mapStateToProps, { AddGroup })(AddUserGroup);

