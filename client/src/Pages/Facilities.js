import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './FacilitiesContent/Header'
import FacilitiesBody from './FacilitiesContent/FacilitiesBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'

const Facilities = () => {
    return(
        <>
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