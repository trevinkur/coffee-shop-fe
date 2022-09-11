import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Navbar() {
  const [search, setSearch] = useState()
  const [userId, setUserId] = useState()
  const router = useRouter()
  const {query} = router
    
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
    
    const handleSearch = (e) => {
      e.preventDefault()
      // router.push(`/products?search=${search}`)
      router.replace({
        pathname: "/products",
        query: {...query, search: search}
    })
    }

    return(
    <nav className="navbar navbar-expand-lg border-bottom px-5 py-3">
    <div className="container-fluid">
        <div className="navbar-brand me-3">
        <Image src='/img/logo.svg' 
        width={30}
        height={33}
        alt='logo'
        />
        </div>
        
        <Link href="/"><a className="navbar-brand bold font-m " >Coffee Shop</a></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"  aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse d-md-none d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end">
        <li className="nav-item me-2">
            <Link href="/">
              <a className={`nav-link ${router.route === '/' && 'color-secondary bold'} `} 
              aria-current="page" 
            >Home</a></Link>
        </li>
        <li className="nav-item me-2">
          <Link href="/products">
            <a className={`nav-link ${router.route === '/products' && 'color-secondary bold'} `} 
            >Products</a>
          </Link>
        </li>
        <li className="nav-item me-2">
            <Link href="/cart">
              <a className={`nav-link ${router.route === '/cart' && 'color-secondary bold'} `} 
              >Your Cart</a>
            </Link>
        </li>
        <li className="nav-item me-5">
          <Link href="/history">
            <a className={`nav-link ${router.route === '/history' && 'color-secondary bold'} `} 
            >History</a>
          </Link>
        </li>
      </ul>
      {userId ? (
        <form className="d-flex" role="search">
            <div className="input-group rounded-pill mx-3">
            <span className="input-group-text bg-gray"
            type="submit" onClick={handleSearch}
            >
              <i class="bi bi-search"></i>
            </span>
              <input 
                className="form-control me-2 bg-gray-1 " 
                type="search"
                placeholder="Search" aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="dropdown d-flex align-items-center"
              
            >
            <div
              className="d-flex"
              data-bs-toggle="dropdown" aria-expanded="false"
              type='button'
            >
            <Image
              className="rounded-circle"
              src='/img/profileDefault.jpg'
              width={55}
              height={55}
              alt='profileImage'
            />
            </div>
            <ul className="dropdown-menu mt-2" style={{marginLeft: '-100px'}}>
              <li><a 
                class="dropdown-item"
                onClick={handleLogout} 
              >Logout</a>
              </li>
            </ul>
            </div>
            
        </form>
      ) : (
        <form className="d-flex " >
        <Link href="/auth/signin"><a className="me-4 align-self-center bold color-black">Login</a></Link>
        <Link href='/auth/signup'>
          <button 
            className="btn btn-primary rounded-pill px-4 font-s"
            type="submit" style={{boxShadow: '0 0 8px #FFBA33'}}>Sign Up</button>
        </Link>
      </form>
      )}
      
    </div> */}

    {/* <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end">
        <li className="nav-item me-2">
            <Link href="/">
              <a className={`nav-link ${router.route === '/' && 'color-secondary bold'} `} 
              aria-current="page" 
            >Home</a></Link>
        </li>
        <li className="nav-item me-2">
          <Link href="/products">
            <a className={`nav-link ${router.route === '/products' && 'color-secondary bold'} `} 
            >Products</a>
          </Link>
        </li>
        <li className="nav-item me-2">
            <Link href="/cart">
              <a className={`nav-link ${router.route === '/cart' && 'color-secondary bold'} `} 
              >Your Cart</a>
            </Link>
        </li>
        <li className="nav-item me-5">
          <Link href="/history">
            <a className={`nav-link ${router.route === '/history' && 'color-secondary bold'} `} 
            >History</a>
          </Link>
        </li>
      </ul>
      {userId ? (
        <form className="d-flex" role="search">
            <div className="input-group rounded-pill mx-3">
            <span className="input-group-text bg-gray"
            type="submit" onClick={handleSearch}
            >
              <i class="bi bi-search"></i>
            </span>
              <input 
                className="form-control me-2 bg-gray-1 " 
                type="search"
                placeholder="Search" aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="dropdown d-flex align-items-center"
              
            >
            <div
              className="d-flex"
              data-bs-toggle="dropdown" aria-expanded="false"
              type='button'
            >
            <Image
              className="rounded-circle"
              src='/img/profileDefault.jpg'
              width={55}
              height={55}
              alt='profileImage'
            />
            </div>
            <ul className="dropdown-menu mt-2" style={{marginLeft: '-100px'}}>
              <li><a 
                class="dropdown-item"
                onClick={handleLogout} 
              >Logout</a>
              </li>
            </ul>
            </div>
            
        </form>
      ) : (
        <form className="d-flex " >
        <Link href="/auth/signin"><a className="me-4 align-self-center bold color-black">Login</a></Link>
        <Link href='/auth/signup'>
          <button 
            className="btn btn-primary rounded-pill px-4 font-s"
            type="submit" style={{boxShadow: '0 0 8px #FFBA33'}}>Sign Up</button>
        </Link>
      </form>
      )}
      </div>

      
      
    </div> */}



    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
      <div className="navbar-brand me-3">
        <Image src='/img/logo.svg' 
        width={30}
        height={33}
        alt='logo'
        />
        </div>
        
        <Link href="/"><a className="navbar-brand bold font-m " >Coffee Shop</a></Link>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      {userId ? (
        <form className="d-flex d-lg-none " role="search">
            <div className="input-group rounded-pill mx-3">
            <span className="input-group-text bg-gray"
            type="submit" onClick={handleSearch}
            >
              <i class="bi bi-search"></i>
            </span>
              <input 
                className="form-control me-2 bg-gray-1 " 
                type="search"
                placeholder="Search" aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="dropdown d-flex align-items-center"
              
            >
            <div
              className="d-flex"
              data-bs-toggle="dropdown" aria-expanded="false"
              type='button'
            >
            <Image
              className="rounded-circle"
              src='/img/profileDefault.jpg'
              width={55}
              height={55}
              alt='profileImage'
            />
            </div>
            <ul className="dropdown-menu mt-2" style={{marginLeft: '-100px'}}>
              <li><a 
                class="dropdown-item"
                onClick={handleLogout} 
              >Logout</a>
              </li>
            </ul>
            </div>
            
        </form>
      ) : (
        <form className="d-flex d-lg-none justify-content-between mx-4" >
        <Link href="/auth/signin"><a className="me-4 align-self-center bold color-black">Login</a></Link>
        <Link href='/auth/signup'>
          <button 
            className="btn btn-primary rounded-pill px-4 font-s"
            type="submit" style={{boxShadow: '0 0 8px #FFBA33'}}>Sign Up</button>
        </Link>
      </form>
      )}
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item text-center my-4 my-lg-0">
          <Link href="/">
              <a className={`nav-link ${router.route === '/' && 'color-secondary bold'} `} 
              aria-current="page" 
            >Home</a></Link>
          </li>
          <li class="nav-item text-center my-4 my-lg-0">
          <Link href="/products">
            <a className={`nav-link ${router.route === '/products' && 'color-secondary bold'} `} 
            >Products</a>
          </Link>
          </li>
          <li class="nav-item text-center my-4 my-lg-0">
          <Link href="/cart">
              <a className={`nav-link ${router.route === '/cart' && 'color-secondary bold'} `} 
              >Your Cart</a>
            </Link>
          </li>
          <li className="nav-item me-lg-5 text-center my-4 my-lg-0">
          <Link href="/history">
            <a className={`nav-link ${router.route === '/history' && 'color-secondary bold'} `} 
            >History</a>
          </Link>
        </li>
        </ul>

        {userId ? (
        <form className="d-none d-lg-flex" role="search">
            <div className="input-group rounded-pill mx-3">
            <span className="input-group-text bg-gray"
            type="submit" onClick={handleSearch}
            >
              <i class="bi bi-search"></i>
            </span>
              <input 
                className="form-control me-2 bg-gray-1 " 
                type="search"
                placeholder="Search" aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="dropdown d-flex align-items-center"
              
            >
            <div
              className="d-flex"
              data-bs-toggle="dropdown" aria-expanded="false"
              type='button'
            >
            <Image
              className="rounded-circle"
              src='/img/profileDefault.jpg'
              width={55}
              height={55}
              alt='profileImage'
            />
            </div>
            <ul className="dropdown-menu mt-2" style={{marginLeft: '-100px'}}>
              <li><a 
                class="dropdown-item"
                onClick={handleLogout} 
              >Logout</a>
              </li>
            </ul>
            </div>
            
        </form>
      ) : (
        <form className="d-none d-lg-flex " >
        <Link href="/auth/signin"><a className="me-4 align-self-center bold color-black">Login</a></Link>
        <Link href='/auth/signup'>
          <button 
            className="btn btn-primary rounded-pill px-4 font-s"
            type="submit" style={{boxShadow: '0 0 8px #FFBA33'}}>Sign Up</button>
        </Link>
      </form>
      )}
      </div>
    </div>
    </div>
</nav>)
}