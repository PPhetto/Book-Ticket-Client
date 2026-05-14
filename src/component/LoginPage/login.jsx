import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../../index.css'

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();

  async function handleLogin() {

    if (!username.trim() || !password.trim()) {
      alert("Invalid information")
      return;
    }
    
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
  
      const data = await res.json()

      if (res.ok) {
        alert(data.message)
        navigate("/home")
      } else {
        alert(data.message)
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='container mx-auto flex flex-col h-screen justify-center items-center gap-10'>
      <h3 className='text-blue-500 text-4xl lg:text-6xl font-bold'>
      🌠 HOSHIYOMI 🌠
      </h3>

      <div className='flex flex-col w-xs lg:w-md px-2 gap-5'>
        <div className='flex flex-col'>
          <p className='text-blue-400 font-bold'>USERNAME</p>
          <input
            type='text'
            value={username}
            placeholder=' Enter your Username'
            onChange={(u) => {
              setUsername(u.target.value)
            }}
            className='border-1 h-8 px-2'
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-blue-400 font-bold'>PASSWORD</p>
          <input
            type='password'
            value={password}
            placeholder=' Enter your Password'
            onChange={(p) => {
              setPassword(p.target.value)
            }}
            className='border-1 h-8 px-2'
          />
        </div>
      </div>

      <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
        <button 
          className='border-1 text-white bg-blue-500 shadow-md w-60 h-10 lg:w-40'
          onClick={() => {
            handleLogin()
          }}
        >
          Sign In
        </button>
        <button 
          className='border-1 text-white bg-blue-500 shadow-md w-60 h-10 lg:w-40'
          onClick={() => {
            navigate("/register")
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Login