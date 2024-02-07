import React, { Component } from "react";
import "./Update.css"

class Update extends Component {
  render() {
    const updateData = this.props
    return (
      <div className="update-item">
        <img src={updateData.image} alt="profile" />
        <div className="update-details">
          <div>
            <span>{updateData.name}</span> 
            <span> {updateData.notification}</span>
          </div>
          <span>{updateData.time}</span>
        </div>
      </div>
    );
  }
}

export default Update;