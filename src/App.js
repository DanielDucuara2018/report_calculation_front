import React from "react";
import Dashboard from "./components/dashboard/Dashboard"
import Sidebar from "./components/sidebar/Sidebar"
import Purchase from "./components/purchase/Purchase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  render() {
    return (
     <RouterProvider router={router} />
    );
  }
}

export default App