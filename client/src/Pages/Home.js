import Header from "./HomeContent/Header"
import LLNCategory from "./HomeContent/LLNCategory"
import Location from "./HomeContent/Location"
import WhyLL from "./HomeContent/WhyLL"
import Footer from "./Includes/Footer/Footer"
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import Navigation from "./Includes/Navigation/Navigation"
import WhatsAppChat from './WhatsAppChat'
import { Helmet } from 'react-helmet'


const Home = (props) => {
    return (
        <>
            <Helmet>
                <title>Little Lambs Nursery | Best Nursery in Al Mankhool,Dubai</title>
                <meta name="description" content="Little Lambs Nursery LLC is a well-recommended preschool & daycare center for early childhood learning and a secure environment in Mankhool, Dubai." />
                <link rel="publisher" href="https://www.facebook.com/nurserylittlelambs" />
                <link rel="canonical" href="https://www.nurserylittlelambs.com/" />
        
        <script type=""application/ld+json"">
{
  ""@context"" : ""http://schema.org"",
  ""@type"" : ""Organization"",
  ""name"" : ""Little Lambs Nursery"",
 ""url"" : ""https://www.nurserylittlelambs.com/"",
 ""logo"": ""https://www.nurserylittlelambs.com/static/media/logo.da83167e5538e10e6c23.webp"",
  ""description"": ""Little Lambs Nursery LLC is a well-recommended preschool & daycare centre for early childhood learning and a secure environment in Mankhool, Dubai.""
 ""sameAs"" : [ ""https://www.linkedin.com/company/nursery-little-lambs/"",
                ""https://www.facebook.com/nurserylittlelambs"",
                ""https://twitter.com/nursery_lambs"",]
  ""address"": {
    ""@type"": ""PostalAddress"",
    ""Street Address"": ""33rd Street. Near Mankhool Park/ ADCB Metro Statio"",
    ""State"": ""Unite"",
    ""Country"": ""United Arab Emirates""
    ""Phone Number"": ""+971 524438743""

  }
}
</script> 

        
            </Helmet>
            <WhatsAppChat />
            <Navigation />
            <MobileNavigation />
            <Header />
            <WhyLL />
            <LLNCategory />
            <Location />
            <Footer />
        </>
    )
}

export default Home
