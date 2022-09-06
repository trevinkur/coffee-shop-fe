import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("")
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.URL_BE}api/v1/auth/login`,
        {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: pwd
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        },
        ).then(res => res.json())
        .then(res => {
            console.log(res.data)
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("token", res.data.token);
        }).then(() => router.replace("/"))
        .catch((err) => alert(`${err}`))

    }
  return (
    <div className='col-6' style={{height: "100vh",}}>
            <div className='d-flex justify-content-between m-3 align-items-center' style={{height: "10%"}}>
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
            <h2 className='color-secondary text-center'>Sign In</h2>
        <form onSubmit={handleSubmit} className='px-5 d-flex flex-column justify-content-center' style={{height: "75%",}}>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg"
                 id="email" placeholder="name@example.com" 
                 onChange={(e) => setEmail(e.target.value)}
                 required/>
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password"
                 onChange={(e) => setPwd(e.target.value)}
                  required/>
            </div>
            <div className='d-grid gap-2'>
                <button className='btn btn-primary py-3'
                onClick={handleSubmit}
                >Sign In</button>
            </div>
           
        </form>
    </div>
  )
}

export default SignIn