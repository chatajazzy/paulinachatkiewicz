import React from 'react';
import { TimelineMax } from 'gsap';

import Grid from './Grid';
import Paulina from '../img/paulina.jpg';

import { aboutParagraphs } from '../data/about-paragraphs';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutParagraphs = aboutParagraphs;
  }
  componentDidMount() {
    //TODO: refactor needed
    const targetObject1 = document.querySelector('.main__content-title');
    const targetObject2 = document.querySelector('.main__paragraph-list');
    const targetObject3 = document.querySelector('.about-photo');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { y: 30, opacity: 0 })
      .from(targetObject2, 1, { y: 60, opacity: 0 })
      .from(targetObject3, 1, { y: -30, opacity: 0 }, '-=0.5');

    stagingTimeline.play();
  }
  render() {
    return (
      <div className="main__wrapper">
        <Grid />
        <section className="main__content">
          <header className="main__content-header">
            <h2 className="main__content-title">o mnie</h2>
          </header>
          <div className="main__inner-wrapper main__inner-wrapper--about">
            <ul className="main__paragraph-list">
              {this.aboutParagraphs.map((item, index) => {
                if (index !== this.aboutParagraphs.length - 1) {
                  return (
                    <li key={`aboutParagraphs${index}`}>
                      <p className="main__content-paragraph">
                        {item.paragraph}
                      </p>
                    </li>
                  );
                } else {
                  return (
                    <li key={`aboutParagraphs${index}`}>
                      <p className="main__content-paragraph">
                        {item.paragraph}
                      </p>
                      <figure className="about-photo">
                        <img
                          src={Paulina}
                          alt="Paulina Chatkiewicz"
                          className="about-photo__img"
                        />
                      </figure>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
