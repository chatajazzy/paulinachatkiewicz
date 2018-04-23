import React from 'react';
import { Route } from 'react-router-dom';

import Grid from './Grid';
import WorksSlider from './WorksSlider';

import agencysite from '../img/paulina.jpg';
import graxposite from '../img/graxposite.jpg';
import linearsite from '../img/linearsite.jpg';

import WorksItemDetails from './WorksItemDetails';
class Works extends React.Component {
  constructor() {
    super();
    this.items = [
      {
        id: 'agencysite',
        title: 'agencysite',
        subtitle: 'Statyczna strona www',
        content: 'blablablabla',
        src: agencysite
      },
      {
        id: 'graxposite',
        title: 'graxposite',
        subtitle: 'Statyczna strona www',
        content: 'blablablabla',
        src: graxposite
      },
      {
        id: 'linearsite',
        title: 'linearsite',
        subtitle: 'Statyczna strona www',
        content: 'blablablabla',
        src: linearsite
      }
    ];
  }
  render() {
    return (
      <div className="main__wrapper">
        <WorksSlider items={this.items} />
        <Route
          path="/works/:worksId"
          render={props => (
            <WorksItemDetails itemInfo={this.items} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Works;
