import React from 'react';

const MobileMenuTrigger = props => {
  return (
    <svg
      width="48"
      height="13"
      viewBox="0 0 48 13"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.openMobileMenu}
    >
      <g id="Canvas" fill="none">
        <g id="mobileTrigger">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 48 1.02857L 0 1.02857L 0 0L 48 0L 48 1.02857Z"
            transform="translate(0 11.8)"
            fill={props.openIconColor}
            id="Line 2 (Stroke)"
          />
          <path
            d="M 0 0L 48 0L 0 0Z"
            transform="translate(0 1)"
            fill="#fff"
            id="Line 2.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 48 1.02857L 0 1.02857L 0 0L 48 0L 48 1.02857Z"
            transform="translate(0 .486)"
            fill={props.openIconColor}
            id="Line 2.1 (Stroke)"
          />
        </g>
      </g>
    </svg>
  );
};
export default MobileMenuTrigger;
