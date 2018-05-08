import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => {
  return (
    <div className="contact-form__element-container">
      <input
        type={props.text}
        required={props.required}
        id={props.id}
        name={props.name}
        className="contact-form__element"
        onChange={props.handleChange}
        value={props.value}
      />
      <span className="contact-form__highlight" />
      <span className="contact-form__bottom-bar" />
      <label className="contact-form__label" htmlFor="name">
        {props.label}
      </label>
    </div>
  );
};

InputText.propTypes = {
  text: PropTypes.string,
  required: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
};

export default InputText;
