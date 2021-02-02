import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

function Routes(props) {
    return (
        <HashRouter>
            <Route path='/' component={Todo} />
            <Route path='/sobre' exact component={About} />
            <Redirect from='*' to='/' />
        </HashRouter>
    )
}

export default Routes