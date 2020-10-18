import React, { useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

function Todo(props) {
    const[description, setDescription] = useState('')

    function handleChange(e) {
        setDescription(e.target.value)
    }

    function handleAdd() {
        console.log('add')
    }

    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            <TodoForm 
                description={description} 
                handleChange={handleChange}
                handleAdd={handleAdd}/>
            <TodoList />
        </div>
    )
}

export default Todo 