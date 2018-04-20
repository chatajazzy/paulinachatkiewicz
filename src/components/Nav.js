import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.navLinks = [
      { name: 'o mnie', link: 'about' },
      { name: 'portfolio', link: 'works' },
      { name: 'kontakt', link: 'contact' }
    ];
  }
  componentWillUpdate() {
    console.log('update nav');
    // this.props.handleMenu;
  }
  render() {
    return (
      <nav className={this.props.mobileMenuVisible ? 'nav nav--open' : 'nav'}>
        <ul className="nav__list">
          {this.navLinks.map(function(navLink, index) {
            return (
              <li className="nav__list-item" key={`navLink${index}`}>
                <NavLink
                  exact
                  to={navLink.link}
                  className="nav__list-link"
                  activeClassName="active"
                >
                  <span className="nav__item-name"> {navLink.name}</span>
                  <span className="nav__item-label">
                    Explore all artists' portfolios
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
