import React from 'react'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import ImageAuth from '../../Layouts/Auth/ImageAuth'
import SignIn from '../../Layouts/Auth/SignIn'

const signin = () => {
  return (
    <Layout auth>
        <div className='container-fluid'>
        <div className='row justify-content-center'>
        <ImageAuth />   
        <SignIn />
        <Footer />
        </div>
        </div>
        
    </Layout>
  )
}

export default signin