import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { particlesConfig } from '../data/particles-config';

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
      <div>
        <Particles
          className="home-particles"
          params={particlesConfig}
          style={{
            width: '100%',
            background: '#ffffff',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '1'
          }}
        />
        <div className="home-intro">
          <div className="home-intro__container">
            <h2 className="home-intro__title">Paulina Chatkiewicz</h2>
            <p className="home-intro__subtitle">Front-end developer</p>
          </div>
          <Link to="/works" className="home-intro__cta">
            <span className="home-intro__cta-info">portfolio</span>
            &darr;
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
