import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar }  from '@fortawesome/free-solid-svg-icons'

import './menu.css'

function Menu(props) {
    return(
            <Nav className="navbar">
                <Nav.Item  className="navbar-brand">
                    <Nav.Link className="nav-link nav-title" href="#">
                        <FontAwesomeIcon icon={faCalendar} />
                        <h1>Todo</h1>
                    </Nav.Link> 
                </Nav.Item>
                <Nav.Item  className="navbar-brand">
                    <Nav.Link className="nav-link" href="#/todo">Tarefas</Nav.Link> 
                </Nav.Item>
                <Nav.Item  className="navbar-brand">
                    <Nav.Link className="nav-link" href="#/sobre">Sobre</Nav.Link> 
                </Nav.Item>
            </Nav>
    )
}

export default Menu