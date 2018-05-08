import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = props => {
  return (
    <h1 onClick={props.mobileMenuVisible ? props.handleMenu : null}>
      <NavLink exact to="/" className="header__logo">
        P/CH
      </NavLink>
    </h1>
  );
};

Logo.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func
};

export default Logo;
