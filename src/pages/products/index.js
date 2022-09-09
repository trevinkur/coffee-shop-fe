import React from 'react'
import Promo from '../../Layouts/Products/Promo'
import ProductsTemp from '../../Layouts/Products/ProductsTemp'
import Meta from '../../Components/Meta'
import Layout from '../../Components/Layout'

const Products = ({products, coupons}) => {
  console.log(products, "page")
  return (
    <Layout>

    <Meta />
    <main 
      className='container-fluid ' 
      style={{minHeight: '100vh'}}
    >
      <div className='row' style={{minHeight: '100vh'}}>
        <Promo coupons={coupons}/>
        <ProductsTemp products={products}/>
      </div>
    </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const result = await fetch(`${process.env.URL_BE}api/v1/products`);
  const products = await result.json();
  const res = await fetch(`${process.env.URL_BE}api/v1/coupon?limit=1`)
  const coupons = await res.json();
  return {
    props: {
      products,
      coupons
    },
    revalidate: 60
  }

}

export default Products