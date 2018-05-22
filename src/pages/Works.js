import React from 'react';
import {
  Route
} from 'react-router-dom';

import WorksSlider from '../components/WorksSlider';

import expensify from '../img/expensify-mockup.jpg';
import fluxStore from '../img/fluxstore-mockup.jpg';

import WorksItemDetails from './WorksItemDetails';

class Works extends React.Component {
  placeholderImg = 'http://placehold.it/800x800';
  items = [{
      id: 'expensify',
      title: 'expensify',
      subtitle: 'Aplikacja do zarządzania wydatkami',
      content: 'blablablabla',
      src: expensify,
      linkCode: 'https://github.com/chatajazzy/expensify',
      linkLive: 'https://chatajazzy-expensify.herokuapp.com/'
    },
    {
      id: 'fluxstore',
      title: 'fluxstore',
      subtitle: 'Prosty sklep internetowy',
      content: 'blablablabla',
      src: fluxStore,
      linkCode: 'https://chatajazzy.github.io/flux-demo',
      linkLive: 'https://github.com/chatajazzy/flux-demo'
    }
  ];
  render() {
    return ( 
      <div className="main__wrapper">
        <WorksSlider items={this.items} /> 
        <Route path = "/works/:worksId" render={props => ( 
          <WorksItemDetails itemInfo={this.items} { ...props} />)}
        /> 
      </div>
    );
  }
}

export default Works;
