import React from 'react';
import Container from '@components/container';

class FlexibleTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode:
        localStorage && localStorage.getItem('LS-darkmode')
          ? localStorage.getItem('LS-darkmode') === 'true'
            ? true
            : false
          : false,
    };
  }

  toggleDarkmode = () => {
    if (localStorage) {
      const current = localStorage.getItem('LS-darkmode')
        ? localStorage.getItem('LS-darkmode') === 'true'
          ? true
          : false
        : false;
      localStorage.setItem('LS-darkmode', !current);
      this.setState({
        darkmode: !current,
      });
    } else {
      this.setState({
        darkmode: !this.state.darkmode,
      });
    }
  };

  render() {
    return (
      <Container
        slug={'/404'}
        type={'404'}
        darkmode={this.state.darkmode}
        toggleDarkmode={this.toggleDarkmode}
        animationType={'line'}
      />
    );
  }
}

export default FlexibleTemplate;
