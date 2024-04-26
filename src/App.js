import React from "react";
import Dashboard from "./components/dashboard/Dashboard"
import Sidebar from "./components/sidebar/Sidebar"
import Purchase from "./components/purchase/Purchase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import "./App.css"


const router = createBrowserRouter([
  {
    path: "/",
    element:       
    <div className="app-container">
      <div className="grid-container">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>,
  },
  {
    path: "/purchases",
    element:     
    <div className="app-container">
      <div className="grid-container">
        <Sidebar/>
        <Purchase/>
      </div>
    </div>,
  },
]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {token: "", user: {}}
    this.setToken = this.setToken.bind(this)
  }

  setToken(token){
    this.setState({token})
  }

  componentDidMount() {
    const loggedInUserToken = localStorage.getItem("token");
    if (loggedInUserToken) {
      this.setToken(loggedInUserToken);
    }
  } // From a security point of view, storing the access token in a persistent location (like localStorage, window,..) is bad practice 
  
  render() {
    return (
      <>
      {this.state.token? <RouterProvider router={router} />:<Login setToken={this.setToken} />}
     </>
    );
  }
}

export default App