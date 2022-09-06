import React from 'react'

const ProductDetail = ({quantity, setQuantity, product, price}) => {
    console.log(quantity)
    const handleQuantity = (e) => {
        console.log("ini handle")
        if(e.target.value === "plus") {
            setQuantity(quantity + 1)
        } else { 
            if(quantity < 1) {
                setQuantity(0)
            } else {
                setQuantity(quantity - 1)
            }
        }    
        
    }

  return (
    <div className='col-4 p-3 m-3'>
        <h1 className='my-5 text-center'>{product.data[0].name}</h1>
        <p className='mb-3'>Cold brewing is a method of brewing that combines
         ground coffee and cool water and uses time instead of 
         heat to extract the flavor. It is brewed in small batches
          and steeped for as long as 48 hours.</p>
        <p className='my-3'>Delivery only on <span className='color-primary'>Monday to friday at  1 - 7 pm</span></p>
        <div className='d-flex justify-content-between my-4'>
            <div className='d-flex align-items-center'>
                <button className='' onClick={handleQuantity}
             value="minus">-</button>
                <p className='p-3'>{quantity}</p>
                <button onClick={handleQuantity}
             value="plus">+</button>
            </div>
            <h2>IDR {price}</h2>
        </div>
        <div className='d-grid gap-2 m-3'>
            <button className='btn btn-secondary py-3' >Add to Cart</button>
        </div>
        <div className='d-grid gap-2 m-3'>
            <button className='btn btn-primary py-3' >Ask a Staff</button>
        </div>
        

    </div>
  )
}

export default ProductDetail