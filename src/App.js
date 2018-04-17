import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Socials from './components/Socials';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Socials />
      </div>
    );
  }
}

export default App;
