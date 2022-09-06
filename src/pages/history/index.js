import React, { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr';
import Layout from '../../Components/Layout';
import { useGetOrders } from '../../helper/useOrders'
import CardHistory from '../../Layouts/History.js/CardHistory'

const History = () => {
    const [userId, setUserId] = useState();
    useEffect(()=> {
        setUserId(localStorage.getItem("userId"))
    },[])
    const {data, isLoading, isError} = useGetOrders(userId, "fulfilled");
    

    let content;
    if(isLoading) {
        content = <div>isLoading</div>
    } else if(isError) {
        content = <div>isError</div>
    } else if(data) {
        content = data?.data?.map((item) => <CardHistory key={item.product} item={item} userId={userId}/>)
    }
  return (
    <Layout>
        <main className='container-fluid p-5' 
    style={{
        backgroundImage: "url(/img/bgPayment.png)", backgroundRepeat: "no-repeat",
        height: "100vh", backgroundSize: "cover", 
    }}>  
        <h2 className='color-white me-3 text-center'>Lets see what you have bought!
        Select item to delete</h2>
        <p className='text-center mb-3 my-4 color-white'>Lets see what you have bought!
            Select item to delete</p>
        <div className='d-flex flex-wrap my-5'>
            {content}
        </div> 
    </main>
    </Layout>
    
    )
}

export default History