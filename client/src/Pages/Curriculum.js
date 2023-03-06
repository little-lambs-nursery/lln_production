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
                <title>Little Lambs Nursery | Curriculum </title>
                <meta name="description" content="We follow the Early years foundation stage curriculum to support the learning & development of children from 45 days to 5 years. Enrol your child now!" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/curriculum" />

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