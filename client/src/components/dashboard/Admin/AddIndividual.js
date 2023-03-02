import React from "react";
// import Headersuper from './Layout/Headersuper'

export default function AddIndividual() {
  return (
    <div>
      {/* <Headersuper/> */}

      {/* <div className='h2'>  Add Institution/Individual</div> */}
      <div class="row form-group mt-5">
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
      <div class="container">
        <div className="h2">Individual</div>
        <div className="text-right">
          <img
            className="img_icon_size log"
            //   onClick={handleOpen}
            src={require("../../../static/images/back.png")}
            alt="Add User"
            title="Back"
          />
        </div>

        <form>
          <div className="row form-group mt-5" id="eventDiv">
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label" id="ent_name_label">
                Individal's Name{" "}
              </label>
              <span>*</span>
              <div className="controls">
                <input
                  name="ent_name"
                  id="ent_name"
                  type="text"
                  className="form-control required"
                  value=""
                  required
                />
              </div>
            </div>
            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="desgDiv"
            >
              <label className="control-label ">
                Designation <span>*</span>
              </label>
              <div className="controls">
                <select
                  className="form-control"
                  id="desg_menu"
                  name="desg_menu"
                  required
                >
                  <option selected value="">
                    --Select Designation--
                  </option>
                </select>
              </div>
            </div>
            <div
              className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12"
              id="orderDiv"
            >
              <label className="control-label" id="ent_order_desg_lbl">
                Phone
              </label>
              <span>*</span>
              <div className="controls">
                <input
                  name="ent_order_desg"
                  id="ent_order_desg"
                  type="text"
                  className="form-control"
                  value=""
                  required
                />
              </div>
            </div>

            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Email </label>
              <span>*</span>
              <div className="controls">
                <input
                  name="ent_email"
                  id="ent_email"
                  type="text"
                  className="form-control validEmail"
                  value=""
                  required
                />
                <span className="form-input-info positioning "></span>
              </div>
            </div>
            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <label className="control-label">Address </label>
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

            {/* <div id="ent_url_div">
					<div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
						<label className="control-label" >Institution Url</label>
						<div className="controls">
							<input name="ent_url" id="ent_url" type="text" className="form-control" value=""/>
						</div>
					</div>
					<div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-12">
						<label className="control-label" >Additional Url</label>
						<div className="controls">
							<input name="ent_addl_url" id="ent_addl_url" type="text" className="form-control" value=""/>
						</div>
					</div>
				</div> */}
          </div>
          <div className="text-right mt-5">
            <button className="btn contact_reg btn_color">CANCEL</button>
            <button className="btn contact_reg btn_color" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
