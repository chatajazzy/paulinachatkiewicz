import React from 'react';

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

export default InputText;
