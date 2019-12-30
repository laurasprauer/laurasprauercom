import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';

// import components
import LauraSprauerCom from './laurasprauercom';

// const config = {
//   apiKey: 'AIzaSyAiTrgmPbhJH0uESY_BqVra26uocUCDWhg',
//   authDomain: 'laurasprauercom.firebaseapp.com',
//   databaseURL: 'https://laurasprauercom.firebaseio.com/',
// };
// firebase.initializeApp(config);

ReactDOM.render(
  (
    <Router history={history}>
      <LauraSprauerCom />
    </Router>
  ), document.getElementById('website'),
);
