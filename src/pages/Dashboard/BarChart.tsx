import { Component, createRef } from "react";
import BarChart from "react-bar-chart";

type BarProps = {
  margin: Object;
  data: string[];
};

type BarState = {
  width?: number;
};

class Bar extends Component<BarProps, BarState> {
  myRef: any;
  constructor(props: BarProps) {
    super(props);
    this.myRef = createRef();
  }

  state: BarState = {
    width: 500,
  };

  getInitialState() {
    return { width: 500 };
  }

  componentDidMount = () => {
    window.onresize = () => {
      this.setState({ width: this.myRef.current.offsetWidth });
    };
  };

  render() {
    return (
      <div ref={this.myRef}>
        <BarChart
          width={this.state.width}
          height={300}
          margin={this.props.margin}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default Bar;
