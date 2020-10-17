import React from 'react'
import { Col, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'

function TodoForm(props) {
    return (
        <form className="todoForm">
            <Col xs={12} md={10} sm={9}>
                <FormControl placeholder="Adicione uma tarefa" id="description" />                 
            </Col>
            <Col xs={12} md={2} sm={3}>
                <Button variant="primary">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>                 
            </Col>
        </form>
    )
}

export default TodoForm