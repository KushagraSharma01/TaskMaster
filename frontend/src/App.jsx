import React from 'react'
import {Routes , Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Userlogin'
import Signup from './Components/Usersignup'
import AllEvents from './Components/AllEvents'
import AddEvent from './Components/AddEvent'
import EditEvent from './Components/EditEvent'

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/AllEvents' element={<AllEvents />}/>
          <Route path='/AddEvent' element={<AddEvent />}/>
          <Route path='/edit/:id' element={<EditEvent />}/>
        </Routes>
      </BrowserRouter>
        

    </div>
  )
}

export default App