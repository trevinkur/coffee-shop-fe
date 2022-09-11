import React from 'react'

const ProductDetail = ({quantity, setQuantity, product, price}) => {
    console.log(quantity)
    const handleQuantity = (e) => {
        console.log(e.target.id , 'quantity')
        if(e.target.id === "plus") {
            setQuantity((prev) => prev + 1)
        } else { 
            if(quantity < 1) {
                setQuantity(0)
            } else {
            setQuantity((prev) => prev - 1)
            }
        }    
        
    }

  return (
    <div className='col-lg-4 p-3 m-3'>
        <h1 className='my-5 text-center color-black'>{product.data[0].name}</h1>
        <p className='mb-3 color-secondary'>{product.data[0].description}</p>
        <p className='my-3 color-secondary'>Delivery only on <span className='color-secondary bold'>Monday to friday at  1 - 7 pm</span></p>
        <div className='d-flex justify-content-between my-4 align-items-center'>
            <div 
                className='d-flex align-items-center border border-2 rounded-3'
                type='button'
                // style={{height: '40px'}}
            >
                <div className='border-end py-2 px-3 color-secondary bold ' onClick={handleQuantity}
                id="minus">-</div>
                <div className='py-2 px-3 color-secondary bold  '>{quantity}</div>
                <div
                    className='border-start py-2 px-3 color-secondary bold '
                    type='button'
                    onClick={handleQuantity}
                    id="plus"
                >+</div>
            </div>
            <h2 className='color-black'>IDR {price}</h2>
        </div>
        <div className='d-grid gap-2 m-3'>
            <button className='btn btn-secondary py-3 bold' >Add to Cart</button>
        </div>
        <div className='d-grid gap-2 m-3'>
            <button className='btn btn-primary py-3 bold' >Ask a Staff</button>
        </div>
        

    </div>
  )
}

export default ProductDetail