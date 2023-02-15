import LLNOffers from "./DifferenceContent/LLNOffers"
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import { Helmet } from 'react-helmet'

const Offers = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <Navigation />
            <MobileNavigation />
            <LLNOffers />
            <Footer />
        </>
    )
}

export default Offers