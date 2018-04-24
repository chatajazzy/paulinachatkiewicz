import React from 'react';
import { NavLink } from 'react-router-dom';
import CloseOnEscape from 'react-close-on-escape';

import { navLinks } from '../data/nav-links';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.navLinks = navLinks;
  }
  render() {
    return (
      <nav className={this.props.mobileMenuVisible ? 'nav nav--open' : 'nav'}>
        <CloseOnEscape onEscape={this.props.handleMenu}>
          <ul className="nav__list" onClick={this.props.handleMenu}>
            {this.navLinks.map(function(navLink, index) {
              return (
                <li className="nav__list-item" key={`navLink${index}`}>
                  <NavLink
                    exact
                    to={navLink.link}
                    className="nav__list-link"
                    activeClassName="active"
                  >
                    <span className="nav__item-name">{navLink.name}</span>
                    <span className="nav__item-label">{navLink.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </CloseOnEscape>
      </nav>
    );
  }
}

export default Nav;
