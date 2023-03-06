import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from "./DifferenceContent/Header"
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import DifferenceBody from './DifferenceContent/DifferenceBody'
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'

const Difference = () => {
    return (
        <>
            <Helmet>
                <title>Little Lambs Nursery | LLN The Difference </title>
                <meta name="description" content="We provide top-class training, healthy environment & classroom, personalised growth & learning opportunities for children. Enroll your child at our nursery now!" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/LLN-the-difference" />
            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <DifferenceBody />
            <Footer />
        </>
    )
}

export default Difference