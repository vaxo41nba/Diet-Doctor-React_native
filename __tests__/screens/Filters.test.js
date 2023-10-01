import React from 'react';
import renderer from 'react-test-renderer';
import Filters from '../../src/screens/Filters';

test('renders correctly', () => {
  const tree = renderer.create(<Filters />).toJSON();
  expect(tree).toMatchSnapshot();
});
