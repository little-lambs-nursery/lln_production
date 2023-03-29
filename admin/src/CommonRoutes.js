import React from 'react'
import { Routes, Route } from "react-router-dom"
import Contact from './Contact'
import Dashboard from './Dashboard'
import Enquiry from './Enquiry'
import Login from './Login'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const CommonRoutes = () => {
    return (
        <div>
            <div class="container-fluid" id="main">
                <div class="row row-offcanvas row-offcanvas-left">
                    <Routes>
                        {/* <Route path='/' element={<Dashboard />} exact /> */}
                        <Route path='/admin' element={<Dashboard />} />
                        <Route path='/admin/login' element={<Login />} />
                        <Route path='/admin/enquiry' element={<Enquiry />} />
                        <Route path='/admin/contact' element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default CommonRoutes