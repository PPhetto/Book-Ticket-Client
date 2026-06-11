import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// picture
import OpenMenu from '../../assets/menu-svgrepo-com.svg'
import ClocseMenu from '../../assets/close-svgrepo-com.svg'
function Menu() {
  const [imgcheck,setImgcheck] = useState(false)

  const [cflogin, setCflogin] = useState(false)

  useEffect(() => {
    const checktoken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setCflogin(false)
      } else {
        setCflogin(true)
      }
    }
    checktoken()
  }, [])

  async function Logoutfetch() {
    await localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav className="relative w-full top-0 left-0 shadow-md bg-blue-500 z-1000">
      <div className='container mx-auto p-2 flex flex-row h-full justify-between items-center'>
        <h1 className="text-2xl text-white font-bold">🌠Hoshiyomi</h1>
        <ul className='lg:hidden flex h-full'>
          <li className='flex'>
            <button
              onClick={() => {
                setImgcheck(!imgcheck)
              }}
            >
              <div>
                <img className='h-full w-[30px]' src={!imgcheck ? OpenMenu : ClocseMenu} alt="" />
              </div>
            </button>
            {imgcheck && (
              <nav className='absolute top-12 justify-end text-end right-0 w-full h-auto flex bg-blue-500'>
                <ul className='container mx-auto flex flex-col h-full mr-5'>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>Home</p>
                  </li>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>About</p>
                  </li>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>Music / Video</p>
                  </li>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>Logout</p>
                  </li>
                </ul>
              </nav>
            )}
          </li>
        </ul>
        <ul className="hidden lg:flex lg:flex-row lg:gap-[30px]">
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="">
              Home
            </a>
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="#About">
              About
            </a>
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="#Music">
              Music / Video
            </a>
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="#Contact">
              Contact
            </a>
          </li>
          {cflogin && (
            <li className="flex">
              <a className='flex flex-row items-center text-white gap-[5px]' href="">
                MyPhofile
              </a>
            </li>
          )}
          {!cflogin && (
            <li className="flex">
            <Link 
              className='flex flex-row items-center text-white gap-[5px]' 
              to="/Login"
            >
              Login
            </Link>
          </li>
          )}
          {cflogin && (
            <li className="flex">
              <Link 
                className='flex flex-row items-center text-white gap-[5px]' 
                onClick={() => {
                  Logoutfetch()
                }}
                to="/"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Menu