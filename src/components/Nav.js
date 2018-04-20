import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.navLinks = [
      { name: 'O mnie', link: 'about', title: 'Dowiedz się kim jestem' },
      { name: 'Portfolio', link: 'works', title: 'Zobacz moje prace' },
      { name: 'Kontakt', link: 'contact', title: 'Skontaktuj się ze mną' }
    ];
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
                  <span className="nav__item-label">{navLink.title}</span>
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
