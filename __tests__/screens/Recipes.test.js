import React from 'react';
import renderer from 'react-test-renderer';
import Recipes from '../../src/screens/Recipes';

test('renders correctly', () => {
  const tree = renderer.create(<Recipes />).toJSON();
  expect(tree).toMatchSnapshot();
});
