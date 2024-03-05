import CustomInput from "../Components/Input/CustomInput";
import "../Styles/CheckoutPage.css";
import { IoMdArrowBack, IoMdInformationCircleOutline } from "react-icons/io";
import { FaApple, FaPaypal } from "react-icons/fa";

function CheckoutPage() {
  return (
    <div className="container checkout-page">
      <div className="stripe-container">
        Stripe
      </div>
      <div className="notch"></div>
      <div className="header">
          <IoMdArrowBack className='back-icon' />
          <div className="content">
            <h3>Checkout</h3>
            <p>Fill in the information below to place your order.</p>
          </div>
      </div>
      <div className="content-wrapper">
        <CustomInput type="number" label='Card number' />
        <div className="inputs-wrapper">
          <CustomInput type="date" label='Exp. Date' />
          <CustomInput type="number" label='CVV' placeholder='123' />
        </div>
        <p className="bold-text">Message</p>
        <p className="gray-text">RIP. Wishing you the best.</p>
        <div className="amount-wrapper">
          <p className="gray-text">Gift Amount</p>
          <h4>$100.00</h4>
        </div>
        <div className="amount-wrapper">
          <p className="gray-text">Fee</p>
          <h4>$5.00</h4>
        </div>
        <div className="amount-wrapper">
          <p className="gray-text-large">Total <IoMdInformationCircleOutline className="icon" /></p>
          <h2>$105.00</h2>
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="custom-button">Pay w/ Credit Card</button>
        <p className="gray-text">Or use an option below</p>
        <button className="custom-button"><FaApple />Apple Pay</button>
        <button className="custom-button"><FaPaypal />Pay w/Paypal</button>
      </div>
      <div className="gray-box"></div>
    </div>
  );
}

export default CheckoutPage;