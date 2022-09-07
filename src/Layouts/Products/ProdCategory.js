
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
  return (<>
        
        <div className={`${router.query.category === "favorite" ?
         styles.active : ""}  ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id=""
        >
            <h3 className='font-l bold' id="">Favorite Product</h3>
        </div>
        <div className={`${router.query.category === "Coffee" ?
         styles.active : ""} ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="Coffee"
        >
            <h3 className='font-l bold ' id="coffee">Coffee</h3>
        </div>
        <div className={`${router.query.category === "Beverages" ?
         styles.active : ""} ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="Beverages"
        >
            <h3 className='font-l bold ' id="Beverages">Beverages</h3>
        </div>
        <div className={`${router.query.category === "Food" ?
         styles.active : ""} ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="Food"
        >
            <h3 className='font-l bold ' id="food">Food</h3>
        </div>

    </>
  )
}

export default ProdCategory