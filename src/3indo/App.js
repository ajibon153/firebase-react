import React from "react";
import "./App.css";
import firebase from "./config/firebase";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Dashboard from "./containers/pages/dashboard/Dashboard";
import Login from "./containers/pages/login/Login";
import Register from "./containers/pages/register/Register";
import { Provider } from "react-redux";
import { store } from "./config/redux";

const Index = () => {
  console.log("uindex", firebase);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </Router>
    </Provider>
  );
};

export default Index;
