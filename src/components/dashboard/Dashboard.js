import React, { Component } from "react";
import Card from "./card/Card";
import { FiRefreshCw } from "react-icons/fi";
import Portafolio from "./portafolio/Portafolio";
import Rightside from "./rightside/Rightside";
import { cardsData } from "../../data/CardsData";
import axios from "axios";
import Api from "../../Api";
import "./Dashboard.css"

const endpoints = [
  "total_euros",
  "total_crypto_euros",
  "profit_euros",
  "invested_euros"
]

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {total: Array(4).fill(0), currencies: []}
    this.refreshPage = this.refreshPage.bind(this)
  }

  componentDidMount() {
    axios.all(endpoints.map((endpoint) => Api.get(`calculate/${endpoint}?user_id=user_1ff801bf1d12d35c549771a549f356bfa71`))).then(
      axios.spread(({ data: total_euros }, { data: total_crypto_euros }, { data: profit_euros }, { data: invested_euros }) => {
        this.setState({ total: [total_euros, total_crypto_euros, profit_euros, invested_euros] })
      })
    );

    Api.get("currencies/?user_id=user_1ff801bf1d12d35c549771a549f356bfa71")
    .then(res => {
      const currencies = res.data;
      this.setState({ currencies });
    })
  }

  refreshPage() {
    this.componentDidMount();
  }

  render() {
    const total = this.state.total
    return (
      <>
        <div className="main-container">
          <div className="main-title"> DashBoard <span><FiRefreshCw onClick={this.refreshPage}/></span></div>
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
              )
            })}
          </div>
          <div className="table-container">
            <div className="main-subtitle"> Portafolio </div>
            <Portafolio currencies={this.state.currencies}/>
          </div>
        </div>
        <Rightside currencies={this.state.currencies}/>
      </>
    );
  }
}

export default Dashboard;