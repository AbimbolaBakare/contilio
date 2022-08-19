import { Component } from "react";
import styles from "./button.module.scss";
import Loader from "../Loader";

class Button extends Component<any> {
  render() {
    return (
      <button
        {...this.props}
        disabled={
          this.props.disabled ? this.props.disabled : this.props.loading
        }
        className={` ${this.props.className} ${
          this.props.disabled ? styles.disabledButton : styles.button
        }`}
        style={this.props.style}
        {...this.props.rest}
      >
        <div className="d-flex align-items-center justify-content-center">
          {this.props.loading ? <Loader /> : this.props.text}
        </div>
      </button>
    );
  }
}

export default Button;
