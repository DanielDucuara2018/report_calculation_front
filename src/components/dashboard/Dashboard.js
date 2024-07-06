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
    const loggedInUserToken = localStorage.getItem("token");
    axios.all(endpoints.map((endpoint) => Api.get(`calculate/${endpoint}`,
      {
        headers: {
          "Authorization": "Bearer " + loggedInUserToken
        }
      }
    ))).then(
      axios.spread(({ data: total_euros }, { data: total_crypto_euros }, { data: profit_euros }, { data: invested_euros }) => {
        this.setState({ total: [total_euros, total_crypto_euros, profit_euros, invested_euros] })
      })
    ).catch(function (error) {
      console.log(error.response.status);
      if(error.response.status === 401){
        console.log("logout")
        localStorage.clear();
        window.location.reload(false);      }
    });

    Api.get("currencies",
      {
        headers: {
          "Authorization": "Bearer " + loggedInUserToken
        }
      }
    ).then(res => {
      const currencies = res.data;
      this.setState({ currencies });
    }).catch(function (error) {
      console.log(error.response.status);
      if(error.response.status === 401){
        console.log("logout")
        localStorage.clear();
        window.location.reload(false);      }    
    });
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