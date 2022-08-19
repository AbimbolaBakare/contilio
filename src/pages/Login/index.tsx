import { Component } from "react";
import { History, LocationState } from "history";
import Input from "../../components/Input";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import Button from "../../components/Button";

type MyProps = {
  history: History<LocationState>;
};

type MyState = {
  email: string;
  password: string;
  loading: boolean;
};

class Login extends Component<MyProps, MyState> {
  state: MyState = {
    email: "",
    password: "",
    loading: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({ loading: true });

    const token = randomNumberGenerator();

    setTimeout(() => {
      this.setState({ loading: false });
      sessionStorage.setItem("token", token);
      this.props.history.push("/dashboard");
    }, 2000);
  };

  render() {
    return (
      <div className="container w-50 m-auto mt-5 pt-5">
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

          <div className="mb-3">
            <Input
              label="Email address"
              placeholder="Enter email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="w-50 m-auto">
            <Button
              text="Submit"
              loading={this.state.loading ? 1 : 0}
              type="submit"
              disabled={this.state.email === "" || this.state.password === ""}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
