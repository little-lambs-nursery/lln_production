import './MobileNavigation.css'
import logoCloud from "../../../img/logo/logo_cloud.webp"
import logo from "../../../img/logo/logo.webp"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <section className="navigationSlider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="logoBox">
                                <Link to="/">
                                    <div className="mobileLogo">
                                        <img src={logo} alt="logo" className="img-fluid" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="menubar">
                                <div className="mobile-menu" onClick={() => setActive(!active)}>
                                    <div className={active ? 'menu_click active' : 'menu_click'}>
                                        <div id="top"></div>
                                        <div id="middle"></div>
                                        <div id="bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={active ? 'mobileSliderBox active' : 'mobileSliderBox'}>
                <div className='mobileSliderContent'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className='mobileSliderContentList'>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/about-us">
                                <li>About us</li>
                            </Link>
                            <Link to="/curriculum">
                                <li>curriculam</li>
                            </Link>
                            <Link to="/programmes">
                                <li>programmes</li>
                            </Link>
                            <Link to="/offers">
                                <li>offers</li>
                            </Link>
                            <Link to="/facilities">
                                <li>facilities</li>
                            </Link>
                            <Link to="/contact-us">
                                <li>contact us</li>
                            </Link>
                        </ul>
                        <h4>Visit Us Daily:</h4>
                        <p>Villa no 22,
                            317- 33rd Street,
                            Near Mankhool Park/ADCB metro station,
                            Bur Dubai</p>
                        {/* <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:mail.littlelambs@gmail.com">mail.littlelambs@gmail.com</a></p>
                        <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+971 504812715">+971 504812715</a></p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavigation