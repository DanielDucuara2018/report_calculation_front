import React from "react";
import "./Card.css"
import { LayoutGroup } from "framer-motion"


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"expanded": false}
  }

  render() {
    const expanded = this.state.expanded
    return (
      <LayoutGroup> {expanded? <ExpandedCard/>:<CompactedCard params={this.props} />} </LayoutGroup>
    );
  }
}

class ExpandedCard extends React.Component {
  render() {
    return (
      <div className="expanded-card">Expanded Card</div>
    );
  }
}

class CompactedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"expanded": false}
  }
  
  render() {
    return (
      <div className="compated-card">
        <div className="radial-bar">chart</div>
        <div className="card-details">
          <this.props.params.icon className="icon"/> 
          {this.props.params.title}
          {this.props.params.value}
        </div>
      </div>
    );
  }
}

export default Card;