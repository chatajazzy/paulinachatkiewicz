import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <header className="header">
          <h1 className="header__logo">P/CH</h1>
        </header>
        <span className="nav__open-icon" />
        <nav className="nav">
        <span className="nav__close-icon" />
          {/* TODO: CHANGE TO ROUTER LINKS */}
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__list-link" href="#">
                about
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#">
                works
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
