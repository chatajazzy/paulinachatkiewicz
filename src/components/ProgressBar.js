import React from 'react';

const ProgressBar = props => {
  return (
    <div
      className={props.showProgressBar ? 'progressbar visible' : 'progressbar'}
    >
      <span>1</span>
      <span>2</span>
    </div>
  );
};

export default ProgressBar;
