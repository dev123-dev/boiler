import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { updateUser } from "../../../actions/dag";

const EditUser = ({
  auth: { isAuthenticated, user, users },
  userdata,
  closeedit,
  updateUser,
}) => {
  const [formDataORG, setFormDataORG] = useState({
    User_id: userdata._id,
    fullName: userdata.fullName,
    UserName: userdata.userName,
    UserEmail: userdata.email,
    UserNumber: userdata.phone,
    UserAddress: userdata.address,
  });
  const { User_id, fullName, UserName, UserEmail, UserNumber, UserAddress } =
    formDataORG;
  const onInputChange = (e) => {
    setFormDataORG({ ...formDataORG, [e.target.name]: e.target.value });
  };

  const onUpdate = () => {
    const update = {
      User_id: User_id,
      UserName: UserName,
      fullName: fullName,
      orgName: userdata.OrgName,
      UserEmail: UserEmail,
      UserNumber: UserNumber,
      UserAddress: UserAddress,

      fullNameOld: userdata.fullName,
      UserNameOld: userdata.userName,
      UserEmailOld: userdata.email,
      UserNumberOld: userdata.phone,
      UserAddressOld: userdata.address,

      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),
    };
    closeedit();

    updateUser(update);
  };
  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <form>
        <div className="container ">
          <section className="body">
            <div className="body-inner">
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Full Name </label>
                  <div className="controls">
                    <input
                      name="fullName"
                      id="cat_name"
                      type="text"
                      className="form-control"
                      value={fullName}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">User Name</label>
                  <div className="controls">
                    <input
                      name="UserName"
                      id="category_status"
                      type="text"
                      className="form-control"
                      value={UserName}
                      onChange={(e) => onInputChange(e)}
                      readOnly
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
                      name="UserNumber"
                      id="category_status"
                      type="text"
                      className="form-control"
                      value={UserNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="form-input-info"></span>
                  </div>
                </div>
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Email </label>
                  <div className="controls">
                    <input
                      name="UserEmail"
                      id="cat_name"
                      type="text"
                      className="form-control"
                      value={UserEmail}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span
                      id="category_result"
                      className="form-input-info"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                  <label className="control-label">Address</label>
                  <div className="controls">
                    <textarea
                      rows="2"
                      name="UserAddress"
                      id="category_description"
                      className="form-control"
                      value={UserAddress}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                    <span className="form-input-info"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-right">
            <button
              className="btn btn-outline-secondary btnall"
              onClick={() => onUpdate()}
            >
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
  updateUser,
})(EditUser);
