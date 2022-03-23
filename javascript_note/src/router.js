import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './screens/home'

const Router = () => (
    <BrowserRouter>
       <Routes >
            <Route exact path='/home' element={<Home/>}/>
       </Routes>
    </BrowserRouter>
)

export default Router