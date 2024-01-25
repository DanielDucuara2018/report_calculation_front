import React from "react";
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openToggleSidebar = this.openToggleSidebar.bind(this);
  }

  openToggleSidebar(e) {
    this.props.handleSidebarToggle();
  }

  render() {
    return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={this.openToggleSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
    );
  }
}

export default Header;