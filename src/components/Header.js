import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <header className="header">
          {/* TODO: consider moving to Logo component*/}
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
        </header>
        <Nav />
      </div>
    );
  }
}

export default Header;
