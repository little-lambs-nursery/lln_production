import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#f9f9f9", color: "white" }}>
            <ul class="nav flex-column sticky-top pl-0 pt-1 p-3 mt-3" >
                <li class="nav-item mb-2 mt-3">
                    <Link to='/admin' >
                        <h5>Hai Admin</h5>
                    </Link>
                </li>
                <li class="nav-item mb-2 ml-3">
                    <Link to='/admin/enquiry' >
                        <i class="fas fa-user font-weight-bold"></i>
                        <span className="ml-3">Enquiries</span>
                    </Link>
                </li>
                {/* <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                        <i class="far fa-file-word font-weight-bold"></i>
                        <span className="ml-3"> Reports▾</span>
                    </a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                        <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>
        </div>
    )
}

export default Sidebar