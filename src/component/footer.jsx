import React from 'react'

function footer() {
  return (
    <div className="flex h-[350px] w-full bg-[url('/z78jtefzwl8c3.webp')] bg-cover bg-no-repeat mt-50">
        <div className='flex flex-row h-full px-30 py-20 w-[55%] gap-[70px]'>
            <div className='flex w-auto h-auto ml-[20px]'>
                <div className='flex flex-col w-auto h-auto'>
                    <h3 className='font-bold text-[22px] text-white'>
                        Navigation
                    </h3>
                    <ul className='flex flex-col text-white gap-[10px] mt-[20px]'>
                        <li>
                            <p>🌠 Home</p>
                        </li>
                        <li>
                            <p>🌠 About</p>
                        </li>
                        <li>
                            <p>🌠 Gallery</p>
                        </li>
                        <li>
                            <p>🌠 Music / Videos</p>
                        </li>
                        <li>
                            <p>🌠 Contact</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-[1px] bg-white/30 h-full"></div>

            <div className='flex w-auto h-auto ml-[20px]'>
                <div className='flex flex-col w-auto h-auto'>
                    <h3 className='font-bold text-[22px] text-white'>
                        Social / Follow
                    </h3>
                    <ul className='flex flex-col text-white gap-[10px] mt-[20px]'>
                        <li>
                            <p>🌠 YouTube</p>
                        </li>
                        <li>
                            <p>🌠 Twitter (X)</p>
                        </li>
                        <li>
                            <p>🌠 TikTok</p>
                        </li>
                        <li>
                            <p>🌠 Instagram</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-[1px] bg-white/30 h-full"></div>

            <div className='flex w-auto h-auto ml-[20px]'>
                <div className='flex flex-col w-auto h-auto'>
                    <h3 className='font-bold text-[22px] text-white'>
                        Quick Links
                    </h3>
                    <ul className='flex flex-col text-white gap-[10px] mt-[20px]'>
                        <li>
                            <p>🌠 FAQ</p>
                        </li>
                        <li>
                            <p>🌠 Privacy Policy</p>
                        </li>
                        <li>
                            <p>🌠 Terms</p>
                        </li>
                        <li>
                            <p>🌠 Support</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer