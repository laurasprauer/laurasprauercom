import React from 'react';

import Adapter from './adapter';
import Component from './component';
import fixtures from './fixtures';

const AboutResources = (props) => {
  return process.env.NODE_ENV === 'test' ? (
    <Component data={fixtures.default} {...props} />
  ) : (
    <Adapter {...props} />
  );
};

export default AboutResources;

export { Adapter as adapter, Component as component, fixtures };
