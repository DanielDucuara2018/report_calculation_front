import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Moment from "moment";
import { CryptoCurrencyLogos } from "../../../data/CryptoCurrencyLogos";
import "./Rightside.css";

class Rightside extends Component {
  render() {
    const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a";
    const currencies = this.props.currencies
      .sort((a, b) => a.price * a.quantity - b.price * b.quantity)
      .reverse();
    const options = {
      chart: {
        type: "pie",
      },
      labels: currencies.map((currency) => {
        return currency.symbol;
      }),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "right",
            },
          },
        },
      ],
    };
    return (
      <div className="right-side">
        <div className="best-performance">
          <div className="main-subtitle">Best Performance</div>
          {currencies.slice(0, 3).map((item, index) => {
            return (
              <div className="best-performance-item" key={index}>
                <img
                  src={CryptoCurrencyLogos[item.symbol]}
                  alt="cryptocurrency"
                />
                <div className="best-performance-details">
                  <div className="name">{item.symbol}</div>
                  <div className="value">
                    {(item.quantity * item.price).toFixed(2)}
                  </div>
                  <div className="date">
                    {Moment(item.update_date).format(dateTimeFormat)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="portafolio-distribution">
          <div className="main-subtitle">Portafolio Distribution</div>
          <div className="portafolio-distribution-container">
            <ReactApexChart
              options={options}
              series={currencies.map((currency) => {
                return currency.price * currency.quantity;
              })}
              type="pie"
              width={315}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Rightside;
