import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";

//user Section
import PrivateRoute from "./PrivateRoute";
import RouteDriver from "../dashboard/RouteDriver";

//DashBoard
import AllStaffDetails from "../dashboard/AllStaffDetails";
import AddStaffFeedBack from "../dashboard/AddStaffFeedBack";
import Home from "../dashboard/Home";
import SuperDashboard from "../dashboard/SuperAdmin/SuperDashboard";

const RoutesFile = () => {
  return (
    <section className="container">
      <Switch>
        {/* <PrivateRoute
          exact
          path="/all-staff-details"
          component={AllStaffDetails}
        />
        <PrivateRoute
          exact
          path="/add-staff-feedBack"
          component={AddStaffFeedBack}
        /> */}
         <PrivateRoute
          exact
          path="/superdashboard"
          component={SuperDashboard}
        />
        <PrivateRoute
          exact
          path="/organization"
          component={SuperDashboard}
        />
        <PrivateRoute exact path="/route-driver" component={RouteDriver} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default RoutesFile;
