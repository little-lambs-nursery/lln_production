import React from 'react'
import PrivacyPolicyContent from './CompanyPolicy/PrivacyPolicyContent'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import Navigation from './Includes/Navigation/Navigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'


const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <PrivacyPolicyContent />
            <Footer />
        </>
    )
}

export default PrivacyPolicy