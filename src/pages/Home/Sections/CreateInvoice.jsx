import navigator from "../../../assets/icons/next.svg";
import inactiveNavigator from "../../../assets/icons/inactive.svg";
import tick from "../../../assets/icons/mark.svg";
import deleteIcon from "../../../assets/icons/delete.svg";

import "./styles/createinovice.css";

const CreateInvoice = () => {
  return (
    <section className="create-invoice c-container">
      <h2>Create a Quick invoice</h2>

      <div className="create-content_bg c-container">
        <div className="create-invoice_navigation">
          <div className="navigation-content">
            <span>Invoice Details</span>
            <img src={navigator} alt="" />
          </div>
          <div className="navigation-content inactive">
            <span>Bank Details</span>
            <img src={inactiveNavigator} alt="" />
          </div>
          <div className="navigation-content inactive">
            <span>Preview Invoice</span>
            <img src={inactiveNavigator} alt="" />
          </div>
          <div className="navigation-content inactive">
            <span>Download Invoice/Send to client</span>
            <img src={inactiveNavigator} alt="" />
          </div>

          <div className="navigation-content tick">
            <img src={tick} alt="" />
          </div>
        </div>

        <form className="form">
          <div className="form-invoice_number">
            <label htmlFor="">Invoice Number</label>
            <input type="number" name="" id="" placeholder="01" />
          </div>

          <div className="input-grid">
            <div>
              <label htmlFor="">Client’s Name</label>
              <input type="text" name="" id="" placeholder="Enter a Title" />
            </div>
            <div>
              <label htmlFor="">Your Name</label>
              <input type="text" name="" id="" placeholder="Enter a Title" />
            </div>
          </div>

          <div className="input-field_grid">
            <div className="input-field_wrapper">
              <label htmlFor="">Issuance Date</label>
              <input type="date" name="" id="" placeholder="22/02/2023" />
            </div>
            <div className="input-field_wrapper">
              <label htmlFor="">Currency</label>
              <select name="" id="">
                <option value="">Select</option>
                <option value="">Dollar</option>
                <option value="">Pound</option>
              </select>
            </div>
          </div>

          <div className="invoice-details">
            <h2>Invoice Details</h2>

            <div className="invoice-title">
              <label htmlFor="">Invoice Title</label>
              <input type="text" placeholder="Enter a Title" />
            </div>

            <div className="invoice-details_bg">
              <div className="invoice-details_content">
                <div className="flex-description">
                  <label htmlFor="">Item Description</label>
                  <input type="text" placeholder="Enter a description"/>
                </div>
                <div className="flex-quantity">
                  <label htmlFor="">Quantity</label>
                  <input type="text" placeholder="e.g 2.00"/>
                </div>
                <div className="flex-price">
                  <label htmlFor="">Price</label>
                  <input type="text" placeholder="e.g 3,000,000.00"/>
                </div>
                <div className="flex-amount">
                  <label htmlFor="">Amount</label>
                  <input type="text" placeholder="0.00"/>
                </div>

                <div className="delete-icon">
                  <img src={deleteIcon} alt="" />
                </div>
              </div>
              <a href="" className="invoice-details_link">
                Add New Item
              </a>
            </div>

            <div className="invoice-summary">
              <div className="summary-item">
                <p>SubTotal</p>
                <p className="summary-value">N 0.00</p>
              </div>

              <div className="summary-item">
                {/* <div> */}
                <p>VAT</p>
                {/* </div> */}
                <div className="vat-input">
                  <input type="text" readOnly />
                  <span>%</span>
                </div>
              </div>

              <div className="summary-item">
                <p>Shipping</p>
                <input id="shipping-item" type="text" readOnly />
              </div>

              <div className="summary-item">
                <p>Total</p>
                <p className="summary-value">N 0.00</p>
              </div>

              <button>Next</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateInvoice;
