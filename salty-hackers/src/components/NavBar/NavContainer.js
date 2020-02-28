import React, { Component } from 'react'
import Navbar from "./NavBar";
import GlobalStyle from '../Styles/Global';

class NavContainer extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    )
  }
}

export default NavContainer