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
                <title>Little Lambs Nursery | About Us </title>
                <meta name="description" content="We at Little Lambs Nursery LLC provide the best quality curriculum for children with multiple innovative programs. Contact now to learn more about us." />
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