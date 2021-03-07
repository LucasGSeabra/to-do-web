/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoList from '../components/TodoList';
import store from './testReducer';

describe('TodoList Component', () => {
  it('should render TodoList correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
