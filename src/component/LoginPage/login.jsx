import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../../index.css'

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();

  function Altetcall() {
    alert("Login Successful")
  }

  return (
    <div className='container mx-auto flex flex-col h-screen justify-center items-center gap-10'>
      <h3 className='text-sky-500 text-4xl md:text-5xl lg:text-6xl '>
      🌠 HOSHIYOMI 🌠
      </h3>

      <div className='flex flex-col w-full p-5 bg-red-500'>
        <div className='flex flex-col bg-blue-500'>
          <p className=''>USERNAME</p>
          <input
            type='username'
            value={username}
            placeholder=' Enter your Username'
            onChange={(u) => {
              setUsername(u.target.value)
            }}
            className=''
          />
        </div>
        <div className=''>
          <p className=''>PASSWORD</p>
          <input
            type='password'
            value={password}
            placeholder=' Enter your Password'
            onChange={(p) => {
              setPassword(p.target.value)
            }}
            className=''
          />
        </div>
      </div>

      <div className=''>
        <button 
          className=''
          onClick={() => {
            Altetcall()
            navigate("/home")
          }}
        >
          Sign In
        </button>
        <button 
          className=''
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