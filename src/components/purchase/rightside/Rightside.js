import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Moment from "moment";
import { CryptoCurrencyLogos } from "../../../data/CryptoCurrencyLogos";
import "./Rightside.css"

class Rightside extends Component {
  get_data_chart(purchases){
    return purchases.reduce((purchases, {symbol, quantity, price}) => {
      if (!purchases[symbol]) purchases[symbol] = 0;
      purchases[symbol] += quantity*price;
      return purchases;
    }, {});
  }

  render() {
    const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a"
    const purchases = this.props.purchases
    const data = this.get_data_chart(purchases)
    const options = {
      chart: {
        type: 'pie',
      },
      labels: Object.keys(data),
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 350
          },
          legend: {
            position: 'right'
          }
        }
      }]
    }
    return (
      <div className="right-side">
        <div className="last-purchases">
          <div className="main-subtitle">Last Purchases</div>
          {purchases.slice(0, 3).map((item, index) => {
            return (
              <div className="last-purchases-item" key={index}>
                <img src={CryptoCurrencyLogos[item.symbol]} alt="cryptocurrency" />
                <div className="last-purchases-details">
                  <div className="name">{item.symbol}</div> 
                  <div className="value">{(item.quantity*item.price).toFixed(2)}</div>
                  <div className="date">{Moment(item.date).format(dateTimeFormat)}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="purchase-distribution">
          <div className="main-subtitle">Purchase Distribution</div>
          <div className="purchase-distribution-container">
            <ReactApexChart 
              options={options} 
              series={Object.values(data)} 
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