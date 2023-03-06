import LLNOffers from "./DifferenceContent/LLNOffers"
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import { Helmet } from 'react-helmet'

const Offers = () => {
    return (
        <>
            <Helmet>
                <title>Little Lambs Nursery | Offers </title>
                <meta name="description" content="We have flexible plans along with the most suitable learning environment for your kids. Choose your plan and get amazing discounts!" />
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