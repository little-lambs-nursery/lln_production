import Header from "./HomeContent/Header"
import LLNCategory from "./HomeContent/LLNCategory"
import Location from "./HomeContent/Location"
import WhyLL from "./HomeContent/WhyLL"
import Footer from "./Includes/Footer/Footer"
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import Navigation from "./Includes/Navigation/Navigation"
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'


const Home = (props) => {
    return (
        <>
            <Helmet>
                
                <title>Best Nursery in Al Mankhool Dubai | Little Lambs Nursery</title>
                <meta name="description" content="Little Lambs Nursery LLC is a well recommended preschool daycare center in Mankhool, Dubai for early childhood learning and a secure environment." />
                <link rel="publisher" href="https://www.facebook.com/nurserylittlelambs" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/" />

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <WhyLL />
            <LLNCategory />
            <Location />
            <Footer />
        </>
    )
}

export default Home
