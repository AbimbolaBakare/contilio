import { ChangeEventHandler, Component } from "react";
import styles from "./dashboard.module.scss";

type RangeSliderProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  data: string[];
};

class RangeSlider extends Component<RangeSliderProps> {
  render() {
    return (
      <div className={`${styles.options} text-center mt-5`}>
        <h1 className={styles.slideTitle}>SLIDE TO VIEW NEW DATA</h1>
        <input
          type="range"
          list="number"
          onChange={this.props.handleChange}
          step="1"
          min="0"
          max="3"
          defaultValue={0}
          className="slider"
        />

        <datalist id="number">
          {this.props.data.map((_, i) => {
            return (
              <option key={i} value={i}>
                {i + 1}
              </option>
            );
          })}
        </datalist>

        <div className={styles.ticks}>
          {this.props.data.map((res: any, i) => {
            return (
              <span key={i} className={styles.o_txt}>
                {res?.title}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RangeSlider;
