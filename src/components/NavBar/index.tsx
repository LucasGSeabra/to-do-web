import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function NavBar() {
  return (
    <Nav className="navbar">
      <Nav.Item className="navbar-brand">
        <Nav.Link className="nav-link nav-title" href="#/todo">
          <FontAwesomeIcon icon={faCalendarCheck} />
          <h1>TodoApp</h1>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navbar-brand">
        <Nav.Link className="nav-link" href="#/todo">Tarefas</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navbar-brand">
        <Nav.Link className="nav-link" href="#/sobre">Sobre</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
