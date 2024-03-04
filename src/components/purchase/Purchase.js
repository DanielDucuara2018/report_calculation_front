import React, { Component } from 'react';
import DefaultTable from './table/Table';
import Api from '../../Api';
import BarChart from './barchart/BarChart';
import LineChart from './linechart/LineChart';
import { FiRefreshCw } from "react-icons/fi";
import Rightside from './rightside/Rightside';
import Moment from "moment";
import "./Purchase.css"

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {purchases: []}
    this.refreshPage = this.refreshPage.bind(this)
  }

  componentDidMount() {
    Api.get("purchases/?user_id=user_1ff801bf1d12d35c549771a549f356bfa71")
    .then(res => {
      const purchases = res.data;
      this.setState({ purchases });
    })
  }

  refreshPage() {
    this.componentDidMount();
  }

  render() {
    const purchases = this.state.purchases.sort((a, b) => Moment(a.date.replace("\[UTC\]","")) - Moment(b.date.replace("\[UTC\]",""))).reverse()
    return (
      <>
        <div className="main-container">
          <div className="main-title"> Purchases <span><FiRefreshCw onClick={this.refreshPage}/></span></div>
          <div className="charts-container">
            <div className="chart-item">
              <BarChart purchases={purchases}/>
            </div>
            <div className="chart-item">
              <LineChart purchases={purchases}/>
            </div>
          </div>
          <div className="table-container">
            <DefaultTable purchases={purchases}/>
          </div>
        </div>
        <Rightside purchases={purchases}></Rightside>
      </>
    );
  }
}

export default Purchase;