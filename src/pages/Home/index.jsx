import Navbar from "../../layout/navbar/Navbar"
import Footer from "../../layout/footer/Footer"
import HeroSection from "./Sections/HeroSection"
import WhyLancebox from "./Sections/WhyLancebox"
import CreateInvoice from "./Sections/CreateInvoice"
import ComingSoon from "./Sections/ComingSoon"

const index = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhyLancebox />
    <CreateInvoice />
    <ComingSoon />
    <Footer />
    
    </>
  )
}

export default index