import React from "react";
import "./App.css"
// import axios from "axios";
import Header from "./components/Header"
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <div className="grid-container">
          <Sidebar/>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App