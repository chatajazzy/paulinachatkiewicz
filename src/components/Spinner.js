import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.spinner === true ? 'spinner spinner--active' : 'spinner'
        }
      >
        <div className="spinner__text">Wysyłanie</div>
        <div className="spinner__content" />
      </div>
    );
  }
}

export default Spinner;
