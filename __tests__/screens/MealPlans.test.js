import React from 'react';
import renderer from 'react-test-renderer';
import MealPlans from '../../src/screens/MealPlans';

test('renders correctly', () => {
  const tree = renderer.create(<MealPlans />).toJSON();
  expect(tree).toMatchSnapshot();
});
