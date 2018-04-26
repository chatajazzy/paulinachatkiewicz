import React from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';

import { worksItemDetails } from '../data/works-item-details';

class WorksItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.worksItemDetails = worksItemDetails;
  }
  componentDidMount() {
    //TODO: refactor needed
    const targetObject1 = document.querySelector('.works-item-details__title');
    const targetObject2 = document.querySelector(
      '.works-item-details__subtitle'
    );
    const targetObject3 = document.querySelector('.works-item-details__img');
    const targetObject4 = document.querySelector(
      '.works-item-details__paragraph-list'
    );
    const targetObject5 = document.querySelector('.works-item-details__btns');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { y: 30, opacity: 0 })
      .from(targetObject2, 1, { y: 60, opacity: 0 })
      .from(targetObject3, 1, { y: -30, opacity: 0 })
      .from(targetObject4, 1, { y: 60, opacity: 0 })
      .from(targetObject5, 1, { opacity: 0 })

      .add('end', 2)

      .to(targetObject1, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject2, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject3, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject4, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject5, 3, { opacity: 1 }, 'end');

    stagingTimeline.play();
  }
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
          <div className="works-item-details__info">
            <h3 className="works-item-details__title">
              {currentItemInfo.title}
            </h3>
            <p className="works-item-details__subtitle">
              {currentItemInfo.subtitle}
            </p>
            <div className="works-item-details__btns">
              <a
                className="btn works-item-details__btn"
                href={currentItemInfo.linkCode}
                target="_blank"
              >
                Kod
              </a>
              <a
                className="btn works-item-details__btn"
                href={currentItemInfo.linkLive}
                target="_blank"
              >
                Live
              </a>
            </div>
            <ul className="works-item-details__paragraph-list">
              {this.worksItemDetails.map(function(item, index) {
                return (
                  <li key={`worksItemDetail${index}`}>
                    <p className="works-item-details__paragraph">
                      {item.paragraph}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            className="works-item-details__img"
            src={currentItemInfo.src}
            alt={currentItemInfo.title}
          />
        </div>
      </div>
    );
  }
}

WorksItemDetails.propTypes = {
  itemInfo: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  paragraph: PropTypes.string,
  linkLive: PropTypes.string,
  linkCode: PropTypes.string
};

export default WorksItemDetails;
