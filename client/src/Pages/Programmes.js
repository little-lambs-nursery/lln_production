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
                <title>Little Lambs Nursery | Programmes </title>
                <meta name="description" content="At Little Lambs Nursery LLC, we provide multiple holistic development programmes for the proper development of children. So enroll your child at our nursery now!" />
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