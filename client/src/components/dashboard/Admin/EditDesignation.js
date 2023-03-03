import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { getalldesignation, updateDesignation } from "../../../actions/dag";

const EditDesignation = ({
  auth: { isAuthenticated, user, users },
  desigdata,
  closeedit,
  getalldesignation,
  updateDesignation,
}) => {
  const [formDataDESG, setformDataDESG] = useState({
    desig_id: desigdata._id,
    desigName: desigdata.designationName,
    orgId: desigdata.orgId,
  });

  const { desig_id, desigName, orgId } = formDataDESG;
  const onInputChange = (e) => {
    setformDataDESG({ ...formDataDESG, [e.target.name]: e.target.value });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const update = {
      desigId: desig_id,
      designationName: desigName,
      designationNameOld: desigdata.designationName,
      orgId: orgId,
      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),
    };
    closeedit();

    updateDesignation(update);

    getalldesignation(user.orgId);
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
                <div className="control-group col-md-12 col-lg-6 col-sm-12 col-xs-12">
                  <label className="control-label">Designation Name</label>
                  <div className="controls">
                    <input
                      name="desigName"
                      id="user_fullname"
                      type="text"
                      className="form-control"
                      value={desigName}
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
            <div className="text-right">
              <button className="btn contact_reg btn_color"> UPDATE</button>
            </div>
          </section>
        </div>
      </form>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  updateDesignation,
  getalldesignation,
})(EditDesignation);
