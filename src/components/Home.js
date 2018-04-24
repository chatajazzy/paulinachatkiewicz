import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from './Preloader';

class Home extends React.Component {
  componentDidMount() {
    document
      .querySelector('.page-container')
      .classList.add('page-container--full-bg');

    // page preloader
    setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 3000);
  }
  componentWillUnmount() {
    document
      .querySelector('.page-container')
      .classList.remove('page-container--full-bg');
  }
  render() {
    return (
      <div>
        <Preloader />
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
      </div>
    );
  }
}

export default Home;
