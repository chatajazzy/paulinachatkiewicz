import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <h1>
      <NavLink exact to="/" className="header__logo" activeClassName="active">
        P/CH
      </NavLink>
    </h1>
  );
};
export default Logo;
