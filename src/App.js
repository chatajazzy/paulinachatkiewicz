import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Socials from './components/Socials';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Header />
            <main className="container">
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
        <Socials />
      </div>
    );
  }
}

export default App;
