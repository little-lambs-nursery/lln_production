import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './AboutContent/Header'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import FounderWord from './AboutContent/FounderWord'
import MyChild from './AboutContent/MyChild'
import Founder from './AboutContent/Founder'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const About = (props) => {

    return (
        <>
            <Helmet>
                <title>Best Nursery in Al Mankhool Dubai | Little Lambs Nursery</title>
                <meta name="description" content="Little Lambs Nursery LLC is a well recommended preschool daycare center in Mankhool, Dubai for early childhood learning and a secure environment." />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/about-us" />
            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <FounderWord />
            <MyChild />
            <Founder />
            <Footer />
        </>
    )
}

export default About