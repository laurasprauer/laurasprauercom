import React from 'react';

import Adapter from './adapter';
import Component from './component';
import fixtures from './fixtures';

const ResumeContainer = (props) => {
  return process.env.NODE_ENV === 'test' ? (
    <Component data={fixtures.default} {...props} />
  ) : (
    <Adapter {...props} />
  );
};

export default ResumeContainer;

export { Adapter as adapter, Component as component, fixtures };
