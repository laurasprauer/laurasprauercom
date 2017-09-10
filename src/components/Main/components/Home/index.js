import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeBlock">
          <div className="svg-row1">
            <div className="svg1">
              <svg width="109" height="112" viewBox="0 0 109 112" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.535 96.228L64.878 0h23.976l20.088 111.456H92.256l-4.698-26.73H65.85l-4.536 26.73H.564V0H17.25v96.228h30.285zM77.19 18.144h-.972l-8.586 51.84h18.144l-8.586-51.84z" fill="#FFF" fill-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
