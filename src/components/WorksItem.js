import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class WorksItem extends React.Component {
  render() {
    const { itemInfo } = this.props;
    return (
      <div className="works-item">
        <Link to={`/works/${itemInfo.id}`} className="works-item__link">
          <div className="works-item__content">
            <div className="works-item__info">
              <h3 className="works-item__title">{itemInfo.title}</h3>
              <p className="works-item__subtitle">{itemInfo.subtitle}</p>
            </div>

            <img
              className="works-item__img"
              src={itemInfo.src}
              alt={itemInfo.title}
            />
          </div>
        </Link>
      </div>
    );
  }
}

WorksItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string
};

export default WorksItem;
