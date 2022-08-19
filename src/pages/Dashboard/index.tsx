import { Component } from "react";
import { History, LocationState } from "history";
import Button from "../../components/Button";
import Bar from "./BarChart";
import styles from "./dashboard.module.scss";
import DashboardTable from "./DashboardTable";
import RangeSlider from "./RangeSlider";

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

type DashboardProps = {
  history: History<LocationState>;
};

type DashboardState = {
  data: any;
  current?: any;
};

class Dashboard extends Component<DashboardProps, DashboardState> {
  state: DashboardState = {
    data: [],
    current: null,
  };

  getData = async () => {
    await fetch("data.json", {
      headers: headers,
    })
      .then(function (response) {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({
          ...this.state,
          data: jsonData,
          current: {
            ...jsonData[0],
            attributes: jsonData[0]?.attributes.map((item: any) => {
              return {
                text: item?.name,
                unit: item?.unit,
                value: item?.value,
              };
            }),
          },
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  handleRangeChange = (e: any) => {
    this.setState({
      ...this.state,
      current: {
        ...this.state.data[e.target.value],
        attributes: this.state.data[e.target.value]?.attributes.map(
          (item: any) => {
            return {
              text: item?.name,
              unit: item?.unit,
              value: item?.value,
            };
          }
        ),
      },
    });
  };

  logout = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className={styles.dashboard}>
        <div className="d-flex justify-content-end">
          <div>
            <Button text="Logout" className="px-3" onClick={this.logout} />
          </div>
        </div>

        <div className="container">
          <h3 className="text-center text-bolder mb-3">
            {this.state?.current?.title}
          </h3>
          {this.state?.current && (
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5">
                <DashboardTable
                  currentAttributes={this.state.current?.attributes}
                />
              </div>

              <div className="col-lg-5">
                <Bar margin={margin} data={this.state.current?.attributes} />
              </div>
            </div>
          )}
        </div>

        <div className="w-75 m-auto pb-5">
          <RangeSlider
            handleChange={this.handleRangeChange}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
