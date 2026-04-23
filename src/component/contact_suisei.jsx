import React from 'react'
import "../index.css"
import SuiseiOutfit1 from "../assets/Hoshimachi-Suisei_pr-img_01.png"
import Videosuisei from "../assets/Hoshimachi-Suisei_movie.mp4"

function contact_suisei() {
  return (
    <div className='flex w-full h-[800px] mt-5 justify-center items-center'>
        <div className='flex flex-row h-full w-[70%] gap-[20px]'>
            <div className='flex w-auto h-auto'>
                <img className='w-full h-full' src={SuiseiOutfit1} alt="" />
            </div>
            <div className='flex flex-col w-[600px] h-full justify-center gap-[50px]'>
                <div className='flex'>
                    <video src={Videosuisei} autoPlay muted loop></video>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex flex-row w-full gap-[10px]'>
                        <button className='flex w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>Youtube</p>
                        </button>
                        <button className='flex w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>X</p>
                        </button>
                    </div>
                    <div className='flex flex-row w-full gap-[10px]'>
                        <button className='flex w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>Song Playlist</p>
                        </button>
                        <button className='flex w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>星街すいせい Official Site</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact_suisei