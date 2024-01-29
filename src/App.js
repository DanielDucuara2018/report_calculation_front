import React from "react";
import "./App.css"
// import axios from "axios";
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import Rightside from "./components/rightside/Rightside";

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <div className="grid-container">
          <Sidebar/>
          <Main/>
          <Rightside/>
        </div>
      </div>
    );
  }
}

export default App