import { addRequestMeta } from 'next/dist/server/request-meta';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useGetOrders } from '../../helper/useOrders'
import { useGetUsers } from '../../helper/useUsers';

const Payment = () => {
    const router = useRouter()
    const [userId, setUserId] = useState()
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");
    const {data, isLoading, isError} = useGetUsers(userId)

    useEffect(()=> {
        setUserId(localStorage.getItem("userId"))
        setDelivery(localStorage.getItem("delivery"))
    },[]) 

    // useEffect(() => {
    //     fetch("")
    // })
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi")
        if(!payment) {
            return
        } else {
        fetch(`${process.env.URL_BE}api/v1/orders?userId=${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
            payment_method: payment,
            status: "fulfilled"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => { alert("Success, Your order will coming soon"); return res.json()})
    .then((res) => router.push("/") )
    .catch(err => console.log(err))

        }
    
    }

    let content;
    if(isLoading) {
       content = <div>loading...</div>
    } else if(data) {
    content = data?.data?.map((item) => (
            <div key={item.user_id} className='col-4 p-5 mx-3'>
        <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between p-3 mb-1'>
            <p className='color-white bold'>
                Address detail
            </p>
            <p className='color-white bold'>
                edit
            </p>
        </div>
        <div className='container bg-white rounded-4 p-2 mb-4'>
            <div className='border-bottom p-3'>
                <p>{delivery === "dineIn" ? "Dine in Coffee Shop" : 
                delivery === "pickUp" ? "Pick up at Coffee Shop" : "delivery to" }</p>
            </div>
            <div className='border-bottom p-3'>
                <p>{item.address}</p>
            </div>
            <div className=' p-3'>
                <p>{item.phone_number}</p>
            </div>
        </div>
        <div className='d-flex justify-content-between p-3 mb-1'>
            <p className='color-white bold'>
                Payment Method
            </p>
        </div>
        <div className='container bg-white rounded-4 p-3 mb-4'>
            <div className="form-check">
                <input className="form-check-input" type="radio" value="card" id="card" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="form-check-label" htmlFor="flexCheckDefault" >
                    Card
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" value="bank" id="bankAccount" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Bank Account
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" value="cash" id="cash" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="form-check-label" htmlFor="flexCheckDefault" >
                    cash on delivery
                </label>
            </div>
        </div>
        
        <div className='d-grid gap-2'>
            <button className='btn btn-secondary py-3' 
            onClick={handleSubmit}>
                Confirm and Pay
            </button>
        </div>
        </form>
        
    </div>
    ))} else if(isError) {
        content = <div>ada Error</div>
    }
  return content
}

export default Payment