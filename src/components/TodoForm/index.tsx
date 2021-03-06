import React, { KeyboardEvent } from 'react';
import {
  Row, Col, FormControl, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../store/types';
import {
  descriptionChanged, descriptionCleared, fetchTodos, addTodos,
} from '../../store/todoReducer';
import './styles.css';

function TodoForm() {
  const description = useAppSelector((state) => state.todo.description);
  const dispatch = useAppDispatch();

  function handleAdd() {
    if (description.length > 0) {
      dispatch(addTodos(description));
    }
  }

  function keyHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        dispatch(fetchTodos(description));
      } else {
        handleAdd();
      }
    }
    if (e.key === 'Escape') { dispatch(descriptionCleared()); }
  }

  return (
    <form className="todoForm">
      <Row>
        <Col xs={12} md={10} sm={9}>
          <FormControl
            value={description}
            onChange={(e) => dispatch(descriptionChanged(e.target.value))}
            onKeyUp={(e: KeyboardEvent) => keyHandler(e)}
            placeholder="Adicione uma tarefa"
            id="description"
          />
        </Col>
        <Col xs={12} md={2} sm={3}>
          <Button onClick={() => handleAdd()} variant="primary">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button onClick={() => dispatch(fetchTodos(description))} variant="info">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <Button onClick={() => dispatch(descriptionCleared())} variant="secondary">
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default TodoForm;
