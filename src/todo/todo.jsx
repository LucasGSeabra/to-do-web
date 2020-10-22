import React, { useEffect, useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

function Todo(props) {
    const[description, setDescription] = useState('')
    const[list, setList] = useState([])

    function handleChange(e) {
        setDescription(e.target.value)
    }

    function handleAdd() {
        axios.post(URL, { description })
            .then(() => refresh())       
    }

    function handleDelete(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => refresh())       
    }

    function refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => {
                setList(resp.data)
                setDescription('')
            }
        )
    }

    useEffect(() => {
        refresh()
    },[]) 

    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            <TodoForm 
                description={description} 
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <TodoList 
                list={list} 
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Todo 