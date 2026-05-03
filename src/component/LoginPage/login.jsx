import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../../index.css'

function Login() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-10 h-screen justify-center items-center text-white'>
      <h3 className='flex text-[70px] text-blue-400'>
      🌠 HOSHIYOMI 🌠
      </h3>
      <div className='flex flex-row gap-8'>
        <button 
          className='border-1 h-[40px] w-[120px] bg-sky-500 shadow-lg rounded-md'
          onClick={() => {
            navigate("/home")
          }}
        >
          Sign In
        </button>
        <button 
          className='border-1 h-[40px] w-[120px] bg-sky-500 shadow-lg rounded-md'
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