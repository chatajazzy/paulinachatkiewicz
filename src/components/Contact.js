import React from 'react';

import ContactForm from './ContactForm';
import Grid from './Grid';

class Contact extends React.Component {
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
              <li>
                <p className="main__content-paragraph">
                  Jeśli chciałbyś nawiązać współpracę skontaktuj się ze mną
                  pisząc na adres kontakt@paulinachatkiewicz.pl
                </p>
              </li>
              <li>
                <p className="main__content-paragraph">
                  Możesz też skorzystać z podanego formularza. :)
                </p>
              </li>
            </ul>
            <ContactForm />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
