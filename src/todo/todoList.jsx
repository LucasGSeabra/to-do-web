import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faRedo, faCheck }  from '@fortawesome/free-solid-svg-icons'

import './todoList.css'

function TodoList(props) {

    return (
        <Table className="list">
            <thead>
                <tr>
                    <th>Descricao</th>
                    <th className="table-actions">Ações</th>
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
                                <Button onClick={() => props.handlePending(todo)} variant="warning" hidden={!todo.done}>
                                    <FontAwesomeIcon icon={faRedo} />
                                </Button> 
                                <Button onClick={() => props.handleDelete(todo)} variant="danger" hidden={!todo.done}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button> 
                                <Button onClick={() => props.handleDone(todo)} variant="success" hidden={todo.done}>
                                    <FontAwesomeIcon icon={faCheck} />
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