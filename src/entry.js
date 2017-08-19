import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import styles
import './styles.css';

//import components
import Main from './components/Main';
import Header from './components/Header';

class Entry extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default Entry;
