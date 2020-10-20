import React, { useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

function Todo(props) {
    const[description, setDescription] = useState('')

    function handleChange(e) {
        setDescription(e.target.value)
    }

    function handleAdd() {
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
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