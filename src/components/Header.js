import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

import Nav from './Nav';
import Logo from './Logo';

class Header extends React.Component {
  componentDidMount() {
    const targetObject1 = document.querySelector('.header__logo');
    const targetObject2 = document.querySelector('.header__trigger-nav');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { opacity: 0 })
      .from(targetObject2, 1, { opacity: 0 }, '-=0.5');

    stagingTimeline.play();
  }
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
          ref="nav"
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
