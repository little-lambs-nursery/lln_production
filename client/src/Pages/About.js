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