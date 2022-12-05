import Header from "./HealthSafetyContent/Header"
import HealthSafetyBody from "./HealthSafetyContent/HealthSafetyBody"
import Footer from "./Includes/Footer/Footer"
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import Navigation from "./Includes/Navigation/Navigation"
import WhatsAppChat from "./WhatsAppChat"

const HealthSafety = () => {
    return(
        <>
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