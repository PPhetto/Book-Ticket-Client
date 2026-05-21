import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import Concert1 from '../../assets/hoshimatchi-suisei-live-tour-spectra-of-nova-has-been-v0-2j2w0lj6ozld1.webp'
import Concert2 from '../../assets/SiC_KV_design_RGB_01_1080p.jpg'
import Concert3 from '../../assets/suisei-announced-her-budoukan-live-supernova-v0-ccc2ano5qu0e1.webp'
import Concert4 from '../../assets/suisei_event_sss_img.png'
import Concert5 from '../../assets/30268-1192-92496f1df0022ae7ddc454813e5829b6-1920x1080-1.webp'


function Ticket() {
  const concerts = [
    { id: 1, img: Concert1, name: 'SPECTRA NOVA', price: '฿2,500' },
    { id: 2, img: Concert2, name: 'Shout in Crisis', price: '฿1,800' },
    { id: 3, img: Concert3, name: 'SUPER NOVA', price: '฿3,200' },
    { id: 4, img: Concert4, name: 'STELLA STELLA', price: '฿2,900' },
    { id: 5, img: Concert5, name: 'SuperNova: REBOOT', price: '฿4,500' },
  ]

  const VISIBLE = 6

  const [index, setIndex] = useState(0)

  const canLeft = index > 0
  const canRight = index + VISIBLE < concerts.length

  const scroll = (dir) => {
    setIndex((prev) =>
      dir === 'left'
        ? Math.max(prev - 1, 0)
        : Math.min(prev + 1, concerts.length - VISIBLE)
    )
  }

  return (
    <div className="flex flex-col w-full min-h-screen lg:min-h-0 lg:h-[540px] bg-blue-500 py-6 px-4 items-center gap-6">
      <h1 className="text-white text-3xl lg:text-5xl font-bold">
        Concert Tickets
      </h1>
      <div className="relative w-full flex items-center justify-center gap-3">
        <button
          onClick={() => scroll('left')}
          disabled={!canLeft}
          className="w-9 h-9 flex-shrink-0 rounded-full bg-white/20 hover:bg-white hover:text-blue-500 text-white text-xl font-bold transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center"
        >
          ‹
        </button>
        <ul className="flex flex-row w-full gap-5 overflow-hidden justify-center">
          {concerts.slice(index, index + VISIBLE).map((c) => (
            <li
              key={c.id}
              className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-[220px] lg:w-[240px] h-[300px] lg:h-[330px] rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/20 group-hover:ring-white/60 transition-all duration-300">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-white text-xl font-bold tracking-wide group-hover:text-blue-100 transition-colors">
                {c.name}
              </p>
              <div className='flex flex-row gap-7'>
                <p className="text-white text-xl font-bold tracking-wide group-hover:text-blue-100 transition-colors">
                  {c.price}
                </p>
                <button
                  className="flex items-center gap-1.5 px-7 py-1 rounded-full bg-white hover:bg-red-400 active:scale-95 active:bg-blue-600 text-blue-500 hover:text-white text-sm font-semibold shadow-md shadow-blue-500/40 hover:shadow-blue-400/50 transition-all duration-200"
                >
                  <p>BUY</p>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scroll('right')}
          disabled={!canRight}
          className="w-9 h-9 flex-shrink-0 rounded-full bg-white/20 hover:bg-white hover:text-blue-500 text-white text-xl font-bold transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Ticket
