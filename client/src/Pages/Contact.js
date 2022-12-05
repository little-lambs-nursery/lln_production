import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './ContactContent/Header'
import ContactForm from './ContactContent/ContactForm'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'

const Contact = () => {
    return(
        <>
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