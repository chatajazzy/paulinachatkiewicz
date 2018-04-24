import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TweenLite } from 'gsap';
import { Transition } from 'react-transition-group';
import TransitionReplace from 'react-transition-replace';

import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Header from './components/Header';

import './App.scss';

const animIn = node => {
  TweenLite.set(node, {
    opacity: 0
  });
  TweenLite.to(node, 0.5, {
    opacity: 1
  });
};

const animOut = node => {
  TweenLite.set(node, {
    opacity: 1
  });
  TweenLite.to(node, 0.5, {
    opacity: 0
  });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuVisible: false
    };
  }
  handleMenu = () => {
    if (this.state.mobileMenuVisible === false) {
      this.setState({
        mobileMenuVisible: true
      });
    } else {
      this.setState({
        mobileMenuVisible: false
      });
    }
  };
  render() {
    return (
      <TransitionReplace>
        <Transition
          key={this.props.location.pathname}
          timeout={500}
          mountOnEnter={true}
          onEnter={animIn}
          onExit={animOut}
        >
          <div className="page-container">
            <Header
              mobileMenuVisible={this.state.mobileMenuVisible}
              handleMenu={this.handleMenu}
            />
            <main className="main">
              <Switch location={this.props.location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />

                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </Transition>
      </TransitionReplace>
    );
  }
}

export default withRouter(App);
