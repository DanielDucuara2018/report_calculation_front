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
    this.state = {purchases: [], refreshingPage: false}
    this.refreshPage = this.refreshPage.bind(this)
  }

  handleLogout(){
    console.log("logout")
    localStorage.clear();
    window.location.reload(false);
  };

  componentDidMount() {
    this.setState({ refreshingPage: true });
    const loggedInUserToken = localStorage.getItem("token");
    Api.get("purchases",
      {
        headers: {
          "Authorization": "Bearer " + loggedInUserToken
        }
      }
    ).then(res => {
      this.setState({ purchases: res.data, refreshingPage: false });
    }).catch(function (error) {
      console.log(error.response.status);
      if(error.response.status === 401){
        console.log("logout")
        localStorage.clear();
        window.location.reload(false);      
      }
      this.setState({ refreshingPage: false });
    });
  }

  refreshPage() {
    this.componentDidMount();
  }

  render() {
    const { purchases, refreshingPage } = this.state
    const sortedPurchases = purchases.sort((a, b) => Moment(a.date.replace("[UTC]","")) - Moment(b.date.replace("[UTC]",""))).reverse()
    console.log(refreshingPage)
    return (
      <>
        <div className="main-container">
          <div className="main-title"> Purchases <span className={refreshingPage ? 'span-disabled' : 'span-enabled'} ><FiRefreshCw onClick={this.refreshPage}/></span></div>
          <div className="charts-container">
            <div className="chart-item">
              <BarChart purchases={sortedPurchases}/>
            </div>
            <div className="chart-item">
              <LineChart purchases={sortedPurchases}/>
            </div>
          </div>
          <div className="table-container">
            <DefaultTable purchases={sortedPurchases}/>
          </div>
        </div>
        <Rightside purchases={sortedPurchases}></Rightside>
      </>
    );
  }
}

export default Purchase;