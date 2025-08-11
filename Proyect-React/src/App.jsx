import { useState } from 'react'
import { Route, Routes } from 'react-router'
import LoginForm from './Components/LoginForm/LoginForm'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = { <LoginForm/> }/>
      </Routes>
    </div>
  )
}

export default App
