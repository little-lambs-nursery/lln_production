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
                <title>British Curriculum Nursery | Little Lambs</title>
                <meta name="description" content="Little Lambs Nursery LLC is a British Curriculum Nursery for childern in Mankhool, Dubai with multiple innovative programs. Contact now to learn more about us" />
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