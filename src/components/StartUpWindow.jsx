
import { usePortfolio } from '../context/PortfolioContext'

import desktopProfile from '../assets/images/desktop_profile_icon.jpg';

function PopupWindow() {

  const {
    startupWindow,
    chooseVersion,
    setStartupWindow
  } = usePortfolio();

  return (
    <section className='start_up-window'>
        <div className='container background'>
          <div className='window glass'>
            {/* profile image goes here */}
            <img src={desktopProfile} alt="Desktop Profile"/>
          </div>
          <div className='start-program'>
            {startupWindow === "welcome" &&
              <>
                {/* <p className='adimin'>Welcome to my Desktop! <br></br> Before you can start exploring, please choose one of the options below to optimize your browsing experience. <br></br>Have fun!</p> */}
                <div className='popup-btns'>
                  <button onClick={() => chooseVersion("website")}>I need a website</button>
                  <button onClick={() => chooseVersion("developer")}>I need a developer</button>
                </div>
              </>
            }
            {startupWindow === "loading" &&
              <>
                {/* <p className='loading-text'>Please wait while portfolio is loading</p> */}
                <span className="loader animate" aria-label="Processing your request"></span>
                {/* <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80">
                  <div style={{ width: `${loading}%` }}></div>
                </div> */}
              </>
            }
          </div>
        </div>
    </section>    
  )
}

export default PopupWindow


// <section className='popup-container transtion'>
//         <div className='window active window-popup'>
//             <div className="title-bar">
//                 <div className="title-bar-text">System message</div>
//                     <div class="title-bar-controls">
//                     <button aria-label="Help"></button>
//                     <button aria-label="Close" disabled></button>
//                 </div>
//             </div>
//             <div class="window-body">
//                 <p className='popup-text'>
//                     <span className='window-icon'>
//                         <img src={icon} alt="popup window icon"/>
//                     </span>
//                     Welcome! Before you can explore my portfolio, please choose an option below to fit what you're looking for.
//                 </p>
//                 <div className='popup-btns'>
//                     <button onClick={() => chooseVersion("website")}>I need a website</button>
//                     <button onClick={() => chooseVersion("developer")}>I need a developer</button>
//                 </div>
//             </div>
//         </div>
        
        
//     </section>
