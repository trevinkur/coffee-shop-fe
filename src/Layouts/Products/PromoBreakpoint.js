import React, { useState } from 'react'
import CardPromo from './CardPromo'

const PromoBreakpoint = ({coupons}) => {
  
  const [code, setCode] = useState('')
  
  const handleCoupon = (e) => {
    localStorage.setItem("coupon", code)
  }

  return (
    <div className='d-block d-md-none col-md-3 p-4 border-end' style={{height: '100%'}}>
        <div className='d-flex flex-column align-items-center justify-content-between mx-2' style={{minHeight: '100vh'}}>
            <div>
            <h3 className='color-secondary mb-3 text-center'>Promo for you</h3>
            <p className='mb-5 text-center color-black'>Coupons will be updated every weeks. Check them out! </p>
            </div>
            <div>
            <CardPromo 
              coupons={coupons}
              code={code}
              setCode={setCode}  
            />
            <div className='d-grid gap-2  my-4'>
                <button className='btn btn-secondary px-5' 
                onClick={handleCoupon}
                >Apply Coupon</button>
            </div>
            </div>  
            <div>
            <p className='mb-2 text-center bold'>Terms and Condition</p>
            <ol>
                <li className='font-xs'>You can only apply 1 coupon per day</li>
                <li className='font-xs'> It only for dine in </li>
                <li className='font-xs'> Buy 1 get 1 only for new user </li>
                <li className='font-xs'> Should make member card to apply coupon </li>
            </ol>
            </div>
            
        </div>
    </div>
  )
}

export default PromoBreakpoint