import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faRedo, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../store/hooks';
import { changeStatus, removeTodos } from '../../store/todoReducer';
import { todo } from '../../store/types';

import './styles.css';

interface todoItemProps {
  item: todo
}

function TodoItem({ item }: todoItemProps) {
  const checkButtonIcon = item.done ? faRedo : faCheck;
  const checkButtonVariant = item.done ? 'warning' : 'success';
  const className = item.done ? 'marked' : '';
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td className={className}>
        {item.description}
      </td>
      <td>
        <Button onClick={() => dispatch(changeStatus(item))} variant={checkButtonVariant}>
          <FontAwesomeIcon icon={checkButtonIcon} />
        </Button>
        <Button onClick={() => dispatch(removeTodos(item._id))} variant="danger" hidden={!item.done}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
}

export default TodoItem;
