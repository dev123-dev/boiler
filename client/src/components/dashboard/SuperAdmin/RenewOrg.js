import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { renewOrganization } from "../../../actions/dag";

const RenewOrg = ({
  auth: { isAuthenticated, user, users },
  Org,closeedit,
  renewOrganization
}) => {


  const [formDataORG, setFormDataORG] = useState({
    OrganizationId: Org._id,
    OrganizationName: Org.orgName,
    OrganizationEmail: Org.email,
    OrganizationNumber: Org.phoneNumber,
    OrganizationAddress: Org.address,
    OrganizationStartdate:Org.startDate,

  });
  const {
    OrganizationId,
    OrganizationName,
    OrganizationEmail,
    OrganizationNumber,
    OrganizationAddress,
    OrganizationStartdate,

  } = formDataORG;
  
  const onInputChange = (e) => {
    setFormDataORG({ ...formDataORG, [e.target.name]: e.target.value });
  };

  const onRenew = (e) => {
    e.preventDefault()
    // Parse the date string into a Date object
    const originalDate = new Date(OrganizationStartdate);
    
    // Add one year to the original date
    const oneYearLater = new Date(originalDate.getFullYear() + 1, originalDate.getMonth(), originalDate.getDate());
    
    // Format the date as a string in the desired format
    const oneYearLaterString = `${oneYearLater.getFullYear()}-${("0" + (oneYearLater.getMonth() + 1)).slice(-2)}-${("0" + oneYearLater.getDate()).slice(-2)}`;
    


    const Renew = {
      OrganizationId: OrganizationId,
      OrganizationStartdate:OrganizationStartdate,
      OrganizationEnddate:oneYearLaterString,
    }
    closeedit()
    renewOrganization(Renew)
  };
  return !isAuthenticated || !user || !users ? (
    <Fragment> </Fragment>
  ) : (

    <Fragment>
      
        <div className="container ">
          <section className="body">
          <form   onSubmit={(e)=>onRenew(e)}>
            <div className="body-inner">
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <div>
               <div className="h3 control-label">Org Name:   {OrganizationName}</div>
                  {/* <h3 className="control-label"></h3> */}

                  </div>
                 
                 
                </div>
                
              </div>
              

              <div className="row form-group">
                
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Start Date </label>
                  <div className="controls">
                    <input name="OrganizationStartdate" id="cat_name" type="date" className="form-control"   placeholder="dd/mm/yyyy" value={OrganizationStartdate} onChange={(e) => onInputChange(e)}  />
                    <span id="category_result" className="form-input-info"></span>
                  </div>
                </div>
               
              </div>
              <div className="text-right">
          
          <button className="btn contact_reg btn_color">RENEW</button>

          </div>
        
            </div>
            </form>
          </section>

        
        </div>
      
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  tenants1: state.tenants,
});

export default connect(mapStateToProps, {
    renewOrganization,
})(RenewOrg);
