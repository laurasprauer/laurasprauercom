import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';

// import components
import LauraSprauerCom from './laurasprauercom';

ReactDOM.render(
  (
    <Router history={history}>
      <LauraSprauerCom />
    </Router>
  ), document.getElementById('website'),
);
