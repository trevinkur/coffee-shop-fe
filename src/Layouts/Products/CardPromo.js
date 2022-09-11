import Image from 'next/image'
import React from 'react';
import moment from 'moment';
import styles from '../../styles/CardPromo.module.css'

const CardPromo = ({coupons, code, setCode}) => {
  
  const handleCoupon = (target) => {
    if(code === target) {
      setCode('')
    } else {
      setCode(target)
    }
  }
  return (
    coupons?.data?.map((item) => {
      return(
        <div key={item.coupon_id}
          className={`d-flex rounded-4 p-3 mb-3 ${styles.card} ${code === item.code && styles.active} `} 
          type='button'
          onClick={() => handleCoupon(item.code)}
          >
          <div className='me-3 align-self-center'>
            <Image 
              className='rounded-2'
              src={`${process.env.URL_BE}static/${item.cover}`}
              width={50}
              height={80}
              alt={`${item.title}`}
            />
          </div>
          <div className='' style={{width: '60%'}}>
            <h4 className='font-xs color-black mb-1'>{item.title}</h4>
            <p className='font-xxs color-black'>{item.description}</p>
          </div>
        </div>
      )
      // return( <div key={item.code} className='card bg-primary'>
      // <div className='card-body d-flex flex-column align-items-center border-bottom px-4' >
      //     <Image 
      //         className='rounded-circle '
      //         src="/img/contoh.png"
      //         width={125}
      //         height={125}
      //         alt="contoh"
      //     />
      //     <h3 className='mt-3'>{item.title}</h3>
      //     <h3>{item.discount}% OFF</h3>
      //     <p>{item.description}</p>
  
      // </div>
          
      // <div className='card-footer text-center'>
      //     <p>Coupon Code</p> 
      //     <h2>{item.code}</h2>
      //     <p>valid until {moment(item.valid).format("LL")}</p>
      //  </div>
      // </div>)
    }) 
   
  )
}

export default CardPromo