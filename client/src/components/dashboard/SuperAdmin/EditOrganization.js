import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { updateOrganization } from "../../../actions/dag";

const EditOrganization = ({
  auth: { isAuthenticated, user, users },
  Org,
  closeedit,
  updateOrganization,
}) => {
  const [formDataORG, setFormDataORG] = useState({
    OrganizationId: Org._id,
    OrganizationName: Org.orgName,
    OrganizationEmail: Org.email,
    OrganizationNumber: Org.phoneNumber,
    OrganizationAddress: Org.address,
    OrganizationStartdate: Org.startDate,
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

  const onUpdate = (e) => {
    e.preventDefault();

    // Parse the date string into a Date object
    const originalDate = new Date(OrganizationStartdate);

    // Add one year to the original date
    const oneYearLater = new Date(
      originalDate.getFullYear() + 1,
      originalDate.getMonth(),
      originalDate.getDate()
    );

    // Format the date as a string in the desired format
    const oneYearLaterString = `${oneYearLater.getFullYear()}-${(
      "0" +
      (oneYearLater.getMonth() + 1)
    ).slice(-2)}-${("0" + oneYearLater.getDate()).slice(-2)}`;

    const update = {
      OrganizationId: OrganizationId,
      OrganizationName: OrganizationName,
      OrganizationEmail: OrganizationEmail,
      OrganizationNumber: OrganizationNumber,
      OrganizationAddress: OrganizationAddress,
      OrganizationStartdate: OrganizationStartdate,
      OrganizationEnddate: oneYearLaterString,

      OrganizationIdOld: Org._id,
      OrganizationNameOld: Org.orgName,
      OrganizationEmailOld: Org.email,
      OrganizationNumberOld: Org.phoneNumber,
      OrganizationAddressOLd: Org.address,
      OrganizationStartdateOld: Org.startDate,
      OrganizationEnddateOld: Org.endDate,

      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),
    };
    closeedit();

    updateOrganization(update);
  };
  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <form onSubmit={(e) => onUpdate(e)}>
        <div className="container ">
          <section className="body">
            <div className="body-inner">
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Org Name </label>
                  <div className="controls">
                    <input
                      name="OrganizationName"
                      id="cat_name"
                      type="text"
                      className="form-control"
                      value={OrganizationName}
                      onChange={(e) => onInputChange(e)}
                      required
                      readOnly
                    />
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Email</label>
                  <div className="controls">
                    <input
                      name="OrganizationEmail"
                      id="category_status"
                      type="email"
                      className="form-control"
                      value={OrganizationEmail}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <span className="form-input-info"></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Phone No.</label>
                  <div className="controls">
                    <input
                      name="OrganizationNumber"
                      id="category_status"
                      type="number"
                      className="form-control"
                      value={OrganizationNumber}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <span className="form-input-info"></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Address</label>
                  <div className="controls">
                    <textarea
                      rows="2"
                      name="OrganizationAddress"
                      id="category_description"
                      className="form-control"
                      value={OrganizationAddress}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                    <span className="form-input-info"></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Start Date </label>
                  <div className="controls">
                    <input
                      name="OrganizationStartdate"
                      id="cat_name"
                      type="date"
                      className="form-control"
                      placeholder="dd/mm/yyyy"
                      required
                      value={OrganizationStartdate}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-right">
            <button className="btn contact_reg btn_color" type="submit">
              UPDATE
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  updateOrganization,
})(EditOrganization);
