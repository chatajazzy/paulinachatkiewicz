import React from 'react';
import { Link } from 'react-router-dom';

class WorksItemDetails extends React.Component {
  render() {
    const currentWorksId = this.props.match.params.worksId;
    const currentItemInfo = this.props.itemInfo.find(function(obj) {
      return obj.id === currentWorksId;
    });
    return (
      <div className="works-item-details">
        <Link to="/works" className="works-item-details__link">
          <div className="works-item-details__close">
            <span className="works-item-details__close-bar" />
            <span className="works-item-details__close-bar" />
          </div>
        </Link>
        <div className="works-item-details__content">
          <h3 className="works-item-details__title">{currentItemInfo.title}</h3>
          <p className="works-item-details__subtitle">
            {currentItemInfo.subtitle}
          </p>
          <img src={currentItemInfo.src} alt={currentItemInfo.title} />
        </div>
      </div>
    );
  }
}

export default WorksItemDetails;
