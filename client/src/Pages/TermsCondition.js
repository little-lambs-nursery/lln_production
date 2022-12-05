import React from 'react'
import TermsConditionContent from './CompanyPolicy/TermsConditionContent'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import Navigation from './Includes/Navigation/Navigation'
import WhatsAppChat from './WhatsAppChat'

const TermsCondition = () => {
    return (
        <>
            <WhatsAppChat />
           <Navigation />
           <MobileNavigation />
           <TermsConditionContent />
           <Footer />
        </>
    )
}

export default TermsCondition