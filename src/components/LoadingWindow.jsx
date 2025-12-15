import { useEffect, useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

import computerIcon from '../assets/images/shut_down_with_computer-0.png';
import loadingIcon from '../assets/images/application_hourglass-0.png';

function LoadingWindow( { onComplete }) {

    const [progress, setProgress] = useState(0);

    // useEffect(() => {
    //     let value = 0;

    //     const interval = setInterval(() => {
    //     // slow, uneven increments = realistic
    //     value += Math.random() * 6;

    //     // never finish on its own
    //     if (value >= 92) value = 92;

    //     setProgress(value);
    //     }, 250);

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
        value += Math.random() * 6;

        if (value >= 95) {
            value = 100;
            setProgress(value);

            clearInterval(interval);

            setTimeout(() => {
            onComplete();
        }, 300);
        } else {
            setProgress(value);
        }
        }, 250);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="window loading-window">
            <div className="title-bar">
                <img src={computerIcon} alt="computer icon"/>
                <div className="title-bar-text">PORTFOLIO.DEV</div>
            </div>
            <div className="window-body">
                <div className='loading-text'>
                    <img src={loadingIcon} alt="loading portfolio icon"/>
                    <p>Please be patient while portfolio is loading ...</p>
                </div>

                <div className='loading-animation'>
                    <div class="progress-indicator segmented">
                        <span class="progress-indicator-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default LoadingWindow