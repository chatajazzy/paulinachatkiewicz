import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WorksItem = props => {
  return (
    <div className="works-item">
      <Link to={`/works/${props.itemInfo.id}`} className="works-item__link">
        <div className="works-item__content">
          <div className="works-item__info">
            <h3 className="works-item__title">{props.itemInfo.title}</h3>
            <p className="works-item__subtitle">{props.itemInfo.subtitle}</p>
          </div>
          <img
            className="works-item__img"
            src={props.itemInfo.src}
            alt={props.itemInfo.title}
          />
        </div>
      </Link>
    </div>
  );
};

WorksItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string
};

export default WorksItem;
