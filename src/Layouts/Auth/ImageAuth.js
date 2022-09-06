import Image from 'next/image'
import React from 'react'

const ImageAuth = () => {
  return (
    <div className='col-6' style={{padding: "0"}}>
        <div className='' style={{height: "100vh", overflow: "hidden"}}>
            <Image
            src='/img/auth.png'
            width={600}
            height={1000}
            alt={'background'}
            />
        </div>
    </div>
  )
}

export default ImageAuth