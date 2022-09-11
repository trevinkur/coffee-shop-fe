
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useGetCoupon } from '../../helper/useCoupon'
import { discount } from '../../helper/useDiscount'
import { useGetOrders } from '../../helper/useOrders'


const OrderSummary = () => {
    const [userId, setUserId] = useState() 
    const [delivery, setDelivery] = useState()
    const [code, setCode] = useState("")
    const {data, isLoading, isError} = useGetOrders(userId,"in_cart");
    // const [disc, setDisc] = useState([])
    const { data: coupon, isLoading: couponIsLoading, isError: couponIsError} = useGetCoupon(code)
    const [potongan, setPotongan] = useState(0)

    useEffect(()=> {
        setUserId(localStorage.getItem("userId"));
        setDelivery(localStorage.getItem("delivery"));
        setCode(localStorage.getItem("coupon"))
    }, [])

    let disc = [];
    // let potongan = 0
    let total = 0;
    let tax = 3000;
    let shipping = 10000;
    let content;
    let couponContent;
    if(isLoading) {
        content = <div>loading...</div>
    } else if(data) {

        if(coupon) {
            console.log(code)
            console.log(coupon)
            disc = discount(coupon?.data[0] ,data);
            disc.map((item) => {
                item ? 
                potongan += item.discount  : null;
            })
        } else if(isError) {
            content = <div>ERROR</div>
        }
        }
        // disc.map((item) => {
        //     total += item?.discount
        //     console.log(item)
        // })
        content = data?.data?.map((item) => {
        console.log(item.total_price)
        total += Number(item.total_price)
        // setTotal(prevState => prevState + item.total_price)
        return<Render key={item?.product} item={item}/>  
    })
    


    // if(couponIsLoading) {
    //     couponContent = <div>is loading</div>
    // } else {
    //     couponContent = disc?.map((item) =><div className='d-flex flex-column'>
    //     <p>{item?.product}</p>
    //     <p>IDR {item?.discount}</p>
    // </div>)
    // } else

  return (
    
    <div className='col-md-4 p-5 mx-3'>
        <div className='d-flex justify-content-center mb-2'>
            <h2 className='color-white me-3'
                style={{textShadow: '2px 2px 5px #000'}}
            >Check Your Item now </h2>
        </div>
        <div className='container rounded-3 border bg-white shadow'>
            <h3 className='color-secondary text-center my-5'
                style={{fontSize: '30px', color: '#362115'}}
            >Order Summary</h3>
            <div className='mt-4' 
            style={{height: '18rem', overflow: 'auto'}}>
                {content}
            </div>
            <div className='d-flex justify-content-between mx-2'>
                <p className='color-secondary'>SubTotal</p>
                <p className='color-secondary'>IDR {total}</p>
            </div>
            <div className='d-flex justify-content-between mx-2'>
                <p className='color-secondary'>Tax</p>
                <p className='color-secondary'>IDR {total ? tax : 0}</p>
            </div>
            <div className='d-flex justify-content-between mx-2 mb-3 border-bottom'>
                <p className='color-secondary'>Shipping</p>
                <p className='mb-3 color-secondary'>IDR {total && delivery === "door" ? shipping : 0}</p>
            </div>
            <div className='d-flex flex-column'>
                <p className='text-center color-secondary'>discount</p>
                <div className='d-flex justify-content-between mx-2 mb-3'>
                    {disc?.map((item) =><div key={item.product} className='d-flex flex-column'>
                <p className='color-secondary'>{item?.product}</p>
                <p className='color-secondary'>IDR {item?.discount}</p></div>)}
                </div>
                
                
            </div>
            <div className='d-flex justify-content-between mx-2 mb-3'>
                <h3 
                    className='color-secondary'
                    style={{fontSize: '30px', color: '#362115'}}
                >Total</h3>
                <h3
                    className='color-secondary'
                    style={{fontSize: '25px', color: '#362115'}}
                >IDR {total ? (total - potongan + tax ) : 0}</h3>
            </div>
            
        </div>
    </div>
  )
}

function Render({item}) {


    return( <div className='row align-items-center mb-1 mx-3'>
    <div className='col-4'>
        <Image
            className='rounded-3'
            src={`${process.env.URL_BE}static/${item.cover}`}
            width={82}
            height={82}
            alt="contoh"
         />
    </div>
    <div className='col-5 d-flex flex-column ' >
        <p className='color-black'>{item.product}</p>
        <p className='color-black'>X {item.quantity}</p>
        <p className='color-black'>{item.size}</p>
    </div>
    <div className='col-3'>
        <p  className='ms-3 color-black'>{item.total_price}</p>
    </div>
</div>)
}

export default OrderSummary