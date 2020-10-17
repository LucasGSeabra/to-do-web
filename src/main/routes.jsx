import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

function Routes(props) {
    return (
        <HashRouter>
            <Route path='/todo' component={Todo} />
            <Route path='/sobre' component={About} />
            <Redirect from='*' to='/todo' />
        </HashRouter>
    )
}

export default Routes