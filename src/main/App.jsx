import React from 'react';
import Routes from './routes'
import Menu from '../template/menu'
//import 'font-awesome'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  return (
    <div className="App">
        <Menu />
        <Routes />
    </div>
  );
}

export default App;
