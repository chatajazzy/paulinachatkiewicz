import React from 'react';

import Nav from './Nav';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <header
        className={
          this.props.mobileMenuVisible ? 'header header--open-nav' : 'header'
        }
      >
        <div className="header__navbar">
          <Logo
            handleMenu={this.props.handleMenu}
            mobileMenuVisible={this.props.mobileMenuVisible}
          />
          <div className="header__trigger-nav" onClick={this.props.handleMenu}>
            <span className="header__trigger-nav-bar" />
            <span className="header__trigger-nav-bar" />
          </div>
        </div>
        <Nav
          ref="nav"
          mobileMenuVisible={this.props.mobileMenuVisible}
          handleMenu={this.props.handleMenu}
        />
      </header>
    );
  }
}

export default Header;
