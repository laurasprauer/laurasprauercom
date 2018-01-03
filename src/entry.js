import React, { Component } from 'react';

//import styles
import './styles.scss';

//import components
import Main from './components/Main';
import Header from './components/Header';

class Entry extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default Entry;
