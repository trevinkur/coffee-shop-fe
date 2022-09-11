import React, { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr';
import Layout from '../../Components/Layout';
import { useGetOrders } from '../../helper/useOrders'
import CardHistory from '../../Layouts/History.js/CardHistory'
import moment from 'moment';

const History = () => {
    const [userId, setUserId] = useState();
    useEffect(()=> {
        setUserId(localStorage.getItem("userId"))
    },[])
    const {data, isLoading, isError} = useGetOrders(userId, "fulfilled");
    
    const [check, setCheck] = useState([])

    const {mutate} = useSWRConfig()
    const handleDelete = () => {
        if(check) {
            check.forEach((item) => {
                fetch(`${process.env.URL_BE}api/v1/orders/delete?productId=${item.product_id}&userId=${userId}&date=${moment(item.update_at).utc().format(`yyyy-MM-DD HH:mm:ss`)}&size=${item.size}`,
                {
                method: "PATCH",
                })
                .then((res) => {return res.json();}).then(
                (res) => {console.log(res);
                setCheck([])
                mutate(`${process.env.URL_BE}api/v1/orders/${userId}?status=fulfilled`)}
                )
                .catch(err => console.log(err))
            })
            }
    }

    const handleSelectAll = () => {
        setCheck([...data.data])
    }

    let content;
    if(isLoading) {
        content = <div>isLoading</div>
    } else if(isError) {
        content = <div>isError</div>
    } else if(data) {
        content = data?.data?.map((item) => <CardHistory 
            key={item.product}
            check={check}
            setCheck={setCheck}
            item={item}
            userId={userId}/>)
    }
  return (
    <Layout>
        <main className='container-fluid p-5' 
    style={{
        backgroundImage: "url(/img/bgPayment.png)", backgroundRepeat: "no-repeat",
        height: "100vh", backgroundSize: "cover", 
    }}>  
        <h2 
            className='color-white me-3 text-center'
            style={{textShadow: '2px 2px 5px #000'}}
            >Lets see what you have bought!
        </h2>
        <p 
            className='text-center mb-3 my-4 color-white'
            style={{textShadow: '2px 2px 5px #000'}}
        >
            Select item to delete</p>
        <div className='d-flex justify-content-between mx-5'>
            {check.length !== 0 ? <p 
                className='color-white text-decoration-underline'
                style={{textShadow: '2px 2px 5px #000'}}
                type='button'
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
                >Delete</p> : <p></p>}
            
                
            <p 
                className='color-white text-decoration-underline'
                style={{textShadow: '2px 2px 5px #000'}}
                type='button'
                onClick={handleSelectAll}
                >Select All</p>
        </div>
        <div className='d-flex flex-wrap my-5'>
            {content}
        </div>
        <div 
            className="modal fade" id="modalDelete"
            tabIndex="-1" aria-labelledby="modalDeleteLabel" 
            aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
           
            <div className="modal-body ">
                <p className='color-black text-center mb-4 '>Are you sure want to delete the selected items?</p>
                <div className='d-flex justify-content-around'>
                <button type="button" className="btn btn-secondary"
                 data-bs-dismiss="modal">Cancel</button>
                <button 
                    type="button" className="btn btn-primary"
                    data-bs-dismiss="modal" onClick={handleDelete} 
                    >Delete</button>
                </div>
            </div>
            
            </div>
        </div>
        </div> 
    </main>
    
    </Layout>
    
    )
}

export default History