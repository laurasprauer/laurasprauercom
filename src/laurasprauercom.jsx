import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import styles
import './styles.scss';

//import imageName from '../assets/image-name.png'; // Importing image

// import components
import Main from './components/Main';
import Header from './components/Header';

function Entry() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default Entry;
