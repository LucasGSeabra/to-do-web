/* eslint-disable no-undef */
import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import TodoItem from '../components/TodoItem';
import store from './testReducer';

const [item, item2] = store.getState().todo.list;

describe('TodoItem Component', () => {
  it('should render TodoItem correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <TodoItem item={item} />
      </Provider>,
    );
    expect(component.find(TodoItem).exists()).toBe(true);
  });
  it('should have class marked if done is true', () => {
    const component = render(
      <Provider store={store}>
        <TodoItem item={item} />
      </Provider>,
    );
    const marked = component.find('td.marked').length;
    expect(marked).toBe(1);

    const component2 = render(
      <Provider store={store}>
        <TodoItem item={item2} />
      </Provider>,
    );
    const marked2 = component2.find('td.marked').length;
    expect(marked2).toBe(0);
  });
  it('should not have class marked if done is false', () => {
    const component = render(
      <Provider store={store}>
        <TodoItem item={item2} />
      </Provider>,
    );
    const marked = component.find('td.marked').length;
    expect(marked).toBe(0);
  });
  it('should have button variant warning if done is true', () => {
    const component = render(
      <Provider store={store}>
        <TodoItem item={item} />
      </Provider>,
    );
    const button = component.find('button.btn-warning').length;
    expect(button).toBe(1);
  });
  it('should have button variant success if done is false', () => {
    const component = render(
      <Provider store={store}>
        <TodoItem item={item2} />
      </Provider>,
    );
    const button = component.find('button.btn-warning').length;
    expect(button).toBe(0);
  });
  it('should render the correct item description', () => {
    const component = render(
      <Provider store={store}>
        <TodoItem item={item} />
      </Provider>,
    );
    const description = component.find('td').first().text();
    expect(description).toBe(item.description);
  });
});
