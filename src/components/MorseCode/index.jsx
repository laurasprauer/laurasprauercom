import React from 'react';

// import styles
import styles from './styles.module.scss';

// import components
import LetterL from './components/LetterL';
import LetterA from './components/LetterA';
import LetterU from './components/LetterU';
import LetterR from './components/LetterR';
import LetterS from './components/LetterS';
import LetterP from './components/LetterP';
import LetterE from './components/LetterE';

export default class MorseCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      size: 30,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  }

  render() {
    console.log(this.state.windowHeight);
    console.log(this.state.windowWidth);
    return (
      <div className={styles.container}>
        <LetterL size={this.state.size} />
        <LetterA size={this.state.size} />
        <LetterU size={this.state.size} />
        <LetterR size={this.state.size} />
        <LetterA size={this.state.size} />

        <LetterS size={this.state.size} />
        <LetterP size={this.state.size} />
        <LetterR size={this.state.size} />
        <LetterA size={this.state.size} />
        <LetterU size={this.state.size} />
        <LetterE size={this.state.size} />
        <LetterR size={this.state.size} />
      </div>
    );
  }
}
