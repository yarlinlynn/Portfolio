import { useEffect, useState } from 'react'

import { usePortfolio } from './context/PortfolioContext'

import about from './assets/images/msg_information-0.png'
import work from './assets/images/directory_open_file_mydocs-4.png'
import faq from './assets/images/search_file-1.png'
import booking from './assets/images/calendar-1.png'
import contact from './assets/images/envelope_closed-0.png'
import homepage from './assets/images/windows-0.png'

function Portfolio() {

  const { version, resetPortfolio} = usePortfolio();

  return (
    <>

      <button className='buttons toggle transtion' onClick={resetPortfolio}>
          <img src={homepage} alt='Toggle back to Popup'/>
      </button>

      <main className='window transtion portfolio-page'>
        <div className='title-bar'>
          <div className='title-bar-text'>Portfolio</div>
        </div>
      
        <section className='window-body'>

          <div className='intro-text'>
            <h3>hi! i'm yarlin</h3>
            <p className='typing-text'>
              intro text goes here ...
            </p>
          </div>

          <div className='main-content'>

            <div className='btn-container'>
              <button className='buttons'>
                <img src={about} alt='About Me'/>
              </button>
              <p>About</p>
            </div>

            <div className='btn-container'>
              <button className='buttons'>
                <img src={work} alt='My Projects'/>
                {/* { version === "website" && <Work/> }
                { version === "developer" && <Projects/>} */}
              </button>
              <p>Work</p>
            </div>

            <div className='btn-container'>
              <button className='buttons'>
                <img src={faq} alt='FAQ'/>
              </button>
              <p>FAQ</p>
            </div>

            <div className='btn-container'>
              <button className='buttons'>
                <img src={booking} alt='Book an Appointment'/>
              </button>
              <p>Book</p>
            </div>

            <div className='btn-container'>
              <button className='buttons'>
                <img src={contact} alt='Contact Me'/>
              </button>
              <p>Contact</p>
            </div>

            <div className='btn-container toggle'>
              <button className='buttons' onClick={resetPortfolio}>
                <img src={homepage} alt='Toggle back to Popup'/>
              </button>
              <p>Back</p>
            </div>
            
          </div>
        </section>
      </main>

      <footer>
        {/* <ul className='socials'>
          <li>
            <a href="tel:0846333377" target="_blank">
              <i class="ri-phone-fill"></i>
            </a>
          </li>
        </ul> */}
        <div className="footer-text">© 2025 Yarlin Lynn</div>
      </footer>
    </>
  )
}

export default Portfolio