import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioProvider } from './context/PortfolioContext.jsx'
import './index.css'
import App from './App.jsx'
// import '98.css'
import "7.css/dist/7.css";

createRoot(document.getElementById('root')).render(
  <PortfolioProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PortfolioProvider>,
)
