import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './ContactContent/Header'
import ContactForm from './ContactContent/ContactForm'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact