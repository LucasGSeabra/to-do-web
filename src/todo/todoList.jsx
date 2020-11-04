import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoAction'
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
                                <Button onClick={() => props.markAsPending(todo)} variant="warning" hidden={!todo.done}>
                                    <FontAwesomeIcon icon={faRedo} />
                                </Button> 
                                <Button onClick={() => props.remove(todo)} variant="danger" hidden={!todo.done}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button> 
                                <Button onClick={() => props.markAsDone(todo)} variant="success" hidden={todo.done}>
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

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)