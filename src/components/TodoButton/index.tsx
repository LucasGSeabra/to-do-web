/* eslint-disable react/require-default-props */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faSearch, faTimes, IconDefinition, faTrash, faRedo, faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector, todo } from '../../store/types';

import {
  descriptionCleared, fetchTodos, addTodos, removeTodos, changeStatus,
} from '../../store/todoReducer';
import './styles.css';

interface todoButtonProps {
  variant: string
  item?: todo | any
}

function TodoButton({ variant, item }: todoButtonProps) {
  const dispatch = useAppDispatch();
  const description = useAppSelector((state) => state.todo.description);
  let onClick;
  let icon: IconDefinition = faPlus;
  let hidden = false;

  switch (variant) {
    case 'primary':
      onClick = () => { if (description.length > 0) { dispatch(addTodos(description)); } };
      icon = faPlus;
      break;
    case 'secondary':
      onClick = () => dispatch(descriptionCleared());
      icon = faTimes;
      break;
    case 'info':
      onClick = () => dispatch(fetchTodos(description));
      icon = faSearch;
      break;
    case 'danger':
      onClick = () => dispatch(removeTodos(item._id));
      icon = faTrash;
      hidden = !item.done;
      break;
    default:
      onClick = () => dispatch(changeStatus(item));
      icon = item.done ? faRedo : faCheck;
      break;
  }

  return (
    <Button onClick={onClick} variant={variant} hidden={hidden}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}

export default TodoButton;
