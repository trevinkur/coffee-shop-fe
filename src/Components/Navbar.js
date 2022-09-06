import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [userId, setUserId] = useState()

    
    useEffect(() => {
      setUserId(localStorage?.getItem("userId"));

    },[userId])
    
    const handleLogout = (e) => {
      e.preventDefault();
      setUserId("");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("role")
    }
    

    return(
    <nav className="navbar navbar-expand-lg bg-light px-5 py-3">
    <div className="container-fluid">
        <div className="navbar-brand me-3">
        <Image src='/img/logo.svg' 
        width={30}
        height={33}
        alt='logo'
        />
        </div>
        
        <Link href="/"><a className="navbar-brand bold font-m" >Coffee Shop</a></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link href="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
            <Link href="/products"><a className="nav-link" href="#">Products</a></Link>
        </li>
        <li className="nav-item">
            <Link href="/cart"><a className="nav-link ">Your Cart</a></Link>
        </li>
        <li className="nav-item">
            <Link href="/history"><a className="nav-link">History</a></Link>
        </li>
      </ul>
      {userId ? (
        <form className="d-flex" role="search">
          <button className="btn btn-secondary" onClick={handleLogout}>logout</button>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
      ) : (
        <form className="d-flex" >
        <Link href="/auth/signin"><a className="me-2">Login</a></Link>
        <Link href='/auth/signup'>
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </Link>
      </form>
      )}
      
    </div>
    </div>
</nav>)
}