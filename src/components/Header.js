import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <header className="header">
          {/* TODO: consider moving to Logo component*/}
          <h1>
            <a className="header__logo" href="#">
              P/CH
            </a>
          </h1>
        </header>
        <Nav />
      </div>
    );
  }
}
export default Header;
