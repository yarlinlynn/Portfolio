import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import { usePortfolio } from "./context/PortfolioContext.jsx";
import PopupWindow from "./components/PopupWindow.jsx";
import Portfolio from "./PortfolioPage.jsx";

import './App.css'

function App() {

  const { version } = usePortfolio();

  if (!version) return <PopupWindow/>

  return <Portfolio/>

}

export default App
