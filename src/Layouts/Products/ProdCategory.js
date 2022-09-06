
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/Products.module.css"

const ProdCategory = () => {
    const router = useRouter()
    const {query} = router.query
    const handleNav = (e) => {
        console.log(e.target.id, "hi")
        router.replace({
            pathname: "/products",
            query: {...query, category: e.target.id}
        })
    }
  return (<>
        
        <a className={`${router.query.category === "favorite" ?
         styles.active : ""}  ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="favorite"
        >
            <h3 className='font-l bold' id="favorite">Favorite Product</h3>
        </a>
        <a className={`${router.query.category === "coffee" ?
         styles.active : ""} ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="coffee"
        >
            <h3 className='font-l bold ' id="coffee">coffee</h3>
        </a>
        <a className={`${router.query.category === "nonCoffee" ?
         styles.active : ""} ${styles.nav} color-secondary col text-center p-2`}
        onClick={handleNav} id="nonCoffee"
        >
            <h3 className='font-l bold ' id="nonCoffee">Non Coffee</h3>
        </a>
        <a className={`${router.query.category === "food" ?
         styles.active : ""} ${styles.nav}  col text-center p-2`}
        onClick={handleNav} id="food"
        >
            <h3 className='font-l bold ' id="food">food</h3>
        </a>

    </>
  )
}

export default ProdCategory