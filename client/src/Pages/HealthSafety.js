import Header from "./HealthSafetyContent/Header"
import HealthSafetyBody from "./HealthSafetyContent/HealthSafetyBody"
import Footer from "./Includes/Footer/Footer"
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import Navigation from "./Includes/Navigation/Navigation"
import WhatsAppChat from "./WhatsAppChat"
import { Helmet } from 'react-helmet'

const HealthSafety = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <HealthSafetyBody />
            <Footer />
        </>
    )
}

export default HealthSafety