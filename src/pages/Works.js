import React from 'react';
import { Route } from 'react-router-dom';

import WorksSlider from '../components/WorksSlider';

import expensify from '../img/expensify-mockup.jpg';
import fluxStore from '../img/fluxstore-mockup.jpg';
import grafique from '../img/grafique-mockup.jpg';
import rentiamo from '../img/rentiamo-mockup.jpg';

import WorksItemDetails from './WorksItemDetails';

class Works extends React.Component {
  items = [
    {
      id: 'expensify',
      title: 'expensify',
      subtitle: 'Aplikacja do zarządzania wydatkami',
      src: expensify,
      linkCode: 'https://github.com/chatajazzy/expensify',
      linkLive: 'https://chatajazzy-expensify.herokuapp.com/'
    },
    {
      id: 'fluxstore',
      title: 'fluxstore',
      subtitle: 'Prosty sklep internetowy',
      src: fluxStore,
      linkCode: 'https://chatajazzy.github.io/flux-demo',
      linkLive: 'https://github.com/chatajazzy/flux-demo'
    },
    {
      id: 'grafique',
      title: 'grafique',
      subtitle: 'Strona firmowa z blogiem',
      src: grafique,
      linkCode: 'https://chatajazzy.github.io/grafique',
      linkLive: 'https://grafique.000webhostapp.com/'
    },
    {
      id: 'rentiamo',
      title: 'rentiamo',
      subtitle: 'Rentiamo',
      src: rentiamo,
      linkCode: 'https://github.com/chatajazzy/rentiamo',
      linkLive: 'https://chatajazzy.github.io/rentiamo'
    }
  ];
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
