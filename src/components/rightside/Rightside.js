import React, { Component } from "react";
import Chart from "react-apexcharts";
import Update from "../update/Update";
import { UpdatesData } from "../../data/UpdatesData";
import { reviewsData } from "../../data/ReviewData";
import "./Rightside.css"

class Rightside extends Component {
  render() {
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
          <div className="main-subtitle">Customer Reviews</div>
          <div className="review-container">
            <Chart series={reviewsData.series} options={reviewsData.options} type="area"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Rightside;