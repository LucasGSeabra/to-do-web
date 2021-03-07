/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from '../components/PageHeader';

describe('PageHeader component', () => {
  it('should render PageHeader correctly', () => {
    const component = renderer.create(<PageHeader name="Page" small="Header" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
