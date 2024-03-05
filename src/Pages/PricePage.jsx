import React from 'react'
import '../Styles/PricePage.css'
function PricePage() {
  return (
    <div className='price-page'>
         <div className='price-container'>
              <h2>
                SendWish
              </h2>
              <p>
              Thank you for your generosity!
              </p>
              <span>
              Please select the amount you would like to gift:
              </span>
              <button className='custom-button'>
                    $10
              </button>
              <button className='custom-button'>
                    $25
              </button>
              <button className='custom-button'>
                    $50
              </button>
              <button className='custom-button'>
                    $100
              </button>
              <button className='custom-black-button'>
                    Custom Amount
              </button>

              <div className='proceed-section'>
                    <p>
                    Please proceed to the payment gateway to complete your transaction.
                    </p>
              </div>
                    <button className='custom-button'>
                    Proceed to Payment
                    </button>
         </div>
    </div>
  )
}

export default PricePage