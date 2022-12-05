import React from 'react'
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './Programmes/Header'
import ProgramBody from './Programmes/ProgramBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'

const Programmes = () => {
    return (
        <>
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