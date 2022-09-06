import React from 'react'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import ImageAuth from '../../Layouts/Auth/ImageAuth'
import SignUp from '../../Layouts/Auth/SignUp'

const signup = () => {
  return (
    <Layout auth>
        <div className='container-fluid'>
        <div className='row justify-content-center'>
        <ImageAuth />   
        <SignUp />
        <Footer />
        </div>
        </div>
        
    </Layout>
  )
}

export default signup