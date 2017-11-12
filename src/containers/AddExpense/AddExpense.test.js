import React from 'react';
import renderer from 'react-test-renderer';
import AddExpense from './AddExpense';

it('renders without crashing', () => {
  const rendered = renderer.create(<AddExpense />).toJSON();
  expect(rendered).toMatchSnapshot();
});
