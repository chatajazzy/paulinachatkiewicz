import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default Logo;
