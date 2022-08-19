import { forwardRef } from "react";
import styles from "./input.module.scss";

const Input = forwardRef((props: any, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={styles.inputWrapper}>
        <input
          {...props}
          style={props.style}
          ref={ref}
          className={styles.inputDef}
        />
      </div>
    </div>
  );
});

export default Input;
