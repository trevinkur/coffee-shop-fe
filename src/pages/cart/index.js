import React from 'react'
import Layout from '../../Components/Layout'
import OrderSummary from '../../Layouts/Cart/OrderSummary'
import Payment from '../../Layouts/Cart/Payment'

const Cart = () => {

  return (
    <Layout>
       <main className='container-fluid' 
    style={{
        backgroundImage: "url(/img/bgPayment.png)", backgroundRepeat: "no-repeat",
        height: "80%", backgroundSize: "cover"
    }}>
        <div className='me-5 px-5 pt-5'>
            <h2 className='color-white me-3 '>Check Your Item now </h2>
        </div>
     
        <div className='row justify-content-center align-items-center'>
            <OrderSummary />
            <Payment />
        </div>
        

    </main>
    </Layout>
   
  )
}

export default Cart