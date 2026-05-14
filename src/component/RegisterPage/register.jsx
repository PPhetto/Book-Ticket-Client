import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'

function Register() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

    const [lberr,setLberr] = useState(false)

    async function handleRegister() {
        if (password !== cpassword) {
            setLberr(true)
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    address
                })
            });

            const data = await res.json()

            if (res.ok) {
                alert(data.message);
                navigate("/")
            } else {
                alert(data.message)
            }
        } catch (err) {
            console.log(err)
            alert("Register Failed")
        }
    }

  return (
        <div className='container mx-auto flex flex-col gap-10 h-screen justify-center items-center'>
            <h3 className='text-blue-500 font-bold text-4xl lg:text-6xl'>
            🌠 HOSHIYOMI 🌠
            </h3>
            <div className='flex flex-col w-xs lg:w-md px-2 gap-5'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <p className='text-blue-400 font-bold'>USERNAME</p>
                        <span className='text-red-500'>*</span>
                    </div>
                    <input
                        type='text'
                        value={username}
                        onChange={(u) => {
                            setUsername(u.target.value)
                        }}
                        placeholder=' Enter your Username'
                        className='border h-8 px-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <p className='text-blue-400 font-bold'>PASSWORD</p>
                        <span className='text-red-500'>*</span>
                    </div>
                    <input
                        type='password'
                        value={password}
                        onChange={(p) => {
                            setPassword(p.target.value)
                        }}
                        placeholder=' Enter your password'
                        className='border h-8 px-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <p className='text-blue-400 font-bold'>CONFIRM PASSWORD</p>
                        <span className='text-red-500'>*</span>
                    </div>
                    <input
                        type='password'
                        value={cpassword}
                        onChange={(c) => {
                            setCpassword(c.target.value)
                        }}
                        placeholder=' confirm your password'
                        className='border h-8 px-2'
                    />
                    {lberr && (
                        <p className='text-red-500'>*Please check your password is not same.</p>
                    )}
                </div>
                <div className='flex flex-col'>   
                    <p className='text-blue-400 font-bold'>ADDRESS</p>
                    <input
                        type='text'
                        value={address}
                        onChange={(a) => {
                            setAddress(a.target.value)
                        }}
                        placeholder=' Enter your address'
                        className='border h-8 px-2'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
                <button 
                    className='border-1 text-white bg-blue-500 shadow-md w-60 h-10 lg:w-40'
                    onClick={() => {
                        handleRegister()
                    }}
                >
                    Register
                </button>
                <button 
                    className='border-1 text-white bg-blue-500 shadow-md w-60 h-10 lg:w-40'
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Back
                </button>
            </div>
        </div>
  )
}
export default Register