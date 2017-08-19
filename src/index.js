import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Entry from './entry';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Entry></Entry>
  </BrowserRouter>
), document.getElementById('root'));
