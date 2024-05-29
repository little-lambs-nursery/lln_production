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
                <title>British Curriculum Nursery | Little Lambs</title>
                <meta name="description" content="Little Lambs Nursery LLC is a British Curriculum Nursery for childern in Mankhool, Dubai with multiple innovative programs. Contact now to learn more about us." />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/programmes" />

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