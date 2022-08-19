import { Component } from "react";
import { Route } from "react-router-dom";
import UnauthorizedPage from "./UnauthorizedPage";

type MyProps = {
  path: string;
  component: React.ComponentType<any>;
};

class ProtectedRoute extends Component<MyProps> {
  render() {
    if (sessionStorage.getItem("token")) {
      return (
        <Route exact path={this.props.path} component={this.props.component} />
      );
    }
    return <UnauthorizedPage />;
  }
}

export default ProtectedRoute;
