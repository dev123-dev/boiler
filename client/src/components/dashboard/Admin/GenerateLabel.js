import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Fragment } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../../actions/dag";
import { getAllEntity } from "../../../actions/dag";
import { useReactToPrint } from "react-to-print";
const GenerateLabel = ({
  auth: { isAuthenticated, user, users, finalDataRep },
  dag: { allent },
  addCategory,

  getAllEntity,
}) => {
  useEffect(() => {
    if (user) {
      getAllEntity(user.orgId);
    }
  }, []);
  //   console.log(allent);
  const [show, setshow] = useState("");
  const handleClose = () => setshow("false");
  //const handleShow = () => setshow("true");

  const catOrgId = user ? user.orgId : "";
  const catOrgName = user ? user.orgName : "";

  const [formDataCAT, setformDataCAT] = useState({
    catName: "",
    catDesp: "",
    catStatus: "",
  });

  const { catName, catDesp } = formDataCAT;

  const onCATchange = (e) => {
    setformDataCAT({
      ...formDataCAT,
      [e.target.name]: e.target.value,
    });
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleOpen = () => setShowAddModal(true);

  const onSubmitCATdata = (e) => {
    e.preventDefault();

    const finalCATdata = {
      categoryName: catName,
      categoryDesp: catDesp,
      categoryStatus: "Active",
      orgId: catOrgId,
      orgName: catOrgName,
      categoryReason: "",
      EnterById: user._id,
      EnterByName: user.userName,
      EnterByDateTime: new Date().toLocaleString("en-GB"),
      EditById: "",
      EditByName: "",
      EditByDateTime: "",
      DeactiveById: "",
      DeactiveByName: "",
      DeactiveByDateTime: "",
    };

    addCategory(finalCATdata);
    //getAllCategory(user.orgId);

    setformDataCAT({
      ...formDataCAT,
      catName: "",
      catDesp: "",
      catStatus: "Active",
    });
    handleAddClose();
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Generate Label",
    onAfterPrint: () => alert("print success"),
  });
  console.log("allent", allent);

  return !isAuthenticated || !user || !users ? (
    <Fragment></Fragment>
  ) : (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
            <br />
            <br />
            <section>
              <div
                ref={componentRef}
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "97%",
                  height: "90%",
                }}
              >
                <br />

                {/* <br /> */}
                {/* <div className="grid">
                  {allent &&
                    allent.map((entVal, index) => {
                      console.log("allent", allent);
                      return (
                        <table>
                          <tr key={index}>
                            <td className="item">lkk{entVal.entAddress1}</td>
                            <div className="mb-3"> </div>
                          </tr>
                        </table>
                      );
                    })}
                </div> */}
                {/* <div className="mb-3">
                  {" "}
                  <button style={{ height: "100px" }} onClick={handlePrint}>
                    print this
                  </button>
                </div> */}
                <div className="grid">
                  {allent &&
                    allent.map((entVal, index) => {
                      console.log("allent", allent);
                      return (
                        <div key={index}>
                          <div className="item">
                            {entVal.entAddress1}
                            <br />
                            {entVal.entAddress2}
                          </div>
                        </div>
                      );
                    })}

                  <div className="item">item3</div>
                  <div className="item">item1</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item1</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item1</div>
                  <div className="item">item2</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item1</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item1</div>
                  <div className="item">item2</div>
                  <div className="item">item3</div>
                  <div className="item">item2</div>
                </div>
              </div>
              <div className="text-right">
                <button
                  className="btn btn-outline-secondary btnall "
                  onClick={handlePrint}
                >
                  print this
                </button>
              </div>

              <div className="mb-4 text-right"> </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dag: state.dag,
});
export default connect(mapStateToProps, { addCategory, getAllEntity })(
  GenerateLabel
);
