import React from 'react';
import Slider from 'react-slick';
import WorksItem from './WorksItem';

class WorksSlider extends React.Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.state = {
      currentSlide: 0
    };
  }
  slide = y => {
    y < 0 ? this.slider.slickNext() : this.slider.slickPrev();
  };
  componentDidMount() {
    window.addEventListener('wheel', e => {
      if (this.slider !== null) {
        setTimeout(() => {
          this.slide(e.wheelDelta);
        }, 250);
      }
    });
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      initialSlide: 0,
      dots: true,
      arrows: false,
      swipe: true,
      draggable: false,
      autoplay: true,
      pauseOnHover: false
    };
    return (
      <div className="works-slider__container">
        <Slider
          {...settings}
          ref={slider => (this.slider = slider)}
          afterChange={currentSlide => {
            this.setState({ currentSlide: currentSlide + 1 });
          }}
        >
          {this.props.items.map(function(item, index) {
            return <WorksItem itemInfo={item} key={`worksItem${index}`} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default WorksSlider;
