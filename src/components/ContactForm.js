import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ContactForm;
