import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../layout/NotFound";

//user Section
import PrivateRoute from "./PrivateRoute";
import RouteDriver from "../dashboard/RouteDriver";

//DashBoard
import LandingPage from "../dashboard/LandingPage";

const RoutesFile = () => {
  return (
    <section className="container">
      <Routes>
        <PrivateRoute exact path="/landing-page" component={LandingPage} />
        <PrivateRoute exact path="/route-driver" component={RouteDriver} />

        <Route component={NotFound} />
      </Routes>
    </section>
  );
};

export default RoutesFile;
