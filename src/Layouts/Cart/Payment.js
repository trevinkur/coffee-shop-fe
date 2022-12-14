import axios from 'axios';
import Image from 'next/image';
import {  useRouter } from 'next/router';
import React, { useEffect,  useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetOrders } from '../../helper/useOrders'
import { useGetUsers } from '../../helper/useUsers';

const Payment = () => {
    const router = useRouter()
    const [userId, setUserId] = useState()
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");
    const {data, isLoading, isError} = useGetUsers(userId)
    const {data: order} = useGetOrders(userId,"in_cart");

    useEffect(()=> {
        setUserId(localStorage.getItem("userId"))
        setDelivery(localStorage.getItem("delivery"))
    },[]) 


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!payment) {
            toast.error('Please Input Payment Method', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if(order?.data?.length === 0) {
            toast.error('Your Cart is Empty', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
        
        axios({
            url: `${process.env.URL_BE}api/v1/orders?userId=${userId}`,
            method: "PATCH",
            data: {
                payment_method: payment,
                status: "fulfilled"    
            }
        })
        .then( res => {
            toast.success('Success, Your order will be process', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return res.data
        })
        .then(() => {
            setTimeout(() => {
                router.push('/')
            }, [3000])
        })
        .catch((err) => {
            if(err.status === 500) {
                toast.error('error something wrong',
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        })    
        }
    
    }

    let content;
    if(isLoading) {
       content = <div>loading...</div>
    } else if(data) {
    content = data?.data?.map((item) => (
            <div key={item.user_id} className='col-md-4 p-5 mx-3'>
        <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between p-3 mb-1'>
            <p
                className='color-white bold'
                style={{textShadow: '2px 2px 5px #000'}}
            >
                Address detail
            </p>
            <p 
                className='color-white bold'
                style={{textShadow: '2px 2px 5px #000'}}
            >
                edit
            </p>
        </div>
        <div className='container bg-white rounded-4 p-2 mb-4 shadow'>
            <div className='border-bottom p-3'>
                {delivery === "dineIn" ? <p className='color-black'>
                    <span className='bold'>Dine in </span> 
                    Coffee Shop</p> : 
                delivery === "pickUp" ? <p className='color-black'>
                    <span className='bold'>Pick up at </span> 
                    Coffee Shop</p> : <p className='color-black'>
                    <span className='bold'>Delivery to </span> 
                    </p> }
            </div>
            <div className='border-bottom p-3'>
                <p className='color-black'>
                {   delivery === 'dineIn' || delivery === 'pickUp' ? 
                    'Km 5 refinery road oppsite republic road, effurun, Jakarta' :
                    item.address ? item.address : 'fill your address'}</p>
            </div>
            <div className=' p-3'>
                <p className='color-black'>{item.phone_number}</p>
            </div>
        </div>
        <div className='d-flex justify-content-between p-3 mb-1'>
            <p 
                className='color-white bold'
                style={{textShadow: '2px 2px 5px #000'}}
            >
                Payment Method
            </p>
        </div>
        <div className='container bg-white rounded-4 p-3 mb-4 shadow'>
            <div className="form-check d-flex mb-2">
                
                <input className="form-check-input align-self-center me-2" type="radio" value="card" id="card" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="d-flex align-items-center form-check-label color-black" htmlFor="flexCheckDefault" >
                <div 
                    className='me-2 rounded-3 d-flex align-items-center justify-content-center'
                    style={{width: '40px', height: '40px', backgroundColor: '#F47B0A'}}
                >
                    <Image 
                        src='/img/credit.svg'
                        width={20}
                        height={20}
                        alt='credit'
                    />
                </div>
                    Card
                </label>
            </div>
            <div className="form-check d-flex mb-2">
                <input className="form-check-input align-self-center me-2" type="radio" value="bank" id="bankAccount" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="d-flex align-items-center form-check-label color-black" htmlFor="flexCheckChecked">
                <div 
                    className='me-2 rounded-3 d-flex align-items-center justify-content-center'
                    style={{width: '40px', height: '40px', backgroundColor: '#895537'}}
                >
                    <Image 
                        src='/img/debit.svg'
                        width={20}
                        height={20}
                        alt='debit'
                    />
                </div>
                    Bank Account
                </label>
            </div>
            <div className="form-check d-flex">
                <input className="form-check-input align-self-center me-2" type="radio" value="cash" id="cash" name='payment'
                onChange={(e) => setPayment(e.target.value) } />
                <label className="d-flex align-items-center form-check-label color-black" htmlFor="flexCheckDefault" >
                <div 
                    className='me-2 rounded-3 d-flex align-items-center justify-content-center'
                    style={{width: '40px', height: '40px', backgroundColor: '#FFBA33'}}
                >
                    <Image 
                        src='/img/cash.svg'
                        width={20}
                        height={20}
                        alt='cash'
                    />
                </div>
                    Cash on delivery
                </label>
            </div>
        </div>
        
        <div className='d-grid gap-2'>
            <button className='btn btn-secondary bold py-3' 
            onClick={handleSubmit}>
                Confirm and Pay
            </button>
        </div>
        </form>
        
    </div>
    ))} else if(isError) {
        content = <div>ada Error</div>
    }
  return (<>
    { content}
    <ToastContainer />
    </>)
}

export default Payment