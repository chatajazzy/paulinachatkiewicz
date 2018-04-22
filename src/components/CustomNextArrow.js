import React from 'react';

const CustomNextArrow = props => {
  return (
    <button type="button" className="slick-next" onClick={props.onClick}>
      Next
    </button>
  );
};

export default CustomNextArrow;
