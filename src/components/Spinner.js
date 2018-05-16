import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => {
  return (
    <div
      className={props.spinner === true ? 'spinner spinner--active' : 'spinner'}
    >
      <div className="spinner__text">{props.spinnerText}</div>
      <div className="spinner__content" />
    </div>
  );
};

Spinner.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func,
  spinnerText: PropTypes.string
};

export default Spinner;
