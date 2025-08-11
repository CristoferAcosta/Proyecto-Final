import { useState } from 'react'
import { Route, Routes } from 'react-router'
import LoginForm from './Screens/LoginForm/LoginForm'
import Invitado from './Screens/Invitado/Invitado'
import ProductDetalle from './Screens/ProductDetalle/ProductDetalle'

function App() {
  const [user, setUser] =  useState([])
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LoginForm setUser = {setUser}/> }/>
        <Route path='/Invitado' element = { <Invitado/> } />
        <Route path='/ProductCardList/:Product_id/ProductDetalle' element={<ProductDetalle />} />
      </Routes>
    </div>
  )
}

export default App
