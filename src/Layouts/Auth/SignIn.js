import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        console.log(email)
        console.log(pwd)
        e.preventDefault();
        setLoading(true)
        axios({
            method: "POST",
            url: `${process.env.URL_BE}api/v1/auth/login`,
            data: {
                email,
                password: pwd
            }
        })
        .then(res => {
            localStorage.setItem("userId", res.data.data.userId);
            localStorage.setItem("role", res.data.data.role);
            localStorage.setItem("token", res.data.data.token);
            router.replace('/')
        }).catch(err => {
            if(err.response.status === 400) {
                setErrMsg(err.response.data.message)
            } else if(err.response.status === 500) {
                setErrMsg('server is down')
            }
        })
        .finally(() => setLoading(false))
            
    }
  return (
    <div className='col-md-6' style={{height: "100vh",}}>
            <div className='d-flex justify-content-between m-3 align-items-center' style={{height: "10%"}}>
                <Image 
                    src="/img/logo.svg"
                    width={30}
                    height={33}
                    alt={`logo`}
                />
                 <Link href="/auth/signup">
                    <button className='btn btn-primary'>Sign Up</button>
                </Link>
            </div>
            <h2 className='color-secondary text-center'>Sign In</h2>
        <form onSubmit={handleSubmit} className='px-5 d-flex flex-column justify-content-center' style={{height: "75%",}}>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg"
                 id="email" placeholder="name@example.com" 
                 onChange={(e) => {setEmail(e.target.value); setErrMsg('')}}
                 required/>
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password"
                 onChange={(e) => {setPwd(e.target.value); setErrMsg('')}}
                  required/>
            </div>
            {errMsg && <div
                style={{backgroundColor: '#faf172'}} 
                className=' text-center p-2 mb-3 rounded-3'
            >{errMsg}</div>}

            { loading ? (
                <div className='d-grid gap-2'>
                    <button class="btn btn-primary py-3" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            ): (
                <div className='d-grid gap-2'>
                    <button className='btn btn-primary  py-3'
                    type='submit'
                    >Sign In</button>
                </div>

            )}
                       
        </form>
    </div>
  )
}

export default SignIn