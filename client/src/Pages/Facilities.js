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