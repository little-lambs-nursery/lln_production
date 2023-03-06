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
                <title>Little Lambs Nursery | Privacy & Policy </title>
                <meta name="description" content="We use privacy policies and cookies to give users the best experience while protecting their personal information. Read our policies to learn further." />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/privacy-and-policy" />
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