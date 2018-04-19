import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    console.log('dsd', document.querySelector('.nav'));
    document.body.classList.add('body--home');
  }
  componentWillUnmount() {
    document.body.classList.remove('body--home');
  }
  render() {
    return (
      <div className="main__container main__container--full-page">
        <section className="main__section main__section--full-page">
          <div className="home__hero-img" />
        </section>
        <section className="main__section main__section--hero">
          <div className="home__hero">
            <p className="home__hero-title">Paulina Chatkiewicz</p>
            <p className="home__hero-subtitle">Frontend developer</p>
            <NavLink
              exact
              to="/works"
              className="home__hero-cta"
              activeClassName="active"
            >
              Sprawdź
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
