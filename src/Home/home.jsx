import React from 'react'
import '../index.css'
// cpmponent
import Menu from '../component/HomePage/menu'
import Banner from '../component/HomePage/banner'
import Interview_suisei from '../component/HomePage/interview_suisei'
import Single_suisei from '../component/HomePage/single_suisei'
import Contact_suisei from '../component/HomePage/contact_suisei'
import Footer from '../component/HomePage/footer'

function home() {
  return (
    <div>
        <header>
            <Menu />
        </header>
        <main>
            <Banner />
            <Interview_suisei />
            <Contact_suisei />
            <Single_suisei />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default home