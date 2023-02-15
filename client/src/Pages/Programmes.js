import React from 'react'
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './Programmes/Header'
import ProgramBody from './Programmes/ProgramBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const Programmes = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <ProgramBody />
            <Footer />
        </>
    )
}

export default Programmes