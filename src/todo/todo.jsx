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
            .then(() => refresh(description))       
    }

    function handleDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(() => refresh(description))
    }

    function handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(() => refresh(description))
    }

    function handleSearch() {
        refresh(description)
    }

    function handleClear() {
        refresh()
    }

    function refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                setList(resp.data)
                setDescription(description)
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
                handleSearch={handleSearch}
                handleClear={handleClear}
            />
            <TodoList 
                list={list} 
                handleDone={handleDone}
                handlePending={handlePending}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Todo 