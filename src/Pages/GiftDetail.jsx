import React from 'react'
import Header from '../Components/Header/Header'
import '../Styles/Giftdetail.css'
function GiftDetail() {
  return (
    <>
    <Header/>
    <div className='gift-detail'>
    <h3>Gift Detail</h3>
     <p className='p-gift'>
        You have recieved <span>0.0$</span> from <span>0 gifts</span>
     </p>
    </div>
    </>
  )
}

export default GiftDetail