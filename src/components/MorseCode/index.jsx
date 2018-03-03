import React from 'react';

// import styles
import styles from './styles.module.scss';

// import components
import MorseCodeLetter from './MorseCodeLetter';

export default class MorseCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
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
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  render() {
    const displayMorseCode = [];
    let fullName = 'LAURASPRAUER';
    // if the windowHeight is smaller than 500, then only display last name
    if (this.state.windowHeight < 500) {
      fullName = 'SPRAUER';
    }

    // loop through name string
    for (let i = 0; i < fullName.length; i += 1) {
      displayMorseCode.push(<MorseCodeLetter
        key={`${i}-${fullName.charAt(i)}`}
        letter={fullName.charAt(i)}
        order={i}
        total={fullName.length}
        {...this.state}
      />);
    }

    return (
      <div className={styles.container}>
        {displayMorseCode}
      </div>
    );
  }
}
