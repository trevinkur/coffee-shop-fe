import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState('')
    const [errMsg, setErrMsg] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true)
        axios({
            method: "POST",
            url: `${process.env.URL_BE}api/v1/auth/register`,
            data: {
                display_name: username,
                email,
                password: pwd,
                phone_number: phoneNumber
            }
        })
        .then(res => {
            toast.success('Sign Up Success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setTimeout(()=> {
                router.replace("/auth/signin")
            }, [2000])
        })
        .catch(err => {
            console.log(err)
            // if(err.response.status === 400) {
            //     setErrMsg(err.response.data.message)
            // } else if(err.response.status === 500) {
            //     setErrMsg('server is down')
            // }
        })
        .finally(() => setLoading(false))
    }
  return (
    <>
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
            <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control form-control-lg"
                 id="username" placeholder="your username"
                 onChange={(e) => {setUsername(e.target.value); setErrMsg('')}}
                 required />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg"
                 id="email" placeholder="name@example.com"
                 onChange={(e) => {setEmail(e.target.value); setErrMsg('')}}
                 required />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password" 
                onChange={(e) => {setPwd(e.target.value); setErrMsg('')}} required/>
            </div>
            <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control form-control-lg" id="phoneNumber"
                 placeholder="083*******" 
                 onChange={(e) => {setPhoneNumber(e.target.value); setErrMsg('')}}
                 required  
                 />
            </div>

            {errMsg && <div
                style={{backgroundColor: '#faf172'}} 
                className=' text-center p-2 mb-3 rounded-3'
            >{errMsg}</div>}

            { loading ? (
                <div className='d-grid gap-2'>
                    <button className="btn btn-primary py-3" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            ): (
                <div className='d-grid gap-2'>
                    <button className='btn btn-primary  py-3'
                    type='submit'
                    >Sign Up</button>
                </div>

            )}
           
        </form>
    </div>
    <ToastContainer />
    
    </>
  )
}

export default SignUp