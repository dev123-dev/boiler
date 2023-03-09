import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function EmptyCategory() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
          <br />
          <br />
          <section>
            <h1
              style={{ fontFamily: "Serif", color: "#877bae" }}
              className="font-weight-bold "
            >
              List of Empty <span style={{ color: "#e79d69" }}>Categories</span>
            </h1>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12  text-right mb-2">
              <img
                className="img_icon_size log text-right"
                src={require("../../../static/images/refresh-icon.png")}
                //onClick={() => onClickReset()}
                alt="refresh"
                title="Refresh"
              />{" "}
              &nbsp;
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive fixTableHead">
              <table
                border="1"
                id="datatable2"
                className="table table-bordered table-hover table-striped"
              >
                <tr className="headingsizes">
                  <th style={{ width: "50%" }}>Category Name</th>
                  <th style={{ width: "40%" }}>Description</th>

                  <th style={{ width: "10%" }}>Operation</th>
                </tr>
                <tr></tr>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
