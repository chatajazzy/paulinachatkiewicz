import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
