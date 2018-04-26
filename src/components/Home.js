import React from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';

class Home extends React.Component {
  componentDidMount() {
    document
      .querySelector('.page-container')
      .classList.add('page-container--full-bg');

    const targetObject1 = document.querySelector('.home-intro__container');
    const targetObject2 = document.querySelector('.home-intro__cta');

    const stagingTimeline = new TimelineMax();

    // page preloader
    if (!this.props.wasPreloaderShowed) {
      setTimeout(() => {
        document.body.classList.add('page-loaded');

        this.props.handlePreloader();

        stagingTimeline
          .from(targetObject1, 1.5, { y: 60, opacity: 0 }, 0.75)
          .from(targetObject2, 1, { y: 60, opacity: 0 }, '-=0.25');

        stagingTimeline.play();
      }, 2000);
    } else {
      stagingTimeline
        .from(targetObject1, 1.5, { y: 60, opacity: 0 }, 0.75)
        .from(targetObject2, 1, { y: 60, opacity: 0 }, '-=0.25');

      stagingTimeline.play();
    }
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
          <Link to="/works" className="home-intro__cta">
            <span className="home-intro__cta-info">portfolio</span>
            &darr;
          </Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handlePreloader: PropTypes.func,
  wasPreloaderShowed: PropTypes.bool
};

export default Home;
