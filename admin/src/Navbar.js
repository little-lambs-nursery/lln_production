import React from 'react'
import { AdminState } from './Context'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {

    const { admin, setAdmin } = AdminState()
    const navigate = useNavigate()

    return (
        <nav class="navbar navbar-expand-md navbar-dark mb-1 my-auto" style={{ backgroundColor: "#409fd5" }}>
            <div class="flex-row d-flex my-auto justify-content-center align-items-center">
                <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <img src='/logo.81e14bae7abf63931be9.webp' height="60rem" width="200rem"></img>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a> */}
                    </li>
                    {/* <li class="nav-item">
                            <a class="nav-link" href="//www.codeply.com">Link</a>
                        </li> */}
                </ul>
                <ul class="navbar-nav ml-auto">
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                    </li> */}
                    {admin && admin.token ?
                        <li class="nav-item my-auto">
                            <h5 style={{ color: "white", cursor: "pointer" }}
                                onClick={() => {
                                    setAdmin({})
                                    navigate('/admin/login')
                                }}
                            >Logout</h5>
                        </li>
                        :
                        <li class="nav-item">
                            <h5 style={{ color: "white", cursor: "pointer" }}
                                onClick={() => {
                                    // setAdmin({})
                                    navigate('/admin/login')
                                }}
                            >LogIn</h5>
                        </li>
                    }
                    {/* <li class="nav-item">
                        <a class="nav-link waves-effect waves-light text-white">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link waves-effect waves-light text-white">
                            <i class="fas fa-envelope-open-text"></i>
                        </a>
                    </li> */}
                    {/* <li class="nav-item">
                        <a class="nav-link waves-effect waves-light text-white">
                            <i class="fas fa-align-justify"></i>
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar