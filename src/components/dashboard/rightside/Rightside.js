import React, { Component } from "react";
import Chart from "react-apexcharts";
import Update from "./update/Update";
import { UpdatesData } from "../../../data/UpdatesData";
import { reviewsData } from "../../../data/ReviewData";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import "./Rightside.css"

class Rightside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: 'pie',
        },
        labels: [],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  render() {
    const currencies = this.props.currencies
    const options = {
      chart: {
        type: 'pie',
      },
      labels: currencies.map(currency => {return currency.symbol}),
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
        <div className="updates">
          <div className="main-subtitle">Updates</div>
          {UpdatesData.map((item, index) => {
            return(
              <Update 
              image={item.img} 
              name={item.name}
              notification={item.notification}
              time={item.time}
              key={index}
              />
            )
          })}
          
        </div>
        <div className="reviews">
          <div className="main-subtitle">Portafolio Distribution</div>
          <div className="review-container">
            <ReactApexChart 
              options={options} 
              series={currencies.map(currency => {return currency.price*currency.quantity})} 
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