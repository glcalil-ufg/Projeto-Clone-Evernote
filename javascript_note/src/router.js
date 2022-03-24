import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './screens/home'
import Notes from './screens/notes'
import UserEdit from './screens/user'
import Login from './screens/auth/login'
import Register from './screens/auth/register'

const Router = () => (
    <BrowserRouter>
       <Routes >
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/user' element={<UserEdit/>}/>
            <Route exact path='/notes' element={<Notes/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>

       </Routes>
    </BrowserRouter>
)

export default Router