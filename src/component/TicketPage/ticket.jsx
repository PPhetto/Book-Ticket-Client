import React from 'react'

function ticket() {
  return (
    <div className='flex flex-col bg-red-500 w-full h-screen lg:h-[500px] py-3 px-3 items-center lg:item-start gap-5'>
      <h1 className='text-white text-3xl lg:text-5xl font-bold'>Concert Ticket Book</h1>
      <div className='flex lg:w-full lg:h-full bg-green-500'>
        <ul className='flex lg:flex-row gap-5'>
          <li className='flex lg:h-full lg:w-[500px] bg-yellow-500'>

          </li>
          <li className='flex lg:h-full lg:w-[500px] bg-yellow-500'>

          </li>
          <li className='flex lg:h-full lg:w-[500px] bg-yellow-500'>

          </li>
          <li className='flex lg:h-full lg:w-[500px] bg-yellow-500'>

          </li>
          <li className='flex lg:h-full lg:w-[500px] bg-yellow-500'>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default ticket