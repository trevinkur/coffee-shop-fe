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
        console.log(quantity)
        const totalProd = Array(quantity).fill()
        console.log(totalProd)
        totalProd.map(() => {
        fetch(`${process.env.URL_BE}api/v1/orders`, {
            method: "POST",
            body: JSON.stringify({
                user_id: userId,
                product_id: product.data[0].product_id,
                size: size
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => { 
            console.log("success");
            localStorage.setItem("delivery", delivery);
            localStorage.setItem("time", time);
            router.push("/cart");
            return res.json()})
        .catch(err => console.log(err))
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
            />
            <ProductDetail
            product={product} 
            quantity={quantity} setQuantity={setQuantity}
            price={price}
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
    const result = await fetch(`${process.env.URL_BE}api/v1/products`);
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