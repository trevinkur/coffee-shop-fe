import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const CheckOut = ({handleSubmit, setSize, product}) => {
    const router = useRouter()
  return (
    <div className='row justify-content-center '>
        <div className='col-3 m-3 rounded-3 shadow p-3'>
            <div className='row mb-3'><h3 className='text-center'>Choose Size</h3></div>
            <div className='row justify-content-evenly'>
                <div className='col-3 '>
                <button className='btn btn-primary rounded-circle'
                style={{width: "70px", height: "70px"}}><h2 className='text-center'
                // onClick={() => setSize("regular")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "regular"
                    }
                    })}
                >R</h2></button>
                </div>
                <div className='col-3 '>
                <button className='btn btn-primary rounded-circle'
                style={{width: "70px", height: "70px"}}><h2 className='text-center'
                // onClick={() => setSize("large")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "large"
                    }
                    })}
                >L</h2></button>
                </div>
                <div className='col-3 '>
                <button className='btn btn-primary rounded-circle'
                style={{width: "70px", height: "70px"}}><h2 className='text-center'
                // onClick={() => setSize("extraLarge")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "extraLarge"
                    }
                    })}
                >XL</h2></button>
                </div>   
            </div>
        </div>
        <div className='col-6 rounded-3 shadow p-3 d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
                <div className='rounded-circle me-3' 
                style={{overflow: 'hidden',width: "100px", height: '100px'}}>
                <Image 
                    className='rounded-circle'
                    src="/img/contoh.png"
                    width={100}
                    height={100}
                    alt={`gambar`}
                />
                </div>
                <div>
                    <h3>{product?.data[0]?.name}</h3>
                    <p>{router.query.size}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='d-flex'>
                <h3 className='me-3'>Checkout</h3>
                <button className='btn btn-primary me-3' onClick={handleSubmit}>U+2192</button>
            </div>
            </form>
        </div>
    </div>
    
  )
}

export default CheckOut