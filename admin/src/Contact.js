import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ContactTable from "./ContactTable"
import { AdminState } from './Context';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const { admin, setAdmin } = AdminState()
    const navigate = useNavigate()

    useEffect(() => {
        if (!(admin.token)) {
            navigate("/admin/login")
        }
    }, [admin])

    return (
        <>
            <div className='container-fluid p-0'>
                <Navbar />
                <div className='row' style={{ marginRight: "0" }}>
                    <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12'>
                        <Sidebar />
                    </div>
                    <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
                        <div className='dashboardContent'>
                            <ContactTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact