import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const CheckOut = ({handleSubmit, setSize, product}) => {
    const router = useRouter()
  return (
    <div className='row justify-content-center '>
        <div className='col-lg-3 m-3 rounded-3 shadow p-3'>
            <div className='row mb-3'><h3 className='text-center color-black'>Choose Size</h3></div>
            <div className='d-flex justify-content-evenly'>
                <div className='d-flex justify-content-center btn btn-primary rounded-circle'
                style={{width: '75px', height: '75px'}}
                ><h2 className='align-self-center mb-0'
                // onClick={() => setSize("regular")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "regular"
                    }
                    })}
                >R</h2></div>
                <div className='d-flex justify-content-center btn btn-primary rounded-circle'
                // style={{width: '100%'}}
                style={{width: '75px', height: '75px'}}
                ><h2 className='align-self-center mb-0'
                // onClick={() => setSize("large")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "large"
                    }
                    })}
                >L</h2></div>
                <div className='d-flex justify-content-center btn btn-primary rounded-circle'
                // style={{width: '100%'}}
                style={{width: '75px', height: '75px'}}
                ><h2 className='align-self-center mb-0'
                // onClick={() => setSize("extraLarge")}
                onClick={() => router.push({
                    pathname: "/products/[slug]",
                    query: {
                        slug: router.query.slug,
                        size: "extraLarge"
                    }
                    })}
                >XL</h2></div>
            </div>
        </div>
        <div className='col-lg-6 rounded-3 shadow py-3 px-5
         d-flex justify-content-between align-items-center '>
            <div className='d-flex align-items-center flex-wrap'>
                <div className='rounded-circle me-3 mb-3 mb-md-0' 
                style={{overflow: 'hidden',width: "100px", height: '100px'}}>
                <Image 
                    className='rounded-circle'
                    src={`${process.env.URL_BE}static/${product.data[0].cover}`}
                    width={100}
                    height={100}
                    alt={`gambar`}
                />
                </div>
                <div>
                    <h3 className='color-black'>{product?.data[0]?.name}</h3>
                    <p className='color-black'>{router.query.size}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='d-flex-column d-md-flex  align-items-center justify-content-center '>
                <h3 className='d-none d-md-inline-block me-3 color-black'>Checkout</h3>
                <button className='btn btn-primary   me-md-3 rounded-circle font-l ' onClick={handleSubmit}>
                <i className="bi bi-arrow-right-short" />
                </button>
            </div>
            </form>
        </div>
    </div>
    
  )
}

export default CheckOut