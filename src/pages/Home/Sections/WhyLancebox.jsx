import markIcon from "../../../assets/icons/mark.svg";
import mobileMockup from "../../../assets/images/mobile-mockup.png";
import signUp from "../../../assets/icons/create.svg"
import completeForm from "../../../assets/icons/completeForm.svg"
import download from "../../../assets/icons/download.svg"
import save from "../../../assets/icons/save.svg"

import "./styles/whylancebox.css";

const WhyLancebox = () => {
  return (
    <section className="whylancebox">
      <div className="whylancebox-wrapper c-container">
        <div className="whylancebox-content">
          <h2>Why Lancebox?</h2>

          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Spend less time invoicing, more time growing with Lancebox!</p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Enhance your professional image with branded invoices.</p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Present polished and professional invoices to your clients.</p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>
              Strengthen client relationships with prompt and accurate
              invoicing.
            </p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Stay organized and never miss a payment again.</p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Get paid faster with streamlined invoicing processes.</p>
          </div>
          <div className="whylancebox-flex_item">
            <img src={markIcon} alt="A mark icon" />
            <p>Manage your invoices anytime, anywhere, from any device.</p>
          </div>
        </div>

        <div className="whylancebox-image">
          <img src={mobileMockup} alt="" />
        </div>
      </div>

      <div className="how-lancebox_works c-container">
        <div className="lancebox-heading">
          <h2>How Lancebox Works</h2>
          <p>Streamline your invoicing process, get paid faster and spend less time invoicing</p>
        </div>

        <div className="lancebox-card">
          <div className="lancebox-card_item">
            <img src={signUp} alt="" />
            <h3>No Sign Up required</h3>
            <p>Click on create quick invoice without having to create an account or sign up.</p>
          </div>

          <div className="lancebox-card_item">
            <img src={completeForm} alt="" />
            <h3>Complete Form </h3>
            <p>Fill the form to create invoice  from the Dashboard/ a quick invoice. Add product details, line items, , tax rates, and more.</p>
          </div>

          <div className="lancebox-card_item">
            <img src={download} alt="" />
            <h3>Download/Send Invoice</h3>
            <p>Download  your invoice  or send to  client to view</p>
          </div>

          <div className="lancebox-card_item">
            <img src={save} alt="" />
            <h3>Save Invoice</h3>
            <p>Save your invoice to view/ edit later</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLancebox;
