import React from 'react'
import "../index.css"

function menu() {
  return (
    <nav className="fixed top-0 flex w-full h-10 px-4 bg-blue-600 justify-between items-center text-white z-50">
      <h1 className="text-[22px]">🌠Hoshiyomi</h1>
      <ul className="flex flex-row gap-5">
        <li className="">
          <a className='text-white' href="">Home</a>
        </li>
        <li className="">
          <a className='text-white' href="">About</a>
        </li>
        <li className="">
          <a className='text-white' href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default menu