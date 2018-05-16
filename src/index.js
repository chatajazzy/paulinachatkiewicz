import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';

const history = createBrowserHistory({ basename: '/paulinachatkiewicz' });

const Root = () => {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
