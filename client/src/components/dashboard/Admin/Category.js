import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import refresh from '../assets/refresh-icon.png';
import addicon from '../../../static/images/add-icon.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



// import '../components/CSS/home1.css'
// import Headersuper from './Layout/Headersuper';
// import Addorg from './Modals/Addorg';

export default function Category() {
    // const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [deleteshow, deletesetShow] = useState(false);


    const handleClose = () => setShow(false);
    const edithandleClose = () => editsetShow(false);
    const deletehandleClose = () => deletesetShow(false);


    const handleShow = () => setShow(true);
    const edithandleShow = () => editsetShow(true);
    const deletehandleShow = () => deletesetShow(true);





    const handleAddOrg = (e) => {
        alert("yi")
        e.preventDefault();
        // console.log('The add was clicked.');
    }
    return (
        <div>
            {/* <Headersuper /> */}
            <div className="row">
                <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Category</h1><br />
                    {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

                    <div className='text-right'>
                        <button onClick={deletehandleShow}>Delete</button>
                        <button onClick={edithandleShow}>edit</button>


                        <img
                            className="img_icon_size log text-right"
                            //   onClick={() => handleAddOrg()}
                            // onClick={handleShow}
                            onClick={handleShow}
                            src={addicon}
                            alt="add-icon"
                            title="add icon"
                        /> &nbsp;&nbsp;&nbsp;
                        {/* <img
                            className="img_icon_size log text-right"
                            // onClick={() => onClickReset()}
                            src={refresh}
                            alt="refresh"

                        /> */}
                    </div><br />




                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
                        <table border="1" id="datatable2" className="table-striped table table-bordered table-hover" >
                            <tr className='headingsizes'>
                                <th>Category Name</th>
                                <th>No. of Inst/Ind</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Operation</th>
                            </tr>

                        </table>
                    </div>
                    <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
                    </div>
                </div>





                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header >

                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD CATEGORY</h1></Modal.Title>
                        <div className="col-lg-2">
                            <button onClick={() => handleClose()} className="close">
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
                                                <label className="control-label">Category Name <span >*</span></label>
                                                <div className="controls">
                                                    <input name="CategoryName" id="full_name" type="text" className="form-control" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Description<span >*</span></label>
                                                <div className="controls">
                                                    <input name="CategoryDescription" id="username" type="text" className="form-control" value="" />
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
                                    <div className='text-right'>
                                        <button onClick={handleClose} className="btn contact_reg btn_color "> CANCEL</button>
                                        <button onClick={handleClose} className="btn contact_reg btn_color">  ADD</button>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>


                        {/* <Button  onClick={handleClose}>
                            CANCEL
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            ADD
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>


            {/* edit modal */}
            <Modal show={editshow} onHide={edithandleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header >

                    <Modal.Title className='container'><h1 className='font-weight-bold '>EDIT CATEGORY</h1></Modal.Title>
                    <div className="col-lg-2">
                            <button onClick={() => edithandleClose()} className="close">
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
                                        <div className="control-group col-md-12 col-lg-6 col-sm-12 col-xs-12">
                                            <label className="control-label">Category Name</label>
                                            <div className="controls">
                                                <input name="user_fullname" id="user_fullname" type="text" className="form-control" value="" />
                                                <span id="category_result" className="form-input-info"></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row form-group">
                                        <div className="control-group col-md-12 col-lg-6 col-sm-12 col-xs-12">
                                            <label className="control-label">Description</label>
                                            <div className="controls">
                                                <input name="username" id="username" type="text" className="form-control" />
                                                <span className="form-input-info" ></span>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                                <div className='text-right'>
                                    {/* <button onClick={edithandleClose} className="btn contact_reg btn_color"> CANCEL</button> */}
                                    <button onClick={edithandleClose} className="btn contact_reg btn_color">  UPDATE</button>

                                </div>
                            </section>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>


            {/* delete modal */}
            <Modal show={deleteshow} onHide={deletehandleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header >

                    <Modal.Title className='container'><h1 className='font-weight-bold '>DEACTIVATE CATEGORY</h1></Modal.Title>
                    <div className="col-lg-2">
                            <button onClick={() => deletehandleClose()} className="close">
                                <img
                                    src={require("../../../static/images/close.png")}
                                    alt="X"
                                    style={{ height: "20px", width: "20px" }}

                                />
                            </button>
                        </div>
                </Modal.Header>
                <Modal.Body>
                    <label className="control-label">Reason for Deactivating:</label>
                    <form>
                        <div className="controls">
                            <textarea rows="2" name="org_reason" id="org_reason" className="form-control" ></textarea>
                            <span className="form-input-info" ></span>
                        </div>
                        <label className="control-label">Do you want to Deactivate this Category?</label>
                        <div className='text-right'>
                            <button onClick={deletehandleClose} className="btn contact_reg btn_color">  DEACTIVATE</button>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {/* <button onClick={deletehandleClose} className="btn contact_reg btn_color"> NO</button> */}

                </Modal.Footer>
            </Modal>





        </div>
    )
}
