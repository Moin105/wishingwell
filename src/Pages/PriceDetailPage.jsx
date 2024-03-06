import React from 'react'
import '../Styles/PriceDetailPage.css'
import CustomInput from '../Components/Input/CustomInput'
import { Link } from 'react-router-dom'
function PriceDetailPage() {
  return (
    <div className='price-detail-page'>
    <div className='header'>
       <h3>
        SendWish
       </h3>
    </div>
      <div className='price-detail'>
           <p>
           Please select the amount you would like to gift:
           </p>
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
              <h2>
                Your Details
              </h2>
              <CustomInput label="First Name" placeholder="Enter Your First Name" />
      <CustomInput label="Last Name" type="text" placeholder="Enter Your Last Name" />
      <CustomInput label="Email" type="email" placeholder="Enter Your Email" />
      <CustomInput label="Your Message" type="text" placeholder="Enter Your Message" />
      <Link to={'/checkout'}>

      <button className='custom-buttons'>
                    Next
              </button>
      </Link>
      </div>
    </div>
  )
}

export default PriceDetailPage


