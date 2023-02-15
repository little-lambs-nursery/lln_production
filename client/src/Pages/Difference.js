import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from "./DifferenceContent/Header"
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import DifferenceBody from './DifferenceContent/DifferenceBody'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const Difference = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <DifferenceBody />
            <Footer />
        </>
    )
}

export default Difference