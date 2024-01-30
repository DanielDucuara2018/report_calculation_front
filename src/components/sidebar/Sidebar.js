import React, { Component } from "react";
import { sidebarData } from "../../data/SiderbarData";
import { BsCart3 } from "react-icons/bs"
import { FaBars } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.state = {selectedMenuItem: -1, expandedSideBar: false};
  }

  selectMenuItem(index) {
    this.setState({selectedMenuItem: index});
  }

  setExpandedSideBar(){
    this.setState({expandedSideBar: !this.state.expandedSideBar});
  }

  render() {
    const selectedMenuItem = this.state.selectedMenuItem
    const expandedSideBar = this.state.expandedSideBar

    const sidebarVariants = {
      true: {
        left : "0"
      },
      false:{
        left : "-60%"
      }
    }

    return (
      <>
        <div className="bars" style={expandedSideBar?{left: "60%"}:{left: "5%"}} onClick={()=>this.setExpandedSideBar()}><FaBars/></div>
        <motion.div className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expandedSideBar}`:""}
        >
          <div className="logo">
              <BsCart3 className="icon-header"/> Shop
          </div>

          <div className="menu">
            {sidebarData.map((item, index) => {
              return(
                <div className={selectedMenuItem===index ?  "menu-item active": "menu-item"} key={index} onClick={() => this.selectMenuItem(index)}>
                  <NavLink to={item.route}><item.icon className="icon"/> <span>{item.heading}</span> </NavLink>
                </div>
              )
            })}

            <div className="menu-item">
              <LiaSignOutAltSolid className="icon"/> 
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

export default Sidebar;