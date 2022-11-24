import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Routes } from "./components/routes";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact component={Login} path="/login" />
        <Route exact component={SignUp} path="/register" />
        <Layout>
          {Routes.map((route) => {
            const { component, path, key } = route;
            return <Route exact component={component} path={path} key={key} />;
          })}
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
