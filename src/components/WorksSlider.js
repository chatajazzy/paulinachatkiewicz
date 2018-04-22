import React from 'react';
import Slider from 'react-slick';
import WorksItem from './WorksItem';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';

import agencysite from '../img/agencysite.jpg';
import graxposite from '../img/graxposite.jpg';
import linearsite from '../img/linearsite.jpg';

class WorksSlider extends React.Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.state = {
      currentSlide: 0
    };
    this.items = [
      {
        title: 'agencysite',
        subtitle: 'Statyczna strona www',
        src: agencysite
      },
      {
        title: 'graxposite',
        subtitle: 'Statyczna strona www',
        src: graxposite
      },
      { title: 'linearsite', subtitle: 'Statyczna strona www', src: linearsite }
    ];
  }
  slide = y => {
    y > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  };
  componentWillMount() {
    window.addEventListener('wheel', e => {
      this.slide(e.wheelDelta);
    });
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      focusOnSelect: true,
      initialSlide: 0,
      dots: true,
      arrows: true,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnHover: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
    return (
      <div className="container works-slider__container">
        <Slider
          {...settings}
          ref={slider => (this.slider = slider)}
          afterChange={currentSlide => {
            this.setState({ currentSlide: currentSlide + 1 });
          }}
        >
          {this.items.map(function(item, index) {
            return <WorksItem itemInfo={item} key={`worksItem${index}`} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default WorksSlider;
