import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

    async function Register() {
        alert("Register Successful")
    }

  return (
        <div className='container mx-auto flex flex-col gap-10 h-screen justify-center items-center'>
            <h3 className='text-blue-500 font-bold text-4xl lg:text-6xl'>
            🌠 HOSHIYOMI 🌠
            </h3>
            <div className='flex flex-col w-xs lg:w-md px-2 gap-5'>
                <div className='flex flex-col'>
                    <p className='text-blue-400 font-bold'>USERNAME</p>
                    <input
                        value={username}
                        onChange={(u) => {
                            setUsername(u.target.value)
                        }}
                        placeholder=' Enter your Username'
                        className='border-1 h-8'
                    />
                </div>
                <div className='flex flex-col'>
                    <p className='text-blue-400 font-bold'>PASSWORD</p>
                    <input
                        value={password}
                        onChange={(p) => {
                            setPassword(p.target.value)
                        }}
                        placeholder=' Enter your password'
                        className='border-1 h-8'
                    />
                </div>
                <div className='flex flex-col'>
                    <p className='text-blue-400 font-bold'>CONFIRM PASSWORD</p>
                    <input
                    value={cpassword}
                    onChange={(c) => {
                        setCpassword(c.target.value)
                    }}
                    placeholder=' confirm your password'
                    className='border-1 h-8'
                    />
                </div>
                <div className='flex flex-col'>   
                    <p className='text-blue-400 font-bold'>ADDRESS</p>
                    <input
                    value={address}
                    onChange={(a) => {
                        setAddress(a.target.value)
                    }}
                    placeholder=' Enter your address'
                    className='border-1 h-8'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
                <button 
                    className='border-1 text-white bg-blue-500 shadow-md w-60 h-10 lg:w-40'
                    onClick={() => {
                        Register()
                        navigate("/")
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