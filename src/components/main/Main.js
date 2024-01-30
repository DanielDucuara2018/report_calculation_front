import React, { Component } from "react";
import Card from "../card/Card";
import DefaultTable from "../table/Table";
import { cardsData } from "../../data/CardsData";
import "./Main.css"

class Main extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="main-title"> DashBoard </div>
          <div className="cards-container">
            {cardsData.map((item, index) => {
              return(
                <div className="card-item" key={index}>
                  <Card 
                  title={item.title} 
                  color={item.color}
                  barValue={item.barValue}
                  value={item.value}
                  icon={item.icon}
                  series={item.series}
                  />
                </div>
              )
            })}
          </div>
          <div className="table-container">
            <div className="main-subtitle"> Portafolio </div>
            <DefaultTable/>
          </div>
        </div>
      </>
    );
  }
}

export default Main;