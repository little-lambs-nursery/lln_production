import './Navigation.css'
import logoCloud from "../../../img/logo/logo_cloud.webp"
import logo from "../../../img/logo/logo.webp"
import mail from '../../../img/home/headerMail.png'
import call from '../../../img/home/headerCall.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import EnrollFormModal from '../EnrollForm/EnrollFormModal'


const Navigation = () => {
    const [modalShow, setModalShow] = useState(false);
    const [stickyNav, setStickyNav] = useState()
    const stickyNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 40 ? setStickyNav('stickyNav') : setStickyNav("null")
    }
    useEffect(() => {
        window.addEventListener("scroll", stickyNavbar)
    }, [])

    return (
        <>
            <EnrollFormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <section className="container-fluid p-0">
                <div className='navigationBg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className='logo'>
                                    <Link to="/">
                                        <img src={logo} alt="logo" className='img-fluid' />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='headerContactList'>
                                    <ul>
                                        <li>
                                            <img src={mail} alt="mail" className="img-fluid" />  <a href="mailto:info@nurserylittlelambs.com">info@nurserylittlelambs.com</a>
                                        </li>
                                        <li>
                                            <img src={call} alt="call" className="img-fluid" /> <a href="tel:+971 524438743">+971 524438743</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className='headerButton'>
                                    <button onClick={() => setModalShow(true)}>Enroll your child </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid p-0'>
                <div className={`bottomNavigation ${stickyNav}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='navigatonMenuList'>
                                    <uL>
                                        <li>
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">ABOUT</Link>
                                        </li>
                                        <li>
                                            <Link to="/curriculum">CURRICULAM</Link>
                                        </li>
                                        <li>
                                            <Link to="/programmes">Programmes</Link>
                                        </li>
                                        <li>
                                            <Link to="/offers">Offers</Link>
                                        </li>
                                        <li>
                                            <Link to="/facilities">Facilities</Link>
                                        </li>
                                        <li>
                                            <Link to="/branches">BRANCHES</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">CONTACT</Link>
                                        </li>
                                        <li>
                                            <a href="https://www.blog.nurserylittlelambs.com/" target="_blank">Blog</a>
                                        </li>
                                    </uL>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navigation