import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Menu() {
  const [cstatus,setCstatus] = useState(false)


  return (
    <nav className="fixed top-0 flex w-full h-10 p-6 bg-blue-600 justify-between items-center text-white z-50">
      <h1 className="text-[22px]">🌠Hoshiyomi</h1>
      <ul className="flex flex-row gap-[30px]">
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
            <div className='absolute flex flex-col mt-[35px] bg-blue-500 shadow-lg rounded-md justify-center w-[180px] px-3 py-2 left-[-110px] gap-[5px]'>
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
    </nav>
  )
}

export default Menu