import { useEffect, useRef, useState } from 'react'

import { useScreen } from "./context/ScreenContext.jsx";

// import img from './assets/images/windows_logo.png';
import logo from './assets/images/logo.png';
import desktopIocn from './assets/images/desktop_profile_icon.jpg';

// import './App.css'

function App() {

  // const ref = useRef([]);

  // useEffect( () => {
  //   ref.current.forEach( (el, i) => {
  //     el.animate(
  //       [
  //         { transform: "translateX(-30px)" },
  //         { transform: "translateX(180px)" },
  //       ],
  //       {
  //         duration: 1500,
  //         delay: i * 150,
  //         iterations: Infinity,
  //         easing: "linear",
  //       }
  //     )
  //   })
  // })

  return (
    <>
      {/* <section className='bg-[rgb(0,0,0)] text-[rgb(255,255,255)] w-full h-screen flex items-center justify-center flex-col gap-[3rem]'>
        
        <img src={img} className=" max-w-[280px] w-[60%] filter saturate-105 brightness-105" alt='Windows Logo'/>

        <div className='w-[180px] h-[22px] border rounded-[7px] border-[#b2b2b2] p-[2px] mx-auto overflow-hidden'>
          {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => (ref.current[i] = el)}
            className="w-[9px] h-full inline-block rounded-[2px]"
            style={{
              background:
                "linear-gradient(to bottom,#2838c7 0%,#5979ef 17%,#869ef3 32%,#869ef3 45%,#5979ef 59%,#2838c7 100%)",
            }}
            />
          ))}
        </div>
       
        <p className='text-[10px] fixed bottom-[1px] left-[5px]'>Microsoft Corporation</p>
        <p className='text-[20px] tracking-[1.5px] skew-x-[-10deg] fixed bottom-[1px] right-[5px]'>Portfolio</p>
     
      </section> */}
      <section className='fixed w-screen h-screen bg-[#002d99] top-0 left-0 overflow-hidden text-[#ffffff]'>
        <div className="absolute top-[100px] bottom-[100px] left-[0px] right-[0px] bg-[#587cdb] 
        before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-[3px] before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-[#bad7f8] before:to-transparent 
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-[linear-gradient(to_right,transparent,#f8953d,transparent,transparent)]">
          
          <div className='relative flex w-full h-full items-center justify-center gap-[0.5rem]'>
            <div className='w-[150px]'>
              <div className='flex items-baseline'>
                <p className='tracking-[0.8px] text-[12px]'>
                  Microsoft 
                  <span className='mx-[6px] text-[9px]'>&#174;</span>
                </p>
                <img src={logo} className='w-[25%] ml-[1rem]' alt='Windows Logo'/>
              </div>
              <p className='text-[25px] font-semibold tracking-[0.5px]'>
                Windows 
                <span className='text-[12px] mx-[6px] relative bottom-[10px]'>&#174;</span> 
                <span className='text-[15px] text-[#e67935] relative bottom-[10px] font-semibold'>xp</span> 
              </p>
              <span className='text-[10px]'>To begin, click on username</span>
            </div>
            <div className='flex w-px h-[24rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.48)_49.48%,rgba(255,255,255,0)_100%)]'></div>
            <div className="back-gradient relative group">
              <div>
                {/* desktop icon goes here */}
                <img src={desktopIocn} className='w-[70px] rounded-[5px] border-[3px] border-white transition-colors duration-300 opacity-[0.8] group-hover:border-[#fdbd32]' alt='Desktop Icon'/>
              </div>
              <p className='text-center group-hover:text-[#fdbd32] mt-[5px] tracking-[0.8px]'>Yarlin</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App

