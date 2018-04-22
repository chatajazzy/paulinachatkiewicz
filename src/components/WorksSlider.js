import React from 'react';
import Slider from 'react-slick';
import WorksItem from './WorksItem';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';

class WorksSlider extends React.Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.state = {
      currentSlide: 0
    };
  }
  slide(y) {
    y > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }
  componentWillMount() {
    window.addEventListener('wheel', e => {
      this.slide(e.wheelDelta);
    });
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      initialSlide: 0,
      dots: true,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
    return (
      <div className="container">
        <Slider
          {...settings}
          ref={slider => (this.slider = slider)}
          afterChange={currentSlide => {
            this.setState({ currentSlide: currentSlide + 1 });
          }}
        >
          <WorksItem index={1} />
          <WorksItem index={2} />
          <WorksItem index={3} />
        </Slider>
      </div>
    );
  }
}

export default WorksSlider;
