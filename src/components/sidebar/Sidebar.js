import React from "react";
import "./Sidebar.css"
import { SidebarData } from "../../data/SiderbarData";
import { BsCart3 } from 'react-icons/bs'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedMenuItem: -1};
    }

    selectMenuItem(index) {
      console.log(index)
      this.setState({selectedMenuItem: index});
    }

    render() {
        const selectMenuItem = this.state.selectedMenuItem
        return (
            <aside id="sidebar">
              <div className="logo">
                  <BsCart3 className="icon-header"/> SHOP
              </div>
    
              <div className="menu">
                {SidebarData.map((item, index) => {
                  return(
                    <div className={selectMenuItem===index ?  "menu-item active": "menu-item"} key={index} onClick={() => this.selectMenuItem(index)}>
                      <item.icon className="icon"/> {item.heading}
                    </div>
                  )
                })}
              </div>
        </aside>
        );
    }
}

export default Sidebar;