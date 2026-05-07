import React, { useState } from 'react'
import { Link } from "react-router-dom";
// picture
import OpenMenu from '../../assets/menu-svgrepo-com.svg'
import ClocseMenu from '../../assets/close-svgrepo-com.svg'
function Menu() {
  const [cstatus,setCstatus] = useState(false)
  const [imgcheck,setImgcheck] = useState(false)

  return (
    <nav className="fixed relative w-full top-0 left-0 shadow-md bg-blue-500 z-1000">
      <div className='container mx-auto p-2 flex flex-row h-full justify-between items-center'>
        <h1 className="text-2xl text-white font-bold">🌠Hoshiyomi</h1>
        <ul className='lg:hidden flex h-full'>
          <li className='flex'>
            <Link
              onClick={() => {
                setImgcheck(!imgcheck)
              }}
            >
              <div>
                <img className='h-full w-[30px]' src={!imgcheck ? OpenMenu : ClocseMenu} alt="" />
              </div>
            </Link>
            {imgcheck && (
              <nav className='absolute top-12 justify-end text-end right-0 w-full h-auto flex bg-blue-400'>
                <ul className='container mx-auto flex flex-col h-full mr-5'>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>Home</p>
                  </li>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>About</p>
                  </li>
                  <li className='h-full p-3'>
                    <p className='text-white text-[18px]'>Gallery</p>
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
          <li className="relative flex flex-col">
            <button 
              className='flex flex-row items-center text-white gap-[5px]'
              onClick={() => {
                setCstatus(!cstatus)
              }}
            >
              About
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
            </button>
            { cstatus && (
              <div className='absolute flex flex-col text-white mt-[37px] bg-blue-500 shadow-lg rounded-md justify-center w-[180px] px-3 py-2 left-[-110px] gap-[5px]'>
                  <a href="#">Overview</a>
                  <a href="#">Profile</a>
                  <a href="#">Achievements</a>
                  <a href="#">Highlights</a>
                  <a href="#">Logout</a>
              </div>
            )}
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="">
              Gallery
            </a>
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="">
              Music / Video
            </a>
          </li>
          <li className="flex">
            <a className='flex flex-row items-center text-white gap-[5px]' href="">
              Contact
            </a>
          </li>
          <li className="flex">
            <Link 
              className='flex flex-row items-center text-white gap-[5px]' 
              to="/"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu