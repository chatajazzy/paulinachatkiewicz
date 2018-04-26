import React from 'react';

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader">
        <div className="preloader__content">
          <div className="preloader__ball-wrap">
            <div className="preloader__ball" />
          </div>
          <div className="preloader__ball-wrap">
            <div className="preloader__ball" />
          </div>
          <div className="preloader__ball-wrap">
            <div className="preloader__ball" />
          </div>
          <div className="preloader__ball-wrap">
            <div className="preloader__ball" />
          </div>
          <div className="preloader__ball-wrap">
            <div className="preloader__ball" />
          </div>
          <div className="preloader__info">Loading...</div>
        </div>
      </div>
    );
  }
}

export default Preloader;
