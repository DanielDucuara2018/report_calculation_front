import React, { Component } from 'react';
import DefaultTable from './table/Table';
import "./Purchase.css"

class Purchase extends Component {
  render() {
    return (
      <div className="table-container">
        <div className="main-subtitle"> Purchases </div>
        <DefaultTable/>
      </div>
    );
  }
}

export default Purchase;