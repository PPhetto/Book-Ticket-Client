import React, { useEffect } from 'react'
import { useState } from 'react'
import SuiseiOutfit1 from "../../assets/Hoshimachi-Suisei_pr-img_01.png"
import SuiseiOutfit2 from "../../assets/Hoshimachi-Suisei_pr-img_07.png"
import SuiseiOutfit3 from "../../assets/Hoshimachi-Suisei_pr-img_03.png"
import Videosuisei from "../../assets/Hoshimachi-Suisei_movie.mp4"

function Contact_suisei() {

    const outfit = [SuiseiOutfit1, SuiseiOutfit2, SuiseiOutfit3]

    const [indexof,setIndexof] = useState(0)

    useEffect(() => {
        const countindex = setInterval(() => {
            setIndexof((index) => (index + 1) % outfit.length)
        }, 20000)
        return () => clearInterval(countindex)
    }, [outfit.length])
  return (
    <div className='flex w-full h-auto mt-5 justify-center items-center'>
        <div className='flex flex-col lg:flex-row h-full w-[70%] gap-[20px]'>
            <div className='relative flex max-w-[500px] max-h-[800px]'>
                <img className='w-full h-full' src={outfit[indexof]} alt="" />
                <div className="absolute flex flex-col gap-2 top-20">
                    {outfit.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndexof(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300
                                ${i === indexof ? "bg-blue-500 scale-125" : "bg-gray-300"}
                            `}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-auto lg:w-[600px] h-auto justify-center gap-[50px]'>
                <div className='flex w-auto'>
                    <video src={Videosuisei} autoPlay muted loop></video>
                </div>
                <div className='flex flex-col gap-[10px] w-auto h-auto lg:w[600px]'>
                    <div className='flex flex-col lg:flex-row w-full gap-[10px]'>
                        <button className='flex w-auto lg:w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>Youtube</p>
                        </button>
                        <button className='flex w-auto lg:w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>X</p>
                        </button>
                    </div>
                    <div className='flex flex-col lg:flex-row w-full gap-[10px]'>
                        <button className='flex w-auto lg:w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>Song Playlist</p>
                        </button>
                        <button className='flex w-auto lg:w-[295px] h-[45px] justify-center items-center rounded-[10px] border-1 border-gray-400'>
                            <p className='text-black'>星街すいせい Official Site</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_suisei