import React from 'react';
import Grid from './Grid';
import WorksSlider from './WorksSlider';

class Works extends React.Component {
  render() {
    return (
      <div className="main__wrapper">
        <Grid />
        <WorksSlider />
      </div>
    );
  }
}

export default Works;
