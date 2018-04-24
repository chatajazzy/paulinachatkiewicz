import React from 'react';
import PropTypes from 'prop-types';

class Spinner extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.spinner === true ? 'spinner spinner--active' : 'spinner'
        }
      >
        <div className="spinner__text">{this.props.spinnerText}</div>
        <div className="spinner__content" />
      </div>
    );
  }
}

Spinner.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleMenu: PropTypes.func,
  spinnerText: PropTypes.string
};

export default Spinner;
