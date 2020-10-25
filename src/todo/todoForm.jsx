import React from 'react'
import { Row, Col, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faTimes }  from '@fortawesome/free-solid-svg-icons'

import './todoForm.css'

function TodoForm(props) {

    const keyHandler = (e) => {
        if(e.key === 'Enter') { e.shiftKey ? props.handleSearch(e) : props.handleAdd(e) }
        if(e.key === 'Escape') {props.handleClear()}
    }

    return (
        <form className="todoForm">
            <Row>
                <Col xs={12} md={10} sm={9}>
                    <FormControl 
                        value={props.description}
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        placeholder="Adicione uma tarefa" 
                        id="description"
                    />                 
                </Col>
                <Col xs={12} md={2} sm={3}>
                    <Button onClick={props.handleAdd} variant="primary">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>      
                    <Button onClick={props.handleSearch} variant="info">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button onClick={props.handleClear} variant="secondary">
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>                
                </Col>
            </Row>    
        </form>
    )
}

export default TodoForm