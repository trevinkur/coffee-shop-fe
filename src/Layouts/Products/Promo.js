import React, { useState } from 'react'
import CardPromo from './CardPromo'

const Promo = ({coupons}) => {
  

  // useEffect(() => {
  const handleCoupon = (e) => {
    localStorage.setItem("coupon", coupons?.data[0].code)
  }  
  // }, []) 
  return (
    <div className='col-3 p-4'>
        <div className='d-flex flex-column align-items-center'>
            <h3 className='color-primary mb-3'>Promo for you</h3>
            <p className='mb-5'>Coupons will be updated every weeks. Check them out! </p>
            <CardPromo coupons={coupons}/>
            <div className='d-grid gap-2  my-5'>
                <button className='btn btn-secondary px-5' 
                onClick={handleCoupon}
                >Apply Coupon</button>
            </div>
            <p>Terms and Condition</p>
            <ol>
                <li>You can only apply 1 coupon per day</li>
                <li> It only for dine in </li>
                <li> Buy 1 get 1 only for new user </li>
                <li> Should make member card to apply coupon </li>
            </ol>
        </div>
    </div>
  )
}

export default Promo