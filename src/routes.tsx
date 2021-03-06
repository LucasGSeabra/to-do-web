import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import Todo from './pages/Todo';
import About from './pages/About';

function Routes() {
  return (
    <HashRouter>
      <Route path="/todo" component={Todo} />
      <Route path="/sobre" exact component={About} />
      <Redirect from="*" to="/todo" />
    </HashRouter>
  );
}

export default Routes;
