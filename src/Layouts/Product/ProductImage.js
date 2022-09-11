import Image from 'next/image'
import React, { useState } from 'react'

const ProductImage = (props) => {
    const { 
        setDelivery, delivery,
        setTime, product,
        now, setNow
    } = props

    const handleDelivery = (e) => {
        setDelivery(e.target.value)
    }

    const handleNow = (e) => {
        setNow(e.target.value)
    }
  return (
    <div className='col-lg-4 d-flex flex-column align-items-center p-3 m-3'>
    <div className='mb-5 text-center rounded-circle shadow-lg'
        style={{height: '250px', width: '250px'}}
        
    >
    <Image 
            className='rounded-circle'
            // src="/img/contoh.png"
            src={`${process.env.URL_BE}static/${product.data[0].cover}`}
            width={250}
            height={250}
            alt="contoh"
        />
    </div>
    <div className='container d-flex flex-column
     justify-content-center p-4
     shadow rounded-3'>
        <h3 className='color-black mb-3'>Delivery and Time</h3>
        <div className='d-flex mb-3'>
            <button className={ `${delivery === "dineIn" ? 'btn btn-secondary' : "btn btn-light"} me-3` } 
            onClick={handleDelivery} value="dineIn">Dine in</button>
            <button className={ `${delivery === "door" ? 'btn btn-secondary' : "btn btn-light"} me-3`} 
            onClick={handleDelivery} value="door">Door Delivery</button>
            <button className={ delivery === "pickUp" ? 'btn btn-secondary' : "btn btn-light"} 
            onClick={handleDelivery} value="pickUp">Pick Up</button>
        </div>
        <div className='row mb-3'>
            <div className='col-4'>
                <p>Now</p>    
            </div>
            <div className='col-6'>
                <button className={ `${now === "true" ? 'btn btn-secondary' : 'btn btn-light'} me-3`} onClick={handleNow} value="true">Yes</button>
                <button className={ `${now === "false" ? 'btn btn-secondary' : 'btn btn-light'} `} onClick={handleNow} value="false">No</button>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-4'>
                <p>Set Time</p>
            </div>
            <div className='col-8'>
            {now === "true" ? (
                <input type="time" className='form-control' placeholder='Enter time for reservation'
                onChange={(e) => setTime(e.target.value)}
                 />
            ) : (
                <input type="datetime-local" className='form-control' placeholder='Enter time for reservation'
                onChange={(e) => setTime(e.target.value)}
                 />
            )}
           
            </div>
            
        </div>
    </div>
        
    </div>
  )
}

export default ProductImage