import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../layout/NotFound";

//user Section
import PrivateRoute from "./PrivateRoute";
import RouteDriver from "../dashboard/RouteDriver";

//DashBoard
import AllStaffDetails from "../dashboard/AllStaffDetails";
import AddStaffFeedBack from "../dashboard/AddStaffFeedBack";

const RoutesFile = () => {
  return (
    <section className="container">
      <Routes>
        <PrivateRoute
          exact
          path="/all-staff-details"
          component={AllStaffDetails}
        />
        <PrivateRoute
          exact
          path="/add-staff-feedBack"
          component={AddStaffFeedBack}
        />
        <PrivateRoute exact path="/route-driver" component={RouteDriver} />

        <Route component={NotFound} />
      </Routes>
    </section>
  );
};

export default RoutesFile;
