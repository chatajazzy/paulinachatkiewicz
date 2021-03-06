import React from 'react';
import { NavLink } from 'react-router-dom';
import CloseOnEscape from 'react-close-on-escape';
import PropTypes from 'prop-types';

import { navLinks } from '../data/nav-links';

const Nav = props => {
  return (
    <nav className={props.mobileMenuVisible ? 'nav nav--open' : 'nav'}>
      <CloseOnEscape onEscape={props.handleMenu}>
        <ul className="nav__list" onClick={props.handleMenu}>
          {navLinks.map((navLink, index) => {
            return (
              <li className="nav__list-item" key={`navLink${index}`}>
                <NavLink
                  exact
                  to={`/${navLink.link}`}
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
};

Nav.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func
};

export default Nav;
