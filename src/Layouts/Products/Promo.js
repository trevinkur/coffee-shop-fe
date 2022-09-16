import React, { useEffect, useState } from 'react'
import CardPromo from './CardPromo'

const Promo = ({coupons}) => {
  
  const [promo, setPromo] = useState(null)
  const [refetch, setRefetch] = useState(false)
  const [applyCoupon, setApplyCoupon] = useState('')

  useEffect(() => {
    setApplyCoupon(JSON.parse(localStorage.getItem('coupon')))
  },[refetch])

  console.log(applyCoupon?.title)

  const handleCoupon = (e) => {
    localStorage.setItem("coupon", JSON.stringify(promo))
    setRefetch(!refetch)
  }

  return (
    <div className='d-none d-md-block col-md-3 p-4 border-end' style={{height: '100%'}}>
        <div className='d-flex flex-column align-items-center justify-content-between mx-2' style={{minHeight: '100vh'}}>
            <div>
            <h3 className='color-secondary mb-3 text-center'>Promo for you</h3>
            <p className='mb-5 text-center color-black'>Coupons will be updated every weeks. Check them out! </p>
            </div>
            <div>
            <CardPromo 
              coupons={coupons}
              promo={promo}
              setPromo={setPromo}  
            />
            <div className='d-grid gap-2  my-4'>
                <button className='btn btn-secondary px-5' 
                onClick={handleCoupon}
                >Apply Coupon</button>
            </div>
            { applyCoupon && <p className='color-primary text-center mb-2 bold'>Coupon {applyCoupon?.title} Applied</p> }
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

export default Promo