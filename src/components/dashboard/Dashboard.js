import React, { Component } from "react";
import Card from "./card/Card";
import { FiRefreshCw } from "react-icons/fi";
import Portafolio from "./portafolio/Portafolio";
import Rightside from "./rightside/Rightside";
import { cardsData } from "../../data/CardsData";
import { connect } from "react-redux";
import { clearState } from "../../actions/appActions";
import axios from "axios";
import Api from "../../Api";
import "./Dashboard.css";

const endpoints = [
  "total_euros",
  "total_crypto_euros",
  "profit_euros",
  "invested_euros",
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: Array(4).fill(0),
      currencies: [],
      refreshingPage: false,
    };
    this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {
    this.setState({ refreshingPage: true });
    const loggedInUserToken = this.props.token;
    axios
      .all(
        endpoints.map((endpoint) =>
          Api.get(`calculate/${endpoint}`, {
            headers: {
              Authorization: "Bearer " + loggedInUserToken,
            },
          })
        )
      )
      .then(
        axios.spread(
          (
            { data: total_euros },
            { data: total_crypto_euros },
            { data: profit_euros },
            { data: invested_euros }
          ) => {
            this.setState({
              total: [
                total_euros,
                total_crypto_euros,
                profit_euros,
                invested_euros,
              ],
            });
          }
        )
      )
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          console.log("logout");
          this.props.clearState();
        }
        this.setState({ refreshingPage: false });
      });

    Api.get("currencies", {
      headers: {
        Authorization: "Bearer " + loggedInUserToken,
      },
    })
      .then((res) => {
        this.setState({ currencies: res.data, refreshingPage: false });
      })
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          console.log("logout");
          this.props.clearState();
        }
        this.setState({ refreshingPage: false });
      });
  }

  refreshPage() {
    this.componentDidMount();
  }

  render() {
    const { total, refreshingPage } = this.state;
    console.log(refreshingPage);
    return (
      <>
        <div className="main-container">
          <div className="main-title">
            {" "}
            DashBoard{" "}
            <span className={refreshingPage ? "span-disabled" : "span-enabled"}>
              <FiRefreshCw onClick={this.refreshPage} />
            </span>
          </div>
          <div className="cards-container">
            {cardsData.map((item, index) => {
              return (
                <div className="card-item" key={index}>
                  <Card
                    title={item.title}
                    color={item.color}
                    barValue={item.barValue}
                    value={`€ ${total[index].toLocaleString()}`}
                    icon={item.icon}
                    series={item.series}
                  />
                </div>
              );
            })}
          </div>
          <div className="table-container">
            <div className="main-subtitle"> Portafolio </div>
            <Portafolio currencies={this.state.currencies} />
          </div>
        </div>
        <Rightside currencies={this.state.currencies} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.appRootReducer.token,
});

const mapDispatchToProps = {
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
