import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    document
      .querySelector('.page-container')
      .classList.add('page-container--full-bg');
  }
  componentWillUnmount() {
    document
      .querySelector('.page-container')
      .classList.remove('page-container--full-bg');
  }
  render() {
    return (
      <div className="home-intro">
        <div className="home-intro__container">
          <h2 className="home-intro__title">Paulina Chatkiewicz</h2>
          <p className="home-intro__subtitle">Front-end developer</p>
        </div>
        <NavLink
          exact
          to="/works"
          className="home-intro__cta"
          activeClassName="active"
        >
          I
        </NavLink>
      </div>
    );
  }
}

export default Home;
