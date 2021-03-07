/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoForm from '../components/TodoForm';
import store from './testReducer';

describe('TodoForm Component', () => {
  it('should render TodoForm correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
