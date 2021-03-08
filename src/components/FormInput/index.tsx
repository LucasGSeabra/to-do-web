import React, { KeyboardEvent } from 'react';
import { FormControl } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/types';
import {
  descriptionChanged, fetchTodos, addTodos, descriptionCleared,
} from '../../store/todoReducer';

function FormInput() {
  const description = useAppSelector((state) => state.todo.description);
  const dispatch = useAppDispatch();

  function keyHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        dispatch(fetchTodos(description));
      } else if (description.length > 0) {
        dispatch(addTodos(description));
      }
    }
    if (e.key === 'Escape') {
      dispatch(descriptionCleared());
    }
  }

  return (
    <FormControl
      value={description}
      onChange={(e) => dispatch(descriptionChanged(e.target.value))}
      onKeyUp={(e: KeyboardEvent) => keyHandler(e)}
      placeholder="Adicione uma tarefa"
      id="description"
    />
  );
}

export default FormInput;
