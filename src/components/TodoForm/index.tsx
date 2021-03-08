import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TodoButton from '../TodoButton';
import FormInput from '../FormInput';
import './styles.css';

function TodoForm() {
  return (
    <form className="todoForm">
      <Row>
        <Col xs={12} md={10} sm={9}>
          <FormInput />
        </Col>
        <Col xs={12} md={2} sm={3}>
          <TodoButton variant="primary" />
          <TodoButton variant="info" />
          <TodoButton variant="secondary" />
        </Col>
      </Row>
    </form>
  );
}

export default TodoForm;
