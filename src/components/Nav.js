import React from 'react';
import MobileMenuOpen from './MobileMenuOpen';
import MobileMenuClose from './MobileMenuClose';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
      navLinks: ['o mnie', 'portfolio', 'kontakt']
    };
  }
  openMobileMenu = () => {
    this.setState({
      showMobileMenu: true
    });
  };
  closeMobileMenu = () => {
    this.setState({
      showMobileMenu: false
    });
  };
  render() {
    return (
      <div className="nav__container">
        <span className="nav__open-icon">
          <MobileMenuOpen
            openIconColor="#373737"
            openMobileMenu={this.openMobileMenu}
          />
        </span>
        <nav className={this.state.showMobileMenu ? 'nav nav--open' : 'nav'}>
          <span className="nav__close-icon">
            <MobileMenuClose
              closeIconColor="#ffffff"
              closeMobileMenu={this.closeMobileMenu}
            />
          </span>
          {/* TODO: CHANGE TO ROUTER LINKS */}
          <ul className="nav__list">
            {this.state.navLinks.map(function(navLink, index) {
              return (
                <li className="nav__list-item" key={`navLink${index}`}>
                  <a className="nav__list-link" href="#">
                    {navLink}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
