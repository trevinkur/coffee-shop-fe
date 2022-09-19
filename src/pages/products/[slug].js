import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Meta from '../../Components/Meta'
import CheckOut from '../../Layouts/Product/CheckOut'
import ProductDetail from '../../Layouts/Product/ProductDetail'
import ProductImage from '../../Layouts/Product/ProductImage'

const Product = ({product}) => {
    console.log(product, "ini prod")

    const [userId,setUserId] = useState();
    const [quantity, setQuantity] =  useState(1);
    const router = useRouter();
    const [delivery, setDelivery] = useState("dineIn");
    const [now, setNow] =  useState("true");
    const [time, setTime] = useState("");
    const { size } = router.query ;
    // const [size, setSize] = useState("regular");
    const [price, setPrice] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
       setUserId(localStorage.getItem("userId")) 
    },[])


    useEffect(() => {
        
        fetch(`${process.env.URL_BE}api/v1/product/size?productId=${product?.data[0]?.product_id}&size=${size}`)
        .then(res => res.json())
        .then(res => setPrice(res.data[0].price))
        .catch(err => console.log(err))
    }, [size])

    const handleSubmit =  (e) => {
        e.preventDefault();
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
                localStorage.setItem("delivery", delivery);
                localStorage.setItem("time", time);
                router.push('/cart')
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
    <Layout>
        <Meta />
        <main className='container-fluid'>
        <div className='row justify-content-center'>
            <ProductImage delivery={delivery}
                setDelivery={setDelivery}
                setNow={setNow}
                now={now}
                setTime={setTime}
                time={time}
                product={product}
            />
            <ProductDetail
            product={product} 
            quantity={quantity} setQuantity={setQuantity}
            price={price}
            size={size}
            userId={userId}
            />
            <CheckOut handleSubmit={handleSubmit} 
            //  setSize={setSize}
            product={product}
             />
        </div>
        </main>
    </Layout>
    
    
  )
}

export const getStaticPaths = async () => {
    const result = await fetch(`${process.env.URL_BE}api/v1/products?limit=999`);
    const products = await result.json();
    const paths = products.data.map((product) => (
        {params:{ slug: product.slug}}
    ))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const result = await fetch(`${process.env.URL_BE}api/v1/products/${params.slug}`);
    const product = await result.json();
    // const res = await fetch(`${process.env.URL_BE}api/v1/product/size?productId=${product?.data[0]?.product_id}&size=regular`);
    // const size = await res.json();

    return {
        props: {
            product
        },
        revalidate: 60

    }
}

export default Product