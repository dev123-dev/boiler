import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { getAllCategory, updateCategory } from "../../../actions/dag";

const EditCategory = ({
  auth: { isAuthenticated, user, users },
  categorydata,
  closeedit,
  getAllCategory,
  updateCategory,
}) => {
  const [formDataCAT, setFormDataCAT] = useState({
    cat_id: categorydata._id,
    catName: categorydata.categoryName,
    catDesp: categorydata.categoryDesp,
    orgId: categorydata.orgId,
  });
  const { cat_id, catName, catDesp, orgId } = formDataCAT;
  const onInputChange = (e) => {
    setFormDataCAT({ ...formDataCAT, [e.target.name]: e.target.value });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const update = {
      catId: cat_id,
      categoryName: catName,
      categoryDesp: catDesp,
      orgId: orgId,

      categoryNameOld: categorydata.categoryName,
      categoryDespOLd: categorydata.categoryDesp,

      EditById: user._id,
      EditByName: user.userName,
      EditByDateTime: new Date().toLocaleString("en-GB"),
    };
    closeedit();

    //console.log("action", update);

    updateCategory(update);
    getAllCategory(user.orgId);
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
                  <label className="control-label">Category Name</label>
                  <div className="controls">
                    <input
                      name="catName"
                      id="user_fullname"
                      type="text"
                      className="form-control"
                      value={catName}
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
                <div className="control-group col-md-12 col-lg-6 col-sm-12 col-xs-12">
                  <label className="control-label">Description</label>
                  <div className="controls">
                    <input
                      name="catDesp"
                      id="username"
                      type="text"
                      className="form-control"
                      value={catDesp}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="form-input-info"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button className="btn btn-outline-secondary btnall">
                {" "}
                UPDATE
              </button>
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
  updateCategory,
  getAllCategory,
})(EditCategory);
