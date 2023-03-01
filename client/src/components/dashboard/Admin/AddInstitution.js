import React from "react";

export default function AddInstitution() {
  return (
    <div>
      <h2> Add Institution</h2>
      <div className="container">
        <div className=" rowcol-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div class="row form-group ">
            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-8">
              <div className="h2"> Add Institution/Individual</div>
              <div class="controls">
                <label style={{ cursor: "pointer" }}>
                  <input
                    className="radio"
                    type="radio"
                    id="institution"
                    name="eventchange"
                    value="institution"
                    onclick="ShowHideDiv()"
                  />
                  &nbsp; Institution
                </label>
                &nbsp;&nbsp;
                <label style={{ cursor: "pointer" }}>
                  <input
                    className="radio"
                    type="radio"
                    id="individuals"
                    name="eventchange"
                    value="individuals"
                    onclick="ShowHideDiv()"
                  />
                  &nbsp; Individual
                </label>
              </div>
            </div>
          </div>
          <div
            className="row form-group  col-md-12 col-lg-12 col-sm-12 col-xs-12"
            id="eventDiv"
          >
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label" id="ent_order_desg_lbl">
                Institution Name
              </label>
              <label className="control-label" id="ent_name_label">
                {" "}
              </label>
              <div className="controls">
                <input
                  name="ent_name"
                  id="ent_name"
                  type="text"
                  className="form-control required"
                  value=""
                />
              </div>
            </div>
            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Order
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>

            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Email </label>
              <div className="controls">
                <input
                  name="ent_email"
                  id="ent_email"
                  type="text"
                  className="form-control validEmail"
                  value=""
                />
                <span className="form-input-info positioning "></span>
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Email </label>
              <div className="controls">
                <input
                  name="ent_addl_email"
                  id="ent_addl_email"
                  type="text"
                  className="form-control validEmail"
                  value=""
                />
                <span className="form-input-info positioning"></span>
              </div>
            </div>

            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Institution URL
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Url</label>
              <div className="controls">
                <input
                  name="ent_addl_url"
                  id="ent_addl_url"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>

            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Contact No.
              </label>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Additional Contact No.</label>
              <div className="controls">
                <input
                  name="ent_addl_url"
                  id="ent_addl_url"
                  type="text"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
          </div>

          {/* <div class="row form-group col-md-12 col-lg-12 col-sm-12 col-xs-12" id="postageDiv" >
            <div class="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
					<label class="txtcolor"><b>Postal Address</b></label>
				</div>

                <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
					<label class="control-label" >Address line1 <span style={{color:"#800000"}}>*</span></label>
					<div class="controls">
						<input name="ent_addl1" id="ent_addl1" type="text" class="form-control required" value="" maxlength="38"/>
					</div>
				</div>
				<div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
					<label class="control-label" >District <span style={{color:"#800000"}}>*</span></label>
					<div class="controls">
						<input name="ent_district" id="ent_district" type="text" class="form-control required" value="" />
					</div>
				</div>

                </div> */}

          {/* <div className="row form-group  col-md-12 col-lg-12 col-sm-12 col-xs-12"  >
				<div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
					<label className="txtcolor"><b>Contact Details</b></label>
				</div>
				

				<div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12" >
					<div  className ="row">
						<div className="control-group col-lg-3 col-md-3 col-sm-3 col-xs-3">
							<select  name="ent_contact_type" className="form-control label_size">
								<option value="Mob">Mob</option>
								<option value="Tel">Tel</option>
							</select>
						</div>
						<div className="control-group col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<input className="form-control contact_number label_size" type="text"  placeholder="Contact Number"/>
						</div> 
						<div className="control-group col-lg-3 col-md-3 col-sm-3 col-xs-3 contact_details_padding">
							<label className="label_size"><input className="radio" type="radio"  name="primaryContact"  checked/>&nbsp; Primary No. </label>
						</div>
						
						
					</div>
				</div> 
			</div> */}
          <div
            class="row form-group col-md-12 col-lg-12 col-sm-12 col-xs-12"
            id="postageDiv"
          >
            <div class="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <label class="txtcolor">
                <b>Postal Address</b>
              </label>
            </div>

            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">
                Address line1 <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_addl1"
                  id="ent_addl1"
                  type="text"
                  class="form-control required"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
              <label class="control-label">
                District <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_district"
                  id="ent_district"
                  type="text"
                  class="form-control required"
                  value=""
                />
              </div>
            </div>
            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">
                Address line2 <span style={{ color: "#800000" }}>*</span>
              </label>
              <div class="controls">
                <input
                  name="ent_addl2"
                  id="ent_addl2"
                  type="text"
                  class="form-control required"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12">
              <label class="control-label">State </label>
              <div class="controls">
                <input
                  name="ent_state"
                  id="ent_state"
                  type="text"
                  class="form-control"
                  value=""
                />
              </div>
            </div>
            <div class="control-group col-md-8 col-lg-8 col-sm-8 col-xs-12">
              <label class="control-label">Address line3 </label>
              <div class="controls">
                <input
                  name="ent_addl3"
                  id="ent_addl3"
                  type="text"
                  class="form-control"
                  value=""
                  maxlength="38"
                />
              </div>
            </div>
            <div class="control-group col-md-4 col-lg-4 col-sm-4 col-xs-12 ">
              <label class="control-label">
                Pincode <span style={{ color: "#800000;" }}>*</span>
              </label>
              <div class="controls ">
                <input
                  name="ent_pincode"
                  id="ent_pincode"
                  maxlength="6"
                  type="text"
                  class="form-control required"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHeadinst">
          <table
            border="1"
            id="datatable2"
            className="table-striped table table-bordered table-hover"
          >
            <thead>
              <tr className="headingsizes">
                <th>Name</th>
                <th>Designation</th>

                <th>Email</th>
                <th>Phone No.</th>

                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>

              {/* {alluser &&

alluser.map((userVal, idx) => {

return (
<tr key={idx}>
<td>{userVal.fullName}</td>
<td>{userVal.orgName}</td>
<td>{userVal.userGroup}</td>
<td>{userVal.email}</td>
<td>{userVal.phone}</td>
<td>{userVal.address}</td>

<td>{userVal.userStatus}</td>

<td>
{userVal.userStatus==="Active" ? (<>
<img
className="img_icon_size log"
// onClick={() => onClickHandler()}
// onClick={() => clicking()}
// onClick={handleOpen}
onClick={() => onedit(userVal)}
src={require("../../../static/images/edit_icon.png")}
alt="Edit"
title="Edit User"
/>&nbsp;&nbsp;
<img
className="img_icon_size log"
// onClick={() => onClickHandler()}
onClick={() => onDelete(userVal._id)}
src={require("../../../static/images/delete.png")}
alt="delete User"
title="Deactivate User"
/></>):(<></>)}


</td> */}

              {/* 


);

})} */}
            </tbody>
          </table>
        </div>

        <div className="text-right mb-5 pt-3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <button className="btn contact_reg btn_color">CANCEL</button>
          <button className="btn contact_reg btn_color">ADD</button>
        </div>
      </div>
    </div>
  );
}
