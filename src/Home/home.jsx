import React, { useState, useEffect } from 'react'
import '../index.css'
// component
import Menu from '../component/HomePage/menu'
import Banner from '../component/HomePage/banner'
import Interview_suisei from '../component/HomePage/interview_suisei'
import Single_suisei from '../component/HomePage/single_suisei'
import Contact_suisei from '../component/HomePage/contact_suisei'
import Footer from '../component/HomePage/footer'
import Ticket from '../component/TicketPage/ticket'
import Auth from '../component/Authorization/auth'
import Ticketclaud from '../component/TicketPage/Ticket_claud'
// image
import Svgticket from '../assets/ticket-svgrepo-com.svg'

function Home() {
  const [ticketpage,setTicketpage] = useState(false)

  const [cflogin, setCflogin] = useState(false)

  useEffect(() => {
    const checktoken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setCflogin(false)
      } else {
        setCflogin(true)
      }
    }
    checktoken()
  }, [])
  return (
    <div className='relative'>
        <header>
          <Menu />
        </header>
        <main className='relative'>
          {/* <Auth /> */}
          <section>
            <Banner />
          </section>
          <section id='About'>
            <Interview_suisei />
            <Contact_suisei />
          </section>
          <section id='Music'>
            <Single_suisei />
          </section>
          <button
            onClick={() => {
              if (!cflogin) {
                alert("Please Login!")
              } else {
                setTicketpage(!ticketpage)
              }
            }}
            className='fixed w-[100px] h-[80px] bottom-15 right-15 justify-center items-center z-1000'
          >
            <img src={Svgticket} alt="ticket consert" className='w-full h-full' />
            <p className='font-bold text-blue-500'>Ticket</p>
          </button>
          {ticketpage && (
            <div className='fixed flex h-full w-full justify-center items-center z-100 inset-0'>
              <Ticketclaud />
            </div>
          )}
        </main>
        <footer id='Contact'>
            <Footer />
        </footer>
    </div>
  )
}

export default Home