import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './FacilitiesContent/Header'
import FacilitiesBody from './FacilitiesContent/FacilitiesBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const Facilities = () => {
    return (
        <>
            <Helmet>
                <title>Little Lambs Nursery | Facilities </title>
                <meta name="description" content="At Little Lambs Nursery LLC, we have all the facilities a nursery would need. Your child will have access to all facilities to enhance the overall growth of your child." />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/facilities" />

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <FacilitiesBody />
            <Footer />
        </>
    )
}

export default Facilities