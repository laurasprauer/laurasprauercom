import React from 'react';

// import styles
import styles from './styles.module.scss';

// import components
import MorseCodeLetter from './MorseCodeLetter';

export default class MorseCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 30,
      rowPadding: 10,
      inbetweenMargin: 2,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const rowSize = window.innerHeight / 14;
    this.setState({
      size: (rowSize / 4) * 3,
      rowPadding: rowSize / 4,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <MorseCodeLetter
          letter="L"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="A"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="U"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="R"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="A"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />

        <MorseCodeLetter
          letter="S"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="P"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="R"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="A"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="U"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="E"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
        <MorseCodeLetter
          letter="R"
          size={this.state.size}
          rowPadding={this.state.rowPadding}
          inbetweenMargin={this.state.inbetweenMargin}
        />
      </div>
    );
  }
}
