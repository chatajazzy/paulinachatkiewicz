import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  render() {
    return (
      <h1 onClick={this.props.mobileMenuVisible ? this.props.handleMenu : null}>
        <NavLink exact to="/" className="header__logo" activeClassName="active">
          P/CH
        </NavLink>
      </h1>
    );
  }
}

Logo.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func
};

export default Logo;
