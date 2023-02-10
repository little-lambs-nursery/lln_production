import React from 'react'
import Footer from '../Includes/Footer/Footer'
import MobileNavigation from '../Includes/MobileNavigation/MobileNavigation'
import Navigation from '../Includes/Navigation/Navigation'
import WhatsAppChat from '../WhatsAppChat'
import contactThankyou from '../../img/icons/contactThankyou.png'
import './Thankyou.css'

const ContactThankyou = () => {
    return (
        <>
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