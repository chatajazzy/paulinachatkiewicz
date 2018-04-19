import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileMenuVisible: false
    };
  }
  handleMenu = () => {
    if (this.state.mobileMenuVisible === false) {
      this.setState({
        mobileMenuVisible: true
      });
    } else {
      this.setState({
        mobileMenuVisible: false
      });
    }
    this.refs.nav.handleMenu(this.state.mobileMenuVisible);
  };
  render() {
    return (
      <header
        className={
          this.state.mobileMenuVisible ? 'header header--open-nav' : 'header'
        }
      >
        {/* TODO: consider moving to Logo component*/}
        <div className="header__navbar">
          <h1>
            <NavLink
              exact
              to="/"
              className="header__logo"
              activeClassName="active"
            >
              P/CH
            </NavLink>
          </h1>
          <div className="header__trigger-nav" onClick={this.handleMenu}>
            x
          </div>
        </div>
        <Nav ref="nav" mobileMenuVisible={this.state.mobileMenuVisible} />
      </header>
    );
  }
}

export default Header;
