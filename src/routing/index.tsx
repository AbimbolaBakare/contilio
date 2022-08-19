import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routing;
