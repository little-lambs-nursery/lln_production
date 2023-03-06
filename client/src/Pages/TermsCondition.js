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
                <title>Little Lambs Nursery | Terms & Conditions </title>
                <meta name="description" content="Little Lamb Nursery uses comprehensible terms and conditions for users visiting their website. Visit our page to learn further about our agreement in detail!" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/term-and-conditions" />
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