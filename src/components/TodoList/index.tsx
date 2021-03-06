import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodos } from '../../store/todoReducer';
import TodoItem from '../TodoItem';

import './styles.css';

function TodoList() {
  const list = useAppSelector((state) => state.todo.list);
  const description = useAppSelector((state) => state.todo.description);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos(description));
  }, []);

  return (
    <Table className="list">
      <thead>
        <tr>
          <th>Descricao</th>
          <th className="table-actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {list.map((todo) => (
          <TodoItem item={todo} key={todo._id} />
        ))}
      </tbody>
    </Table>
  );
}

export default TodoList;
