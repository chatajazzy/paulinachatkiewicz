import React from 'react';
import PropTypes from 'prop-types';

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
            className="header__logo"
          />
          <div className="header__trigger-nav" onClick={this.props.handleMenu}>
            <span className="header__trigger-nav-bar" />
            <span className="header__trigger-nav-bar" />
          </div>
        </div>
        <Nav
          mobileMenuVisible={this.props.mobileMenuVisible}
          handleMenu={this.props.handleMenu}
        />
      </header>
    );
  }
}

Header.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func
};

export default Header;
