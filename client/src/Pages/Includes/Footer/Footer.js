import './Footer.css'
import logo from '../../../img/logo/logo.webp'
import { Link } from 'react-router-dom'
import facebook from '../../../img/icons/footerFacebook.webp'
import instagram from '../../../img/icons/footerInstagram.webp'
import twitter from '../../../img/icons/footerTwitter.webp'
import youtube from '../../../img/icons/footerYoutube.webp'
import linkedin from '../../../img/icons/footerLinkedin.webp'
import React, { useState } from 'react'
import EnrollFormModal from '../EnrollForm/EnrollFormModal'

const Footer = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <section className="container-fluid p-0">
                <div className="footerEnrollBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footerEnroll">
                                    <ul>
                                        <li>Enroll Your Child At Little Lambs Nursery</li>
                                        <li>
                                            <button onClick={() => setModalShow(true)}>Click Here</button>
                                            <EnrollFormModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBg">
                    <div className="container">
                        <div className="row">
                            <div className="co-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footerLogo">
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </div>
                            </div>
                            <div className="co-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footerList">
                                    <h4>PROGRAMMES</h4>
                                    <ul>
                                        <li>
                                            <Link to="/programmes">Pre School</Link>
                                        </li>
                                        <li>
                                            <Link to="/programmes">Nursery</Link>
                                        </li>
                                        <li>
                                            <Link to="/programmes">Foudation Stages</Link>
                                        </li>
                                        <li>
                                            <Link to="/programmes">Smart Juniors</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="co-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footerList">
                                    <h4>INFORMATION</h4>
                                    <ul>
                                        <li>
                                            <Link to="/contact-us">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/term-and-conditions">Terms & Condition</Link>
                                        </li>
                                        <li>
                                            <Link to="/privacy-and-policy">Privacy & Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="co-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footerList">
                                    <h4>ADDRESS</h4>
                                    <ul>
                                        <li>
                                            Villa no 22,
                                            317- 33rd Street,
                                            Near Mankhool Park/ADCB metro station,
                                            Bur Dubai
                                        </li>
                                    </ul>

                                    <h4>TIMINGS</h4>
                                    <ul>
                                        <li>
                                            Monday - Friday<br />
                                            7:00 AM - 6:00 PM
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='copyrightBox'>
                                    <p>© 2022 Little Lambs Nursery All Rights Reserved. | <Link to="#">Sitemap</Link></p>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='footerSocialLinks'>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={facebook} alt="facebook" className='img-fluid' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={instagram} alt="instagram" className='img-fluid' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={linkedin} alt="linkedin" className='img-fluid' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={youtube} alt="youtube" className='img-fluid' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={twitter} alt="twitter" className='img-fluid' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
