import React, { Component } from 'react';
import './styles.css';

//import components
import Letters from './components/Letters';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeBlock">
          <div className="svg-row1">
            <Letters
              letter="LA"
            />
            <Letters
              letter="U"
            />
            <Letters
              letter="R"
            />
            <Letters
              letter="A"
            />
          </div>
          <div className="svg-row2">
            <Letters
              letter="S"
            />
            <Letters
              letter="P"
            />
            <Letters
              letter="R"
            />
            <Letters
              letter="A"
            />
            <Letters
              letter="U"
            />
            <Letters
              letter="ER"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
