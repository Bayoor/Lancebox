import heroImage from "../../../assets/images/hero-image.png"
import './styles/herosection.css'
const HeroSection = () => {
  return (
    <section className="hero-bg">

        <div className="hero-wrapper c-container">
            <div className="hero-flex_item">
                <h1>Master your invoices, Master your business</h1>
                <p>Spend less time invoicing, more time growing with Lancebox!</p>

                <div className="hero-buttons">
                    <button>Create Quick Invoice</button>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="hero-flex_item">
                <img src={heroImage} alt="A mobile mock up" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection