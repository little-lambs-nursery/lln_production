import LLNOffers from "./DifferenceContent/LLNOffers"
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"

const Offers = () => {
    return(
        <>
            <Navigation />
            <MobileNavigation />
            <LLNOffers />
            <Footer />
        </>
    )
}

export default Offers