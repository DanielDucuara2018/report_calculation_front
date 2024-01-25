import React from "react";
import "./App.css"
// import axios from "axios";
import Header from "./Header"
import Home from "./Home"
import Sidebar from "./Sidebar"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    this.state = {toggleSidebar: false};
  }

  handleToggleSidebar() {
    console.log(this.state.toggleSidebar)
    this.setState({toggleSidebar: !this.state.toggleSidebar});
  }

  render() {
    const toggleSidebar = this.state.toggleSidebar;
    return (
      <div className="grid-container">
        <Header handleSidebarToggle={this.handleToggleSidebar}/>
        <Sidebar toggleSidebar={toggleSidebar} handleSidebarToggle={this.handleToggleSidebar}/>
        <Home/>
      </div>
    );
  }
}

export default App