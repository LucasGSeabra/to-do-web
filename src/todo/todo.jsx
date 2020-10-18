import React, { useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

function Todo(props) {
    const[description, setDescription] = useState('')

    function handleChange(e) {
        setDescription(e.target.value)
    }

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