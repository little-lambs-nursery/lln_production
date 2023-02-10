import React from 'react'
import Footer from '../Includes/Footer/Footer'
import MobileNavigation from '../Includes/MobileNavigation/MobileNavigation'
import Navigation from '../Includes/Navigation/Navigation'
import WhatsAppChat from '../WhatsAppChat'
import './Thankyou.css'
import enrollThankyou from '../../img/icons/enrollThankyou.png'

const EnrollThankyou = () => {
    return (
        <>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='thankuContent'>
                            <h1>THANK YOU FOR SUBMITTING</h1>
                            <img src={enrollThankyou} alt="enrollThankyou" className='img-fluid' />
                            <p>YOUR SUBMISSION HAS BEEN RECEIVED. WE WILL BE <br />
                                IN TOUCH & CONTACT YOU SOOON</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EnrollThankyou