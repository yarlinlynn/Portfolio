import { useEffect, useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

import icon from '../assets/images/msg_question-0.png'

function PopupWindow() {

    const { chooseVersion } = usePortfolio();

  return (

        <div className="popup transtion">
            <div className='window window-popup'>
                <div className='title-bar'>
                    <div className='title-bar-text'>System message</div>
                    <div className="title-bar-controls">
                        <button aria-label="Help" disabled></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <p>
                        <span className='window-icon'>
                            <img src={icon} alt="popup window icon"/>
                        </span>
                        Welcome! Before you can explore my portfolio, please choose an option below to fit what you're looking for.
                    </p>

                    <button onClick={() => chooseVersion("website")}>I need a website</button>
                    <button onClick={() => chooseVersion("developer")}>I need a developer</button>
                </div>
            </div>
        </div>
  )
}

export default PopupWindow
