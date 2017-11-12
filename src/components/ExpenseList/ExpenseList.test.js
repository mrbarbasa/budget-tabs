import React from 'react';
import renderer from 'react-test-renderer';
import ExpenseList from './ExpenseList';

it('renders without crashing', () => {
  const rendered = renderer.create(<ExpenseList />).toJSON();
  expect(rendered).toMatchSnapshot();
});
