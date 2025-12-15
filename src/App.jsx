import { useState, useEffect } from 'react'

import { usePortfolio } from "./context/PortfolioContext.jsx";

import PopupWindow from "./components/PopupWindow.jsx";
import LoadingWindow from './components/LoadingWindow.jsx';
import Portfolio from "./PortfolioPage.jsx";

import './App.css'

function App() {

  const { version } = usePortfolio();
  const [loading, setLoading] = useState(false);

  // useEffect( () => {
  //   // if(version) {
  //   //   setLoading(true);
  //   //       setTimeout(() => setLoading(false), 5000);
  //   // }
  //   if (version) {
  //     setLoading(true);

  //     // simulate "app boot"
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 4500);

  //     return () => clearTimeout(timer);
  //   }
  // }, version)
  
  useEffect(() => {
    if (version) {
      setLoading(true);
    }
  }, [version]);

  if (!version) return <PopupWindow/>
  if (loading) return <LoadingWindow onComplete={() => setLoading(false)} />

  return <Portfolio/>

}

export default App
