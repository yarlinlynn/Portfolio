import { useEffect, useRef, useState } from 'react'

import { useScreen } from "./context/ScreenContext.jsx";

import img from './assets/images/windows_logo.png';
// import logo from './assets/images/windows_logo-login.png'
// import desktopIocn from './assets/images/desktop_profile_icon.jpg';

// import './App.css'

function App() {

  const ref = useRef([]);

  useEffect( () => {
    ref.current.forEach( (el, i) => {
      el.animate(
        [
          { transform: "translateX(-30px)" },
          { transform: "translateX(180px)" },
        ],
        {
          duration: 1500,
          delay: i * 150,
          iterations: Infinity,
          easing: "linear",
        }
      )
    })
  })

  return (
    <>
      <section className='bg-[rgb(0,0,0)] text-[rgb(255,255,255)] w-full h-screen flex items-center justify-center flex-col gap-[3rem]'>
        
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
          {/* <span className='w-[9px] h-full inline-block rounded-[2px] mr-[2px] [background:linear-gradient(to_bottom,#2838c7_0%,#5979ef_17%,#869ef3_32%,#869ef3_45%,#5979ef_59%,#2838c7_100%)] animate-loader [animation-delay:0ms]overflow-hidden'></span>
          <span className='w-[9px] h-full inline-block rounded-[2px] mr-[2px] [background:linear-gradient(to_bottom,#2838c7_0%,#5979ef_17%,#869ef3_32%,#869ef3_45%,#5979ef_59%,#2838c7_100%)] animate-loader[animation-delay:150ms]overflow-hidden'></span>
          <span className='w-[9px] h-full inline-block rounded-[2px] mr-[2px] [background:linear-gradient(to_bottom,#2838c7_0%,#5979ef_17%,#869ef3_32%,#869ef3_45%,#5979ef_59%,#2838c7_100%)] animate-loader [animation-delay:300ms]overflow-hidden'></span> */}
        </div>
       
        <p className='text-[10px] fixed bottom-[1px] left-[5px]'>Microsoft Corporation</p>
        <p className='text-[20px] tracking-[1.5px] skew-x-[-10deg] fixed bottom-[1px] right-[5px]'>Portfolio</p>
     
      </section>
      {/* <section className='bg-[#002d99] w-full h-screen flex items-center justify-center flex-col'>
        <div className="bg-[#587cdb] h-[70vh] w-full container relative">
          <div>
            
            <div>
              <img src={logo} alt='Windows Logo'/>
            </div>
            <hr className='border-0 h-0.5 w-full max-w-[220px] opacity-25 bg-gradient-to-r from-transparent via-[#bad7f8] to-transparent'></hr>
            
            <button>
              <img src={desktopIocn} alt='desktop profile icon'/>
              <p>Yarlin</p>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App
