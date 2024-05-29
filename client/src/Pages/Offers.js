import LLNOffers from "./DifferenceContent/LLNOffers"
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import { Helmet } from 'react-helmet'

const Offers = () => {
    return (
        <>
            <Helmet>
                <title> Affordable Nursery Offers | Little Lambs Nursery</title>
                <meta name="description" content="We offer affordable nursery fees at Little Lambs in Dubai. Choose your plan and get amazing discounts Now!" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/offers" />
            </Helmet>
            <Navigation />
            <MobileNavigation />
            <LLNOffers />
            <Footer />
        </>
    )
}

export default Offers