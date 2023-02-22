import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/layout/HomePage";

import RoutesFile from "./components/routing/RoutesFile";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

//import './App.css';
import "./styles/bootstrap/css/bootstrap.min.css";
import "./styles/CustomisedStyle.css";

import Login from "./components/auth/Login";
// import Alert from "./components/layout/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          {/* <Alert /> */}

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route component={RoutesFile} />
          </Switch>

          <footer className="footer">
            <Footer />
            <br />
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
