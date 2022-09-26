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
    const { slug, type, animation, data } = this.props.pageContext;
    return (
      <Container
        slug={slug}
        type={type}
        darkmode={this.state.darkmode}
        toggleDarkmode={this.toggleDarkmode}
        animationType={animation}
        data={data}
      />
    );
  }
}

export default FlexibleTemplate;
