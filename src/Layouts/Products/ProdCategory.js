
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/Products.module.css"

const ProdCategory = () => {
    const router = useRouter()
    const {query} = router
    const handleNav = (e) => {
        console.log(query, "hi")
        router.replace({
            pathname: "/products",
            query: {...query, category: e.target.id}
        })
    }
  return (<><div className='mb-4 d-none d-sm-flex'>
        
        <div className={`${router.query.category === "favorite" ?
         styles.active : ""}  ${styles.nav} d-flex justify-content-center color-secondary col rounded-2 py-3`}
        onClick={handleNav} type="button" id=""
        >
            <h3 className='font-l bold align-self-center text-center'
             id="" style={{margin: '0'}}>Favorite Product</h3>
        </div>
        <div className={`${router.query.category === "Coffee" ?
         styles.active : ""} ${styles.nav} d-flex color-secondary col justify-content-center p-2 rounded-2`}
        onClick={handleNav} type="button" id="Coffee"
        >
            <h3 className='font-l bold align-self-center' 
            style={{margin: '0'}} id="Coffee">Coffee</h3>
        </div>
        <div className={`${router.query.category === "Beverages" ?
         styles.active : ""} ${styles.nav} d-flex justify-content-center color-secondary col rounded-2 p-2`}
        onClick={handleNav} type="button" id="Beverages"
        >
            <h3 className='font-l bold align-self-center' 
            style={{margin: '0'}} id="Beverages">Beverages</h3>
        </div>
        <div className={`${router.query.category === "Food" ?
         styles.active : ""} ${styles.nav} d-flex justify-content-center color-secondary col rounded-2 p-2`}
        onClick={handleNav} type="button" id="Food"
        >
            <h3 className='font-l bold align-self-center' 
            style={{margin: '0'}} id="Food">Food</h3>
        </div>

    </div>
    <div className="dropdown d-flex justify-content-center d-sm-none my-4">
        <button className="btn btn-primary dropdown-toggle align-self-center shadow"
         type="button" data-bs-toggle="dropdown" aria-expanded="false"
         style={{width: '60%'}}
         >
            {router.query.category ? router.query.category : 'Select Category'}
        </button>
        <ul className="dropdown-menu" style={{width: '60%'}}>
            <li><a 
                className="dropdown-item" 
                onClick={handleNav}
                id=''
                >Favorite Product</a></li>
            <li><a 
                className="dropdown-item" 
                onClick={handleNav}
                id='Coffee'
                >Coffee</a></li>
            <li><a 
                className="dropdown-item"
                onClick={handleNav}
                id='Beverages'
                >Beverages</a></li>
            <li><a 
                className="dropdown-item" 
                onClick={handleNav}
                id='Food'
                >Food</a></li>       
        </ul>
    </div>
    </>
  )
}

export default ProdCategory