import React from 'react';
import renderer from 'react-test-renderer';

import SVG from './component';

describe('SVG', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SVG name="LS-logo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
