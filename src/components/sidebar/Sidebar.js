import React from "react";
import "./Sidebar.css"
import { sidebarData } from "../../data/SiderbarData";
import { BsCart3 } from 'react-icons/bs'
import { LiaSignOutAltSolid } from "react-icons/lia";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedMenuItem: -1};
    }

    selectMenuItem(index) {
      this.setState({selectedMenuItem: index});
    }

    render() {
        const selectedMenuItem = this.state.selectedMenuItem
        return (
          <aside id="sidebar">
            <div className="logo">
                <BsCart3 className="icon-header"/> Shop
            </div>
  
            <div className="menu">
              {sidebarData.map((item, index) => {
                return(
                  <div className={selectedMenuItem===index ?  "menu-item active": "menu-item"} key={index} onClick={() => this.selectMenuItem(index)}>
                    <item.icon className="icon"/> {item.heading}
                  </div>
                )
              })}

              <div className="menu-item">
                <LiaSignOutAltSolid className="icon"/> 
              </div>
            </div>
          </aside>
        );
    }
}

export default Sidebar;