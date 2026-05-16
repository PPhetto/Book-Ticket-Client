import React, { useState } from 'react'
import '../index.css'
// component
import Menu from '../component/HomePage/menu'
import Banner from '../component/HomePage/banner'
import Interview_suisei from '../component/HomePage/interview_suisei'
import Single_suisei from '../component/HomePage/single_suisei'
import Contact_suisei from '../component/HomePage/contact_suisei'
import Footer from '../component/HomePage/footer'
import Ticket from '../component/TicketPage/ticket'
// image
import Svgticket from '../assets/ticket-svgrepo-com.svg'

function Home() {
  const [ticketpage,setTicketpage] = useState(false)
  return (
    <div className='relative'>
        <header>
          <Menu />
        </header>
        <main className='relative'>
          <section>
            <Banner />
          </section>
          <section>
            <Interview_suisei />
            <Contact_suisei />
          </section>
          <section>
            <Single_suisei />
          </section>
          <button
            onClick={() => {
              setTicketpage(!ticketpage)
            }}
            className='fixed w-[100px] h-[80px] bottom-15 right-15 justify-center items-center z-1000'
          >
            <img src={Svgticket} alt="ticket consert" className='w-full h-full' />
            <p className='font-bold text-blue-500'>Ticket</p>
          </button>
          {ticketpage && (
            <div className='fixed flex h-full w-full justify-center items-center z-100 inset-0'>
              <Ticket />
            </div>
          )}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home