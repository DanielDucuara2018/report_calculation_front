import React, { Component } from "react";
import { sidebarData } from "../../data/SiderbarData";
import { TbReportAnalytics } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { connect } from "react-redux";
import { clearState } from "../../actions/appActions";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMenuItem: -1, expandedSideBar: false };
    this.handleLogout = this.handleLogout.bind(this);
  }

  selectMenuItem(index) {
    this.setState({ selectedMenuItem: index });
  }

  setExpandedSideBar() {
    this.setState({ expandedSideBar: !this.state.expandedSideBar });
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  handleLogout() {
    console.log("logout");
    this.props.clearState();
  }

  render() {
    const selectedMenuItem = this.state.selectedMenuItem;
    const expandedSideBar = this.state.expandedSideBar;

    const sidebarVariants = {
      true: {
        left: "0",
      },
      false: {
        left: "-60%",
      },
    };

    return (
      <>
        <div
          className="bars"
          style={expandedSideBar ? { left: "60%" } : { left: "5%" }}
          onClick={() => this.setExpandedSideBar()}
        >
          <FaBars />
        </div>
        <motion.div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expandedSideBar}` : ""}
        >
          <div className="logo">
            <TbReportAnalytics className="icon-header" /> R.C.
          </div>

          <div className="menu">
            {sidebarData.map((item, index) => {
              return (
                <NavLink
                  className={
                    selectedMenuItem === index
                      ? "menu-item active"
                      : "menu-item"
                  }
                  key={index}
                  onClick={() => this.selectMenuItem(index)}
                  to={item.route}
                >
                  <item.icon className="icon" /> <span>{item.heading}</span>
                </NavLink>
              );
            })}

            <div className="menu-item" onClick={this.handleLogout}>
              <TbLogout2 className="icon" /> <span>Logout</span>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.appRootReducer.token,
});

const mapDispatchToProps = {
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
