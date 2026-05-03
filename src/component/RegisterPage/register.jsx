import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

  return (
    <div className='flex h-screen justify-center items-center'>
        <div className='flex flex-col gap-10 py-5 px-5 justify-center items-center'>
            <h3 className='flex text-[60px] text-blue-400'>
            🌠 HOSHIYOMI 🌠
            </h3>
            <div className='flex flex-col gap-5'>
                <input
                    value={username}
                    onChange={(u) => {
                        setUsername(u.target.value)
                    }}
                    placeholder=' Enter your Username'
                    className='flex w-[350px] px-1 py-2 border-1'
                />
                <input
                    value={password}
                    onChange={(p) => {
                        setPassword(p.target.value)
                    }}
                    placeholder=' Enter your password'
                    className='flex w-[350px] px-1 py-2 border-1'
                />
                <input
                    value={cpassword}
                    onChange={(c) => {
                        setCpassword(c.target.value)
                    }}
                    placeholder=' confirm your password'
                    className='flex w-[350px] px-1 py-2 border-1'
                />
                <input
                    value={address}
                    onChange={(a) => {
                        setAddress(a.target.value)
                    }}
                    placeholder=' Enter your address'
                    className='flex w-[350px] px-1 py-2 border-1'
                />
            </div>
            <div className='flex flex-row gap-8 mt-5'>
                <button 
                    className='text-white h-[40px] w-[120px] bg-sky-500 shadow-ls rounded-md'
                    onClick={() => {
                    navigate("/")
                    }}
                >
                    Register
                </button>
                <button 
                    className='text-white h-[40px] w-[120px] bg-sky-500 shadow-lg rounded-md'
                    onClick={() => {
                    navigate("/")
                    }}
                >
                    Back
                </button>
            </div>
        </div>
    </div>
  )
}
export default Register