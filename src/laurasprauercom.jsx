import React from 'react';
import history from './history';

// import styles
import './styles.scss';

// import imageName from '../assets/image-name.png'; // Importing image

// import components
import Main from './components/Main';
import Header from './components/Header';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkMode= () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  }

  render() {
    return (
      <div>
        <Header pathname={history.location.pathname} darkMode={this.state.darkMode}/>
        <Main pathname={history.location.pathname} darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/>
      </div>
    );
  }
}
