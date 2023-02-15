import React from 'react'
import TermsConditionContent from './CompanyPolicy/TermsConditionContent'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import Navigation from './Includes/Navigation/Navigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const TermsCondition = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <TermsConditionContent />
            <Footer />
        </>
    )
}

export default TermsCondition