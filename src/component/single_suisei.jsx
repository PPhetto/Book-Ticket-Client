import React from 'react'
import "../index.css"
import Nextcolor from '../assets/4fa54cb97a7aee6e80e7bb7620c84b44.1000x1000x1.png'
import Ghost from '../assets/e3565f292c72e55950ccf95a73f53fed.1000x1000x1.png'
import Stella from '../assets/星街すいせい_Still-Still-Stellar_jk-e1661750845464.png'

function single_suisei() {
  return (
    <div className='flex flex-col justify-center items-center mb-50'>
        <h3 className='text-[48px] mt-10 ml-10 mb-5 text-[#4A90E2] font-bold'>
            Top 3 Most Viewed Songs
        </h3>
        <div className='grid grid-cols-3 justify-cente gap-[50px] mt-5'>
            <div className='flex flex-col items-center bg-red-600 w-[450px] h-[450px]'>
                <img className='object-cover w-full h-full' src={Nextcolor} alt="" />
                <p className='mt-5 font-bold text-[22px]'>
                    NEXT COLOR PLANET
                </p>
                <p className='mt-5'>
                    “เพลงที่เป็นเหมือนจุดเริ่มต้นของการเดินทางสู่จักรวาลของเธอ จังหวะสดใสแต่เต็มไปด้วยพลัง ทำให้รู้สึกเหมือนกำลังถูกชวนให้ออกไปค้นหาสีสันใหม่ๆ ของชีวิต และก้าวไปข้างหน้าโดยไม่ต้องกลัว 🌠”
                </p>
            </div>
            <div className='flex flex-col items-center bg-red-600 w-[450px] h-[450px]'>
                <img className='object-cover w-full h-full' src={Stella} alt="" />
                <p className='mt-3 font-bold text-[22px]'>
                    Stella Stella
                </p>
                <p>
                    “นี่ไม่ใช่แค่เพลงธรรมดา แต่มันคือเส้นทางของคนคนหนึ่งที่พยายามจะเปล่งประกายให้ได้ในโลกที่มืดมน เสียงที่เต็มไปด้วยความหวัง ความพยายาม และความไม่ยอมแพ้ ทำให้เพลงนี้กลายเป็นแรงผลักดันให้ใครหลายคน ✨”
                </p>
            </div>
            <div className='flex flex-col items-center bg-red-600 w-[450px] h-[450px]'>
                <img className='object-cover w-full h-full' src={Ghost} alt="" />
                <p className='mt-3 font-bold text-[22px]'>
                    GHOST
                </p>
                <p>
                    “บางครั้งความเจ็บปวดมันไม่สามารถพูดออกมาได้ตรงๆ… แต่เสียงเพลงนี้ถ่ายทอดมันออกมาได้หมด ทุกคำร้องเหมือนสะท้อนความรู้สึกที่ซ่อนอยู่ลึกๆ และยิ่งฟังยิ่งรู้สึกว่า ‘เราไม่ได้อยู่คนเดียว’ 💙
                ”</p>
            </div>
        </div>
    </div>
  )
}

export default single_suisei