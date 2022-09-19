import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({quantity, setQuantity, product, price, size, userId}) => {
    const [loading, setLoading] = useState(false)

    const handleQuantity = (e) => {
        console.log(e.target.id , 'quantity')
        if(e.target.id === "plus") {
            setQuantity((prev) => prev + 1)
        } else { 
            if(quantity < 1) {
                setQuantity(0)
            } else {
            setQuantity((prev) => prev - 1)
            }
        }    
        
    }

    const handleSubmit = () => {
        setLoading(true)
        const totalProd = Array(quantity).fill()
        totalProd.map(() => {
        
            axios({
                url: `${process.env.URL_BE}api/v1/orders`,
                method: "POST",
                data: {
                    user_id: userId,
                    product_id: product.data[0].product_id,
                    size: size
                }   
            })
            .then(() => {
                toast.success('Succes, check your cart to see', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,    
                })
                localStorage.setItem("delivery", delivery);
                localStorage.setItem("time", time);
            })
            .catch((err) => {
                if(err.status === 500) {
                    toast.error('sorry there is something wrong please. contact us for more detail', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,        
                    })
                }
            })
            .finally(() => setLoading(false))
    
        })
    }



  return (
    <>
        <div className='col-lg-4 p-3 m-3'>
        <h1 className='my-5 text-center color-black'>{product.data[0].name}</h1>
        <p className='mb-3 color-secondary'>{product.data[0].description}</p>
        <p className='my-3 color-secondary'>Delivery only on <span className='color-secondary bold'>Monday to friday at  1 - 7 pm</span></p>
        <div className='d-flex justify-content-between my-4 align-items-center'>
            <div 
                className='d-flex align-items-center border border-2 rounded-3'
                type='button'
            >
                <div className='border-end py-2 px-3 color-secondary bold ' onClick={handleQuantity}
                id="minus">-</div>
                <div className='py-2 px-3 color-secondary bold  '>{quantity}</div>
                <div
                    className='border-start py-2 px-3 color-secondary bold '
                    type='button'
                    onClick={handleQuantity}
                    id="plus"
                >+</div>
            </div>
            <h2 className='color-black'>IDR {price}</h2>
        </div>
        {loading ?
            <div className='d-grid gap-2 m-3'>
                <button className="btn btn-secondary py-3" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                </button>
            </div>
         : <div className='d-grid gap-2 m-3'>   
            <button
                onClick={handleSubmit} 
                className='btn btn-secondary py-3 bold' >Add to Cart</button>
        </div> }

        
        <div className='d-grid gap-2 m-3'>
            <button 
            onClick={() => {
                toast.warning('sorry that feature still under maintenance', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }} 
            className='btn btn-primary py-3 bold' >Ask a Staff</button>

        </div>    

    </div>
    <ToastContainer />
    </>
  )
}

export default ProductDetail