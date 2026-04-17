import React from 'react'
import "../index.css"

function menu() {
  return (
    <nav className="flex px-6 py-4 bg-blue-600 justify-between item-center text-white">
      <h1 className="">Try_tailwind-css</h1>
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