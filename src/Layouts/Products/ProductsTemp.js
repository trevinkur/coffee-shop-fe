import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useGetProducts } from '../../helper/useProducts'
import CardProducts from './CardProducts'
import ProdCategory from './ProdCategory'

const ProductsTemp = ({products}) => {
  const router = useRouter()
  const {search, category} = router.query 
  const {
    data, isLoading, isError
  } = useGetProducts({search: search, category })

  return (
    <div className='col-md px-5 py-3'>
        <div className='row mb-3'>
            <ProdCategory />
        </div>
        <div className='row justify-content-center mt-5'>
            {isLoading ? <Spinner /> : data ? data.data.map((product) => (<CardProducts product={product} key={product.product_id}/>)) : 
            products?.data?.map((product) => (<CardProducts product={product} key={product.product_id}/>))}
        </div>
    </div>
  )
}

const Spinner = () => {

  return(
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default ProductsTemp