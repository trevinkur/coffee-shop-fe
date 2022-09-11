import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.URL_BE}api/v1/auth/register`,
        {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: pwd,
                phone_number: phoneNumber
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
        .then(()=> {alert("succes");router.replace("/auth/signin")})
        .catch(err => alert(`${err}`))
    }
  return (
    <div className='col-md-6' style={{height: "100vh", overflowY: "auto" }}>
            <div className='d-flex justify-content-between m-3'>
                <Image 
                    src="/img/logo.svg"
                    width={30}
                    height={33}
                    alt={`logo`}
                />
                 <Link href="/auth/signin">
                    <button className='btn btn-primary'>Sign In</button>
                </Link>
            </div>
            <h2 className='color-secondary text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='p-5'>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg"
                 id="email" placeholder="name@example.com"
                 onChange={(e) => setEmail(e.target.value)}
                 required />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password" 
                onChange={(e) => setPwd(e.target.value)} required/>
            </div>
            <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control form-control-lg" id="phoneNumber"
                 placeholder="083*******" 
                 onChange={(e) => setPhoneNumber(e.target.value)}
                 />
            </div>
            <div className='d-grid gap-2'>
                <button className='btn btn-primary py-3' onClick={handleSubmit}>Sign Up</button>
            </div>
           
        </form>
    </div>
  )
}

export default SignUp