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
                <title>Little Lambs Nursery | Contact Us </title>
                <meta name="description" content="Contact Little Lambs Nursery LLC, for any query or information regarding the foundation stage programs, curriculum, facilities, admissions etc. Contact us." />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/contact-us" />
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