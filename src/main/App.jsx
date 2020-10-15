import React from 'react';
import Todo from '../todo/todo'
import Menu from '../template/menu'
//import 'font-awesome'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  return (
    <div className="App">
        <Menu />
        <Todo />
    </div>
  );
}

export default App;
