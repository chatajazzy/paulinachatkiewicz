import React from 'react';
import MobileMenuOpen from './MobileMenuOpen';
import MobileMenuClose from './MobileMenuClose';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
      navLinks: [
        { name: 'o mnie', link: 'about' },
        { name: 'portfolio', link: 'works' },
        { name: 'kontakt', link: 'contact' }
      ]
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
          {/* TODO: change mobile menu state after redirect*/}
          <ul className="nav__list">
            {this.state.navLinks.map(function(navLink, index) {
              return (
                <li className="nav__list-item" key={`navLink${index}`}>
                  <NavLink
                    exact
                    to={navLink.link}
                    className="nav__list-link"
                    activeClassName="active"
                  >
                    {navLink.name}
                  </NavLink>
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
