import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CardProducts = ({product}) => {
  return (
    <Link href={`/products/${product.slug}?size=regular`}>
      <article className="col-3 d-flex flex-column align-items-center border rounded-5 mt-5 shadow me-3" style={{width: "11rem"}}>
        <legend className='d-flex text-center rounded-circle shadow' 
        style={{marginTop: "-40px", overflow: 'hidden', width: "125px", height: "125px"}}>
            <Image
            className='rounded-circle'
            // src="/img/contoh.png"
            src={`${process.env.URL_BE}static/${product.cover}`}
            width={125} 
            height={125}
            alt={product.name}    
            />
        </legend>
        <div className='text-center py-3 '>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    </article>
    </Link>
    
  )
}

export default CardProducts