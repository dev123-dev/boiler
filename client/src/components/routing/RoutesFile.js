import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";

//user Section
import PrivateRoute from "./PrivateRoute";
import RouteDriver from "../dashboard/RouteDriver";

import SuperDashboard from "../dashboard/SuperAdmin/SuperDashboard";
import Organization from "../dashboard/SuperAdmin/Organization";
import Users from "../dashboard/SuperAdmin/Users";
import UserGroup from "../dashboard/SuperAdmin/UserGroup";

import AdminDashboard from "../dashboard/Admin/AdminDashboard";

// import Category from "../dashboard/Admin/Category";
//import JoinLeaveCategory from "../dashboard/Admin/JoinLeaveCategory";
import AddInstitution from "../dashboard/Admin/AddInstitution";
import Designation from "../dashboard/Admin/Designation";
import Category from "../dashboard/Admin/Category";
import UserList from "../dashboard/Admin/UserList";
import Entity from "../dashboard/Admin/Entity";
import EditEntity from "../dashboard/Admin/EditEntity";

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
        <PrivateRoute exact path="/superdashboard" component={SuperDashboard} />
        <PrivateRoute exact path="/organization" component={Organization} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/usergroup" component={UserGroup} />

        {/* Admin */}
        <PrivateRoute exact path="/admindashboard" component={AdminDashboard} />

        <PrivateRoute exact path="/category" component={Category} />
        <PrivateRoute exact path="/entity" component={Entity} />
        <PrivateRoute exact path="/addinstitute" component={AddInstitution} />

        <PrivateRoute exact path="/designation" component={Designation} />
        <PrivateRoute exact path="/userlist" component={UserList} />

        <PrivateRoute exact path="/editentity" component={EditEntity} />

        <PrivateRoute exact path="/route-driver" component={RouteDriver} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default RoutesFile;
