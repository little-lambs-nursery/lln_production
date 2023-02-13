import React from 'react'
import Footer from '../Includes/Footer/Footer'
import MobileNavigation from '../Includes/MobileNavigation/MobileNavigation'
import Navigation from '../Includes/Navigation/Navigation'
import WhatsAppChat from '../WhatsAppChat'
import './Thankyou.css'
import enrollThankyou from '../../img/icons/enrollThankyou.png'
import { Helmet } from 'react-helmet'

const EnrollThankyou = () => {
    return (
        <>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11084316064" />
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-11084316064');
                    `}
                </script>
                <script>
                    {`gtag('event', 'conversion', {'send_to': 'AW-11084316064/GUnJCI70x4sYEKD7tKUp'});`}
                </script>


            </Helmet>
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