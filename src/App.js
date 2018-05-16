import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Header from './components/Header';
import Preloader from './components/Preloader';
import ProgressBar from './components/ProgressBar';

import './App.scss';

class App extends Component {
  state = {
    mobileMenuVisible: false,
    wasPreloaderShowed: false
  };
  componentWillMount() {
    if (!this.state.wasPreloaderShowed) {
      setTimeout(() => {
        document.body.classList.add('page-loaded');
        this.handlePreloader();
      }, 2000);
    }
  }
  handlePreloader = () => {
    if (this.state.wasPreloaderShowed === false) {
      this.setState({
        wasPreloaderShowed: true
      });
    }
  };
  handleMenu = () => {
    if (this.state.mobileMenuVisible === false) {
      this.setState({ mobileMenuVisible: true });
    } else {
      this.setState({ mobileMenuVisible: false });
    }
  };
  render() {
    return (
      <div className="page-container">
        <Header
          mobileMenuVisible={this.state.mobileMenuVisible}
          handleMenu={this.handleMenu}
          wasPreloaderShowed={this.state.wasPreloaderShowed}
        />
        <main className="main">
          <Switch location={this.props.location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
