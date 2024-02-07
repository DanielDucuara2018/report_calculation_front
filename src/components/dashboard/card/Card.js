import React, { Component } from "react";
import Chart from "react-apexcharts";
import { MdOutlineClose } from "react-icons/md";
import { motion, LayoutGroup } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import { chartData } from "../../../data/ChartData";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css"


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {"expanded": false}
    this.setExpanded = this.setExpanded.bind(this)
  }

  setExpanded(){
    console.log(this.state.expanded)
    this.setState({"expanded": !this.state.expanded})
  }

  render() {
    const expanded = this.state.expanded
    return (
      <LayoutGroup> {expanded? <ExpandedCard params={this.props} setExpanded={this.setExpanded}/>:<CompactedCard params={this.props} setExpanded={this.setExpanded} />} </LayoutGroup>
    );
  }
}

class ExpandedCard extends Component {
  constructor(props) {
    super(props);
    this.outOfExpanded = this.outOfExpanded.bind(this)
  }

  outOfExpanded(){
    this.props.setExpanded()
  }

  render() {
    const cardData = this.props.params
    return (
      <motion.div className="expanded-card" style={{
        background: cardData.color.backGround,
        boxShadow: cardData.color.boxShadow
      }}
      layoutId="expandedCard"
      >
        <MdOutlineClose  style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }} onClick={this.outOfExpanded}/>
        <span>{cardData.title}</span>
        <div className="chart-container">
          <Chart series={cardData.series} type="area" options={chartData.options}/>
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }
}

class CompactedCard extends Component {
  constructor(props) {
    super(props);
    this.intoExpanded = this.intoExpanded.bind(this)
  }

  intoExpanded(){
    this.props.setExpanded()
  }


  render() {
    const cardData = this.props.params
    return (
      <motion.div className="compacted-card" style={{
        background: cardData.color.backGround,
        boxShadow: cardData.color.boxShadow
      }}
      onClick={() => this.intoExpanded()}
      layoutId="compactedCard"
      >
        <div className="card-radial-bar">
          <CircularProgressbar
          value={cardData.barValue}
          text={`${cardData.barValue}`}
          />
          <span>{cardData.title}</span>
        </div>
        <div className="card-details">
          <this.props.params.icon className="icon"/> 
          <span>{cardData.value}</span>
          <span>Last 24 hours</span>
        </div>
      </motion.div>
    );
  }
}

export default Card;