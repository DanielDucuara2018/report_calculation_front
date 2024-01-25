import React from "react";
import "./Main.css"
import Card from "../card/Card";
import { cardsData } from "../../data/CardsData";

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-title "> DashBoard </div>
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
      </div>
    );
  }
}

export default Main;