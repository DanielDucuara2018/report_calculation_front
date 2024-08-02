import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Purchase from "./components/purchase/Purchase";
import { connect } from "react-redux";
import { clearState } from "./actions/appActions";
import Login from "./Login";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app-container">
        <div className="grid-container">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    ),
  },
  {
    path: "/purchases",
    element: (
      <div className="app-container">
        <div className="grid-container">
          <Sidebar />
          <Purchase />
        </div>
      </div>
    ),
  },
]);

class App extends React.Component {
  render() {
    return (
      <>{this.props.token ? <RouterProvider router={router} /> : <Login />}</>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.appRootReducer.token,
});

const mapDispatchToProps = {
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
