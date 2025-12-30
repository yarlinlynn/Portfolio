import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ScreenProvider } from './context/ScreenContext.jsx';

import 'xp.css/dist/XP.css'
import '../src/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ScreenProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ScreenProvider>,
)
