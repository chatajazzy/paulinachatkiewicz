import React from 'react';
import { NavLink } from 'react-router-dom';

class WorksItem extends React.Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <NavLink to="/about">
        <div {...props}>
          <h3>{index}</h3>
        </div>
      </NavLink>
    );
  }
}

export default WorksItem;
