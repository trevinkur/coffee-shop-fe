import Image from 'next/image'
import React from 'react';
import moment from 'moment';

const CardPromo = ({coupons}) => {
  return (
    coupons?.data?.map((item) => {
      return( <div key={item.code} className='card bg-primary'>
      <div className='card-body d-flex flex-column align-items-center border-bottom px-4' >
          <Image 
              className='rounded-circle '
              src="/img/contoh.png"
              width={125}
              height={125}
              alt="contoh"
          />
          <h3 className='mt-3'>{item.title}</h3>
          <h3>{item.discount}% OFF</h3>
          <p>{item.description}</p>
  
      </div>
          
      <div className='card-footer text-center'>
          <p>Coupon Code</p> 
          <h2>{item.code}</h2>
          <p>valid until {moment(item.valid).format("LL")}</p>
       </div>
      </div>)
    }) 
   
  )
}

export default CardPromo