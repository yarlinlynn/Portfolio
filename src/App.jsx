import { useState, useEffect } from 'react'

import { usePortfolio } from "./context/PortfolioContext.jsx";

import StartUpWindow from "./components/StartUpWindow.jsx";
import Portfolio from "./Pages/PortfolioPage.jsx";

import './App.css'

function App() {

  const { version, startupWindow, setStartupWindow } = usePortfolio();
  const [ loading, setLoading] = useState(0);

  useEffect( () => {
    if(startupWindow !== "loading") return;

    setLoading(0);

    const loader = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 95) {
          clearInterval(loader);
          setTimeout(() => setStartupWindow("done"), 400);
          return 95;
        }

        const increment =
          prev < 60 ? 6 : prev < 80 ? 4 : 1.5;

        return Math.min(prev + increment, 95);
        });
      }, 200);

      return () => clearInterval(loader);
    }, [startupWindow, setStartupWindow]);

  //   const loader = setInterval(() => {
  //     setLoading( (progress) => {
  //       if(progress >= 95) {
  //         clearInterval(loader);
  //         setTimeout( () => {
  //           setStartupWindow("done");
  //         }, 400);
  //         return 95;
  //       }
  //       return progress + Math.random() * 6 + 2
  //     });
  //   }, 200);

  //   return () => clearInterval(loader);
  // }, [startupWindow, setStartupWindow]);

  if(!version || startupWindow !== "done") {
    return <StartUpWindow loading={loading}/>;
  }

  return <Portfolio/>

}

export default App
