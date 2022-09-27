import React from 'react';
import renderer from 'react-test-renderer';

import Link from './component';
import fixtures from './fixtures';

describe('Internal Link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Link {...fixtures.internal} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('External Link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Link {...fixtures.external} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
