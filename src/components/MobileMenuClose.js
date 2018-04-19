import React from 'react';

const MobileMenuClose = props => {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.closeMobileMenu}
    >
      <g id="Canvas" fill="none">
        <g id="Group">
          <line
            y1="-0.5"
            x2="35.355"
            y2="-0.5"
            transform="rotate(45 -1.207 .5)"
            stroke={props.closeIconColor}
            id="Line"
          />
          <line
            y1="-0.5"
            x2="35.355"
            y2="-0.5"
            transform="rotate(135 12.293 5.678)"
            stroke={props.closeIconColor}
            id="Line 2"
          />
        </g>
      </g>
    </svg>
  );
};
export default MobileMenuClose;
