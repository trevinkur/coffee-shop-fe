import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CardProducts = ({product}) => {
  return (
    <Link href={`/products/${product.slug}?size=regular`}>
      <article 
        className="col-3 d-flex flex-column align-items-center justify-content-between border rounded-5 shadow-lg mx-3 mt-2 mb-5"
        style={{width: "10rem"}} type="button">
        <legend className='d-flex text-center rounded-circle shadow' 
        style={{marginTop: "-40px", overflow: 'hidden', width: "125px", height: "125px"}}>
            <Image
            className='rounded-circle'
            src={`${process.env.URL_BE}static/${product.cover}`}
            width={125} 
            height={125}
            alt={product.name}    
            />
        </legend>
        <div className='text-center py-3 '>
            <h3 
              className='color-black'
            >{product.name}</h3>
            <p className='color-secondary bold'>IDR {product.price}</p>
        </div>
    </article>
    </Link>
    
  )
}

export default CardProducts