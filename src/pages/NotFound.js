import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  window.onload = function() {
    document.querySelector('.not-found').classList.add('not-found--active');
  };
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">Oops</h1>
        <p className="not-found__text">Nie ma takiej strony.</p>
        <Link to="/" className="btn not-found__back-link">
          Powrót
        </Link>
      </div>
      <div className="not-found__layer not-found__layer--top" />
      <div className="not-found__layer not-found__layer--bottom" />
    </div>
  );
};

export default NotFound;
