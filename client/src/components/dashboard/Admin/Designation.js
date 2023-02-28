import React, { useEffect } from 'react'


export default function Designation() {
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
            
            <div className="row">
                <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Designation </h1><br />
                    {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

                    <div className='text-right'>
                 
                        <button onClick={edithandleShow}>edit</button>


                        <img
                            className="img_icon_size log text-right"
                            //   onClick={() => handleAddOrg()}
                            // onClick={handleShow}
                            onClick={handleShow}
                            src={require("../../../static/images/add-icon.png")}
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
                  

                  

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
                    <table  border="1"  id="datatable2" className="table-striped table table-bordered table-hover" >
                        <tr className='headingsizes'>
                            <th>Designation Name</th>
                           
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
                    <Modal.Header closeButton>

                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD DESIGNATION</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >

                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Designation Name <span >*</span></label>
                                                <div className="controls">
                                                    <input name="CategoryName" id="full_name" type="text" className="form-control"  />
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
                    <Modal.Header closeButton>

                        <Modal.Title className='container'><h1 className='font-weight-bold '>EDIT DESIGNATION</h1></Modal.Title>
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


                   



        </div>
    )
}
