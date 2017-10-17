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
              percent={23.35}
            />
            <Letters
              letter="U"
              percent={13.02}
            />
            <Letters
              letter="R"
              percent={13.26}
            />
            <Letters
              letter="A"
              percent={14.85}
            />
          </div>
          <div className="svg-row2">
            <Letters
              letter="S"
              percent={12.09}
            />
            <Letters
              letter="P"
              percent={12.79}
            />
            <Letters
              letter="R"
              percent={13.26}
            />
            <Letters
              letter="A"
              percent={15.35}
            />
            <Letters
              letter="U"
              percent={13.02}
            />
            <Letters
              letter="ER"
              percent={23.55}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
