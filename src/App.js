import React from "react";
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import Rightside from "./components/rightside/Rightside";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element:       
    <div className="app-container">
      <div className="grid-container">
        <Sidebar/>
        <Main/>
        <Rightside/>
      </div>
    </div>,
  },
  {
    path: "/purchases",
    element:     
    <div className="app-container">
      <div className="grid-container">
        <Sidebar/>
        <div>Purchases</div>
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