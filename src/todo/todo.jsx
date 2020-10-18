import React, { useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

function Todo(props) {
export default class Todo extends Component {
    render() {
    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
        </div>
    )
}

export default Todo 