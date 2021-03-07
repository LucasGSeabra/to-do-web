/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

describe('NavBar Component', () => {
  it('should render NavBar correctly', () => {
    const component = renderer.create(<NavBar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
