import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import InputText from './InputText';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      spinner: false,
      name: '',
      email: '',
      message: ''
    };

    this.successMsg = 'Wiadomość wysłana pomyślnie';
    this.errorMsg =
      'Podczas wysyłania wystąpił błąd. Odśwież stronę i spróbuj ponownie';
    this.spinnerText = 'Wysyłanie';
  }
  handleChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  sendEmail = e => {
    e.preventDefault();
    this.setState({
      spinner: true
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    const responseInfo = document.querySelector('.contact-form__response-info');

    axios
      .post(`/mail.php`, data)
      .then(response => {
        responseInfo.textContent = this.successMsg;
        this.setState({ name: '', email: '', message: '' });
      })
      .catch(function(error) {
        return (responseInfo.textContent = this.errorMsg);
      })
      .then(() => {
        this.setState({
          spinner: false
        });
      })
      .then(
        setTimeout(() => {
          responseInfo.textContent = '';
        }, 2000)
      );
  };
  render() {
    return (
      <form className="contact-form" onSubmit={this.sendEmail}>
        <InputText
          type="text"
          required={true}
          id="name"
          name="name"
          handleChange={this.handleChange}
          value={this.state.name}
          label="Imię"
        />
        <InputText
          type="text"
          required={true}
          id="email"
          name="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="Email"
        />
        <div className="contact-form__element-container contact-form__element-container--full-width">
          <textarea
            required
            id="message"
            name="message"
            className="contact-form__element"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <span className="contact-form__highlight" />
          <span className="contact-form__bottom-bar" />
          <label className="contact-form__label" htmlFor="message">
            Wiadomość
          </label>
        </div>
        <button
          type="submit"
          className="btn contact-form__btn"
          disabled={this.state.spinner}
        >
          Wyślij
        </button>
        <Spinner spinner={this.state.spinner} spinnerText={this.spinnerText} />
        <div className="contact-form__response-info" />
      </form>
    );
  }
}

export default ContactForm;
