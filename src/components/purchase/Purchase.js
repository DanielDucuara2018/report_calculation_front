import React, { Component } from 'react';
import DefaultTable from './table/Table';
import "./Purchase.css"
import Api from '../../Api';
import BarChart from './barchart/BarChart';
import LineChart from './linechart/LineChart';

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {purchases: []}
  }

  componentDidMount() {
    Api.get("purchases/?user_id=user_1ff801bf1d12d35c549771a549f356bfa71")
    .then(res => {
      const purchases = res.data;
      this.setState({ purchases });
    })
  }


  render() {
    return (
      <div className="main-container">
        <div className="cards-container">
          <div className="card-item">
            <BarChart purchases={this.state.purchases}/>
          </div>
          <div className="card-item">
            <LineChart purchases={this.state.purchases}/>
          </div>
        </div>
        <div className="table-container">
          <div className="main-subtitle"> Purchases </div>
          <DefaultTable purchases={this.state.purchases}/>
        </div>
      </div>
    );
  }
}

export default Purchase;