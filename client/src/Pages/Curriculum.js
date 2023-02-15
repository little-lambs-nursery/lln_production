import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './CurriculamContent/Header'
import CurriculumBody from './CurriculamContent/CurriculumBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'


const Curriculum = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <CurriculumBody />
            <Footer />
        </>
    )
}

export default Curriculum