import React from 'react';
import { Link } from 'react-router-dom';

class WorksItem extends React.Component {
  render() {
    const { itemInfo, ...props } = this.props;
    return (
      <Link
        to="/about"
        onClick={e => e.preventDefault()}
        className="works-item__link"
      >
        <div className="works-item" {...props}>
          <h3 className="works-item__title">{itemInfo.title}</h3>
          <p className="works-item__subtitle">{itemInfo.subtitle}</p>
          <img src={itemInfo.src} alt={itemInfo.title} />
        </div>
      </Link>
    );
  }
}

export default WorksItem;
