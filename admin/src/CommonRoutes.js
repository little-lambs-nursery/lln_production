import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Enquiry from './Enquiry'
import Login from './Login'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const CommonRoutes = () => {
    return (
        <div>
        <Navbar />
        <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
        
        <Sidebar/>
        <Routes>
            <Route path='/admin' element={<Enquiry />} exact/>
            <Route path='/admin/login' element={<Login />} />
            <Route path='/admin/enquiry' element={<Enquiry />} />
        </Routes>
        </div>
      </div>
    </div>
    )
}

export default CommonRoutes