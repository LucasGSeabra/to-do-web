import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash }  from '@fortawesome/free-solid-svg-icons'

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
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>
                                <Button onClick={props.handleDelete(todo.id)} variant="danger">
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