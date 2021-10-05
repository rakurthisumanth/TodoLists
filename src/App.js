
import React from 'react'
import AppBar from '@mui/material/AppBar';

import Todo from './Components/Todo'

function App() {
  return (
    <div>
      <AppBar position="static">
        <center>
        <h1> Todo List..</h1>
        </center>
        </AppBar>
        <br/>
      <center>

      <Todo/>
      </center>
    </div>
  )
}

export default App
