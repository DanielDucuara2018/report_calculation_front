import React from "react";
import "./App.css"
// import axios from "axios";
import Header from "./components/Header"
import Home from "./components/Home"
import Sidebar from "./components/sidebar/Sidebar"

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
      <div className="main-container">
        <div className="grid-container">
          <Sidebar toggleSidebar={toggleSidebar} handleSidebarToggle={this.handleToggleSidebar}/>
          {/* <Header handleSidebarToggle={this.handleToggleSidebar}/>
          <Home/> */}
        </div>
      </div>
    );
  }
}

export default App