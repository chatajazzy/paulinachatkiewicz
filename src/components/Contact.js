import React from 'react';
import ContactMap from './ContactMap';

class Contact extends React.Component {
  render() {
    return (
      <div className="main__container">
        <section className="main__section">
          <header className="main__title-container">
            <h2 className="main__title">Kontakt</h2>
          </header>
          <div>
            Jeśli chciałbyś nawiązać współpracę skontaktuj się ze mną
            korzystając z podanego formularza lub z poniższych danych:
            kontakt@paulinachatkiewicz.pl 695 931 615
          </div>
          <form className="contact-form">
            <div className="contact-form__element-container">
              <input type="text" required className="contact-form__element" />
              <span className="contact-form__highlight" />
              <span className="contact-form__bottom-bar" />
              <label className="contact-form__label">Imię</label>
            </div>
            <div className="contact-form__element-container">
              <input type="email" required className="contact-form__element" />
              <span className="contact-form__highlight" />
              <span className="contact-form__bottom-bar" />
              <label className="contact-form__label">Email</label>
            </div>
            <div className="contact-form__element-container contact-form__element-container--full-width">
              <textarea required className="contact-form__element" />
              <span className="contact-form__highlight" />
              <span className="contact-form__bottom-bar" />
              <label className="contact-form__label">Wiadomość</label>
            </div>
            <button type="submit" className="contact-form__btn">
              Wyślij
            </button>
          </form>
        </section>
        <section className="main__section main__section--dark">
          <header className="main__title-container">
            <h2 className="main__title main__title--light">Poznań</h2>
          </header>
          <ContactMap />
        </section>
      </div>
    );
  }
}

export default Contact;
