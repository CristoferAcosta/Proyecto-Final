import { useState } from 'react'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = { <h1>Hola mundo</h1> }/>
      </Routes>
    </div>
  )
}

export default App
