import React from 'react'
import Footer from '../Includes/Footer/Footer'
import MobileNavigation from '../Includes/MobileNavigation/MobileNavigation'
import Navigation from '../Includes/Navigation/Navigation'
import WhatsAppChat from '../WhatsAppChat'
import contactThankyou from '../../img/icons/contactThankyou.png'
import './Thankyou.css'
import { Helmet } from "react-helmet";


const ContactThankyou = () => {
    return (
        <>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11084316064" />
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'AW-11084316064');
                    `}
                </script>
                <script>
                    {`gtag('event', 'conversion', {'send_to': 'AW-11084316064/FZQsCOOSxosYEKD7tKUp'});`}
                </script>


            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='thankuContent'>
                            <h1>thank you</h1>
                            <img src={contactThankyou} alt="contactThankyou" className='img-fluid' />
                            <p>Thank You, We Will Contact You Soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactThankyou