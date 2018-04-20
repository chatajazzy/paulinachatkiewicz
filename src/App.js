import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Header from './components/Header';

import './App.scss';

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
      <Router>
        <div className="page-container">
          <Header
            mobileMenuVisible={this.state.mobileMenuVisible}
            handleMenu={this.handleMenu}
          />
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
