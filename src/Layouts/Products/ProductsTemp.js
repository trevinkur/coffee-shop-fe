import React from 'react'
import CardProducts from './CardProducts'
import ProdCategory from './ProdCategory'

const ProductsTemp = ({products}) => {
  console.log(products)
  return (
    <div className='col p-5'>
        <div className='row mb-3'>
            <ProdCategory />
        </div>
        <div className='row justify-content-center mt-5'>
            {products?.data?.map((product) => (<CardProducts product={product} key={product.product_id}/>))}
        </div>
    </div>
  )
}

export default ProductsTemp