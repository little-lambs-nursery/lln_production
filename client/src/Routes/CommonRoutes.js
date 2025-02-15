import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Branches from "../Pages/Branches"
import Curriculum from "../Pages/Curriculum"
import Difference from "../Pages/Difference"
import Facilities from "../Pages/Facilities"
import Gallery from "../Pages/Gallery"
import HealthSafety from "../Pages/HealthSafety"
import Home from "../Pages/Home"
import Offers from "../Pages/Offers"
import PrivacyPolicy from "../Pages/PrivacyPolicy"
import Programmes from "../Pages/Programmes"
import ScrollToTop from "../Pages/ScrollToTop"
import TermsCondition from "../Pages/TermsCondition"
import ContactThankyou from "../Pages/ThankYouPage/ContactThankyou"
import EnrollThankyou from "../Pages/ThankYouPage/EnrollThankyou"

const CommonRoutes = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/branches" element={<Branches />} />
                    <Route path="/LLN-the-difference" element={<Difference />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/health-and-safety" element={<HealthSafety />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/programmes" element={<Programmes />} />
                    <Route path="/term-and-conditions" element={<TermsCondition />} />
                    <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
                    <Route path="/Thank-You" element={<EnrollThankyou />} />
                    <Route path="/contact-us/Thank-You" element={<ContactThankyou />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default CommonRoutes