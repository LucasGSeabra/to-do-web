import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash }  from '@fortawesome/free-solid-svg-icons'

import './todoList.css'

function TodoList(props) {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Descricao</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(todo => {
                    return (
                        <tr key={todo._id}>
                            <td className={todo.done ? 'marked' : ''}>
                                {todo.description}
                            </td>
                            <td>
                                <Button onClick={props.handlePending(todo)} variant="warning">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button> 
                                <Button onClick={props.handleDone(todo)} variant="success">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button> 
                                <Button onClick={props.handleDelete(todo)} variant="danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button> 
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TodoList