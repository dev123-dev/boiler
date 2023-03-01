import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";


// import addicon from '../assets/add-icon.png';
// import Modal from 'react-bootstrap/Modal';






export default function JoinLeaveCategory() {
    return (
        <div>
           
            <div className='mt-5'>
            <section id="section-register">
                <div className="container-fluid " style={{ minheight: "100%" }}>
                    <div className='container'>
                   
                        <div className="row-fluid">
                            <section className="body">
                                <div className="row form-group">
                                    <div className="col-md-10 col-lg-10 col-sm-10 col-xs-9 no-pad">
                                        <h3>Join or Leave From <span style={{ color: "#ff9500" }}></span></h3>
                                    </div>
                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 pull-right text-right" style={{margintop: "20px"}}>
                            <a href="#" title="Back"><img style={{width:"24px", height:"24px"}} src={require("../assets/refresh-icon.png")}/></a>
                            <a style={{textdecoration:"none",cursor:"pointer"}} href="#" title="Refresh"><img style={{width:"24px",height:"24px"}} title="Refresh" src={require("../assets/refresh-icon.png")} /></a>
                        </div> */}
                         <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right">
          {/* <div className="text-right"> */}
            <img
              className="img_icon_size log"
            //   onClick={handleOpen}
              src={require("../../../static/images/back.png")}
              alt="Add User"
              title="Back"
            />
            </div><br/>
                                </div>
                                <div className='row'>

                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 padding_right table-responsive fixTableHeadjoin" style={{ paddingleft: " 0px" }}>
                                    {/* <div className="body-inner table-responsive padding_col_xs">  */}
                                    <table className="table table-bordered table-striped table-hover" id="datatable2">
                                        <thead>
                                            <tr>
                                               <th style={{ width: "5%" }}>Join</th>
                                                {/* <form id="joinForm" method="POST"> */}
                                                <th style={{ width: "80%" }}>Name
                                                    <input type="hidden" name="callFromJoin" value="SearchJoin" />
                                                    <input className="search_control" type="text" name="joinEntName" placeholder="Search" />
                                                </th>
                                                {/* </form> */}
                                                <th style={{ width: "10%" }}>Type</th>
                                                <th style={{ width: "5%" }}>Op</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    {/* <ul id="page1" className="pagination pagination-sm" style={{margintop:" 1px"}}>

                        </ul> */}
                                    <label style={{ fontsize: "18px", color: "#5b5b5b", margintop: "-0.2px;" }} className=" text-right">Total: <strong style={{ fontsize: "18px" }}></strong>
                                    </label>

                                </div>

                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 padding_left  table-responsive fixTableHeadjoin" style={{ paddingright: " 0px" }}>
                                    <table className="table table-bordered table-striped table-hover" id="datatable2">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "5%" }}>Leave</th>
                                                {/* <form id="leaveForm" method="POST"> */}
                                                <th style={{ width: "80%" }}>Name &nbsp;
                                                    <input id="idSrchLeave" className="search_control" type="text" name="leaveEntName" placeholder="Search" />
                                                    <input type="hidden" name="callFromLeave" />
                                                </th>
                                                {/* </form> */}
                                                <th style={{ width: "10%" }}>Type</th>
                                                <th style={{ width: "5%" }}>Op</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    {/* <ul className="pagination pagination-sm" style={{margintop: "1px"}}>

</ul> */}
                                    <label style={{ fontsize: "18px", color: "#5b5b5b", margintop: "-0.2px" }} className="pull-right">Total: <strong style={{ fontsize: "18px" }}></strong>
                                    </label>
                                </div>

                                </div>






                                home





                            </section>
                        </div>
                        </div>
                </div>
            </section>
            </div>
        </div >

    )
}

