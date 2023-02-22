import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import refresh from '../../../static/images/download.png';
import addicon from '../../../static/images/add-icon.png';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';




//import Addorg from './Modals/Addorg';

export default function Organization() {
   // const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [deleteshow, deletesetShow] = useState(false);


    const handleClose = () => setShow(false);
    const edithandleClose = () => editsetShow(false);
    const deletehandleClose = () => deletesetShow(false);


    const addhandleShow = () => setShow(true);
    const edithandleShow = () => editsetShow(true);
    const deletehandleShow = () => deletesetShow(true);

    const handleAddOrg = (e) => {
        alert("yi")
        e.preventDefault();
        // console.log('The add was clicked.');
    }
    return (
        <div>
           
            <div className="row">
                {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
                </div> */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Organisation Lists</h1><br />
                    {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

                    <div className='text-right'>
                        <button onClick={deletehandleShow}>Delete</button>
                        <button onClick={edithandleShow}>edit</button>
                        <img
                            className="img_icon_size log text-right"
                            //   onClick={() => handleAddOrg()}
                            // onClick={handleShow}
                            onClick={addhandleShow}
                            src={addicon}
                            alt="add-icon"
                            title="add icon"
                        /> &nbsp;&nbsp;&nbsp;
                        <img
                            className="img_icon_size log text-right"
                            // onClick={() => onClickReset()}
                            src={refresh}
                            alt="refresh"

                        />
                    </div><br />
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive">


                    <table border="1" id="datatable2" >
                        <tr className='headingsizes'>
                            <th>Org Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th>Operation</th>
                        </tr>
                        <tr>
                        </tr>
                    </table>
                    </div>
                </div>
                {/* <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
                </div> */}


                {/* add modal */}
                <Modal show={show} onHide={handleClose}
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
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email<span >*</span></label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Start Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="date" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Phone No.<span >*</span></label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">End  Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2" name="category_description" id="category_description" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Logo <span >*</span></label>
                                                <div className="controls">
                                                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
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
                        <button onClick={handleClose} className="btn contact_reg btn_color"> CANCEL</button>
                        <button onClick={handleClose} className="btn contact_reg btn_color">  ADD</button>
                    </Modal.Footer>
                </Modal>

                {/* edit modal */}
                <Modal show={editshow} onHide={edithandleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
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
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email</label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Phone No.</label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>

                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2" name="category_description" id="category_description" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Logo</label>
                                                <div className="controls">
                                                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={edithandleClose} className="btn contact_reg btn_color"> CANCEL</button>
                        <button onClick={edithandleClose} className="btn contact_reg btn_color">  EDIT</button>
                    </Modal.Footer>
                </Modal>



                {/* delete modal */}
                <Modal show={deleteshow} onHide={deletehandleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header >

                        <Modal.Title className='container'><h1 className='font-weight-bold '>DEACTIVATE ORGANIZATION</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <label className="control-label">Reason for Deactivating:</label>
                        <form>
                            <div className="controls">
                                <textarea rows="2" name="org_reason" id="org_reason" className="form-control" ></textarea>
                                <span className="form-input-info" ></span>
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={deletehandleClose} className="btn contact_reg btn_color"> NO</button>
                        <button onClick={deletehandleClose} className="btn contact_reg btn_color">  YES</button>
                    </Modal.Footer>
                </Modal>





            </div>
        </div>
    )
}
