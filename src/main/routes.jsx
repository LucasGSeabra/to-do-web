import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

function Routes(props) {
    return (
        <HashRouter>
            <Route path='/todo' component={Todo} />
            <Route path='/sobre' component={About} />
        </HashRouter>
    )
}

export default Routes