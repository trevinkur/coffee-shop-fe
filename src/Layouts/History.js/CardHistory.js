import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { useSWRConfig } from 'swr'

const CardHistory = ({item, userId}) => {
  const {mutate} = useSWRConfig()
  const handleDelete = () => {

    fetch(`${process.env.URL_BE}api/v1/orders/delete?productId=${item.product_id}&userId=${userId}&date=${moment(item.update_at).utc().format(`yyyy-MM-DD HH:mm:ss`)}&size=${item.size}`,
    {
      method: "PATCH",
    })
    .then((res) => {return res.json();}).then(
      (res) => {console.log(res);
      mutate(`${process.env.URL_BE}api/v1/orders/${userId}?status=fulfilled`)}
    )
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex p-2 container bg-white rounded-3 shadow' style={{width: '16rem'}}>
        <Image 
            className='rounded-circle'
            src="/img/contoh.png"
            width={75}
            height={75}
            alt={`gambar`}
        />
        <div className='d-flex flex-column mx-2' style={{width: "100%"}}>
            <p>{item.product}</p>
            <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
                <p>IDR {item.total_price}</p>
                <p>{item.status}</p>
            </div>
            <button className='p-2' onClick={handleDelete}></button>
            </div>
        </div>
    </div>
  )
}

export default CardHistory