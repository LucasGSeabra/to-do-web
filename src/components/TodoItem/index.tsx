import React from 'react';
import TodoButton from '../TodoButton';
import { todo } from '../../store/types';

import './styles.css';

interface todoItemProps {
  item: todo
}

function TodoItem({ item }: todoItemProps) {
  const checkButtonVariant = item.done ? 'warning' : 'success';
  const className = item.done ? 'marked' : '';

  return (
    <tr>
      <td className={className}>
        {item.description}
      </td>
      <td>
        <TodoButton variant={checkButtonVariant} item={item} />
        <TodoButton variant="danger" item={item} />
      </td>
    </tr>
  );
}

export default TodoItem;
