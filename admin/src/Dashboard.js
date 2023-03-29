import { useEffect, useState } from 'react';
import { AdminState } from './Context';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
// import PieChart from './PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { BASEURL } from './Constants';
import Axios from 'axios';



const Dashboard = () => {
    const { admin, setAdmin } = AdminState()
    const navigate = useNavigate()
    const [data, setData] = useState()

    const fetchData = async () => {
        try {
            await Axios.get(`${BASEURL}api/admin/get-data`)
                .then(data => {
                    setData(data.data.data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    console.log(data)

    useEffect(() => {
        fetchData()
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
                            <div className='title'>
                                <h4>Admin</h4>
                            </div>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <Link to='/admin/enquiry'>
                                        <div className='dashboardCard'>
                                            <div className='dashboardCardHeader'>
                                                <ul>
                                                    <li>Total Enquiry</li>
                                                    <li>
                                                        <div className='dashboardCardIcon'>
                                                            <FontAwesomeIcon icon={faUser} />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='dashboardCardBody'>
                                                <h2>{data?.enquiryData}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <Link to='/admin/contact'>
                                        <div className='dashboardCard'>
                                            <div className='dashboardCardHeader'>
                                                <ul>
                                                    <li>Total Contact Enquiry</li>
                                                    <li>
                                                        <div className='dashboardCardIcon'>
                                                            <FontAwesomeIcon icon={faHeadphones} />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='dashboardCardBody'>
                                                <h2>{data?.contactData}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard