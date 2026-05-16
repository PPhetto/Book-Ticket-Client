import React from 'react'
/* Assets */
import Suisei from "../../assets/hoshimachi-suisei-aesthetic-discord-pfp-xyqq0f1fuahul92q.webp"

function banner() {
  return (
    <div className='flex w-full h-[800px]'>
        <div className='flex relative w-full h-full items-center justify-center'>
            <img className='w-full h-full object-cover blur-[6px]' src={Suisei} alt="" />
            <p className='absolute text-white text-8xl lg:text-9xl drop-shadow-lg [writing-mode:vertical-rl] lg:[writing-mode:horizontal-tb]'>星街すいせい</p>
        </div>
    </div>
    
  )
}

export default banner