import React from 'react';
import Container from '../components/container/index';

class FlexibleTemplate extends React.Component {
  constructor(props) {
    super(props);
    const isBrowser = typeof window !== 'undefined';

    this.state = {
      darkmode:
        isBrowser && localStorage.getItem('LS-darkmode')
          ? localStorage.getItem('LS-darkmode') === 'true'
            ? true
            : false
          : false,
    };
  }

  toggleDarkmode = () => {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
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
