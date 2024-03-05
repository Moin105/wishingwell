import "../Styles/PaymentConfirmPage.css";
import { FaCheck } from "react-icons/fa6";
import mastercard from "../images/mastercard.png"
import { IoIosClose } from "react-icons/io";

function PaymentConfirmPage(){
    return (
        <div className="container payment-page">
            <div className="wrapper">
                <div className="cancel-icon">
                    <IoIosClose />
                </div>
                <div className="confirm">
                <FaCheck className="check-icon" />
                </div>
                <div>
                    <h1 className="title">
                        Payment Confirmed!
                    </h1>
                    <h2 className="price">$425.24</h2>
                </div>
                <div className="para">
                    <span>
                        Your Payment has been confirmed, it may take 1-2 hours 
                        in order for your payment to go through and show up in your transation list.
                    </span>
                </div>
                <div className="card">
                    <img className="image" src={mastercard} alt="card"/>
                    <div className="text">
                        <p>Mastercard Ending in 4021</p>
                        <span>$425.24</span>
                    </div>
                </div>
            </div>
            <button className="custom-button">
            Go Home
            </button>
        </div>
    )

}

export default PaymentConfirmPage;