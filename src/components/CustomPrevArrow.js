import React from 'react';

const CustomPrevArrow = props => {
  return (
    <button type="button" className="slick-prev" onClick={props.onClick}>
      Prev
    </button>
  );
};

export default CustomPrevArrow;
