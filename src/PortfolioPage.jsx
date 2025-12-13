import { useEffect, useState } from 'react'

import { usePortfolio } from './context/PortfolioContext'

import about from './assets/images/msg_information-0.png'
import work from './assets/images/directory_open_file_mydocs-4.png'
import faq from './assets/images/search_file-1.png'
import booking from './assets/images/calendar-1.png'
import contact from './assets/images/message_envelope_open-0.png'
import homepage from './assets/images/windows-0.png'

function Portfolio() {

  const { version, resetPortfolio} = usePortfolio();

  return (
    <>
      <main className='window transtion portfolio-page'>
        <div className='title-bar'>
          <div className='title-bar-text'>Portfolio</div>
        </div>
        <section className='window-body'>
          <div className='intro-text'>
            <h3>Hi there, I'm Yarlin</h3>
            <p className='typing-text'></p>
          </div>
          <div className='main-content'>
            <button className='buttons'>
              <img src={about} alt='About Me'/>
              <p>About Me</p>
            </button>
            <button className='buttons'>
              <img src={work} alt='My Projects'/>
              {/* { version === "website" && <Work/> }
              { version === "developer" && <Projects/>} */}
              <p>My Work</p>
            </button>
            <button className='buttons'>
              <img src={faq} alt='FAQ'/>
              <p>FAQ</p>
            </button>
            <button className='buttons'>
              <img src={booking} alt='Book an Appointment'/>
              <p>Book Appointment</p>
            </button>
            <button className='buttons'>
              <img src={contact} alt='Contact Me'/>
              <p>Contact Me</p>
            </button>
            <button className='buttons' onClick={resetPortfolio}>
              <img src={homepage} alt='Toggle back to Popup'/>
              <p>Toggle Homepage</p>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Portfolio