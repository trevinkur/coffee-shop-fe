import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { useSWRConfig } from 'swr'

const CardHistory = ({item, userId, setCheck, check}) => {
  

  const handleCheck = () => {
    // if(check.find((check) => check.product_id === item.product_id && 
    //   check.size === item.size &&
    //   check.update_at === item.update_at
    // )) {
      console.log(item, 'ini item')
      console.log(check, 'ini check')

      if(check.find((check) => check === item)){
      // setCheck(prev => prev.filter((checks) => checks.product_id !== item.product_id && 
      // checks.size !== item.size &&
      // checks.update_at !== item.update_at))
      setCheck(prev => prev.filter((itemCheck) => itemCheck !== item))
    } else {
      setCheck(prev => [...prev, item])
    }
  }
  return (
    <div className='d-flex p-3 container bg-white rounded-3 shadow mb-4' style={{width: '20rem'}}>
        <Image 
            className='rounded-circle'
            src={`${process.env.URL_BE}static/${item.cover}`}
            width={75}
            height={75}
            alt={`gambar`}
        />
        <div className='d-flex flex-column mx-3' style={{width: "100%"}}>
            <p className='font-m color-black bold'>{item.product}</p>
            <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
                <p className='color-secondary font-s'>IDR {item.total_price} 
                <span className='bold'> {item.size}</span></p>
                <p className='color-secondary font-s'>{item.status}</p>
            </div>
            <button 
              className='rounded-1 font-xxs color-white d-flex justify-content-center'
              style={
                check.find((check) => check === item) ?
                {backgroundColor: '#6A4029', border: '1px solid #6A4029',
                width: '20px', height: '20px'} : 
                {border: '1px solid #6A4029', width: '20px', height: '20px'} 
                
              }  
              onClick={() => handleCheck(item)}>
                {
                  /* check.find((check) => check.product_id === item.product_id && 
                  check.size === item.size &&
                  check.update_at === item.update_at
                ) &&  */
                check.find((check) => check === item) &&
                <i class="bi bi-check-lg"></i>
                 }
              </button>
            </div>
        </div>
    </div>
  )
}

export default CardHistory