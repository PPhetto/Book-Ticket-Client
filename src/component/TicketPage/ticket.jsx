import React from 'react'
// picture
import Concert1 from '../../assets/hoshimatchi-suisei-live-tour-spectra-of-nova-has-been-v0-2j2w0lj6ozld1.webp'
import Concert2 from '../../assets/SiC_KV_design_RGB_01_1080p.jpg'
import Concert3 from '../../assets/suisei-announced-her-budoukan-live-supernova-v0-ccc2ano5qu0e1.webp'
import Concert4 from '../../assets/suisei_event_sss_img.png'

function ticket() {
  return (
    <div className='flex flex-col bg-blue-500 w-full h-screen lg:h-[500px] py-3 px-3 items-center lg:item-start gap-5'>
      <h1 className='text-white text-3xl lg:text-5xl font-bold'>Concert Tickets</h1>
      <div className='flex lg:w-full lg:h-full'>
        <ul className='flex lg:flex-row gap-5'>
          <li className='flex flex-col lg:h-full lg:w-[500px] items-center gap-5'>
            <img src={Concert1} alt="" className='h-[330px] w-full px-2'/>
            <p className='text-white text-4xl font-bold'>SPECTRA NOVA</p>
          </li>
          <li className='flex flex-col lg:h-full lg:w-[500px] items-center gap-5'>
            <img src={Concert2} alt="" className='h-[330px] w-full px-2'/>
            <p className='text-white text-4xl font-bold'>Shout in Crisis</p>
          </li>
          <li className='flex flex-col lg:h-full lg:w-[500px] items-center gap-5'>
            <img src={Concert3} alt="" className='h-[80%] w-full px-2'/>
            <p className='text-white text-4xl font-bold'>SUPER NOVA</p>
          </li>
          <li className='flex flex-col lg:h-full lg:w-[500px] items-center gap-5'>
            <img src={Concert4} alt="" className='h-[80%] w-full px-2'/>
            <p className='text-white text-4xl font-bold'>STELLA STELLA </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ticket