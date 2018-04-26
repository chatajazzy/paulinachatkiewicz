import React from 'react';
import { TimelineMax } from 'gsap';

import ContactForm from './ContactForm';
import Grid from './Grid';

import { contactParagraphs } from '../data/contact-paragraphs';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.contactParagraphs = contactParagraphs;
  }
  componentDidMount() {
    //TODO: refactor needed
    const targetObject1 = document.querySelector('.main__content-title');
    const targetObject2 = document.querySelector('.main__paragraph-list');
    const targetObject3 = document.querySelector('.contact-form');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { y: 30, opacity: 0 })
      .from(targetObject2, 1, { y: 60, opacity: 0 })
      .from(targetObject3, 1, { y: -30, opacity: 0 }, '-=0.5')

    stagingTimeline.play();
  }
  render() {
    return (
      <div className="main__wrapper">
        <Grid />
        <section className="main__content">
          <header className="main__content-header">
            <h2 className="main__content-title">contact</h2>
          </header>
          <div className="main__inner-wrapper">
            <ul className="main__paragraph-list">
              {this.contactParagraphs.map(function(item, index) {
                return (
                  <li key={`contactParagraphs${index}`}>
                    <p className="main__content-paragraph">{item.paragraph}</p>
                  </li>
                );
              })}
            </ul>
            <ContactForm />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
