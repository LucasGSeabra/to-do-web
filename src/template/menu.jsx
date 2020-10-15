import React from 'react'
import { Nav, Container } from 'react-bootstrap'

import './menu.css'

function Menu(props) {
    return(
            <Nav className="navbar">
                <Nav.Item  className="navbar-brand">
                    <Nav.Link href="#">Todo</Nav.Link> 
                </Nav.Item>
                <Nav.Item  className="navbar-brand">
                    <Nav.Link href="#/todo">Tarefas</Nav.Link> 
                </Nav.Item>
                <Nav.Item  className="navbar-brand">
                    <Nav.Link href="#/sobre">Sobre</Nav.Link> 
                </Nav.Item>
            </Nav>
    )
}

export default Menu