import React from 'react';
import renderer from 'react-test-renderer';
import Overview from './Overview';

it('renders without crashing', () => {
  const rendered = renderer.create(<Overview />).toJSON();
  expect(rendered).toMatchSnapshot();
});
