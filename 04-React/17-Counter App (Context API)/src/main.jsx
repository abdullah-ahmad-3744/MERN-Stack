import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountContextProvider } from './context/CountContext.jsx'

createRoot(document.getElementById('root')).render(
  <CountContextProvider>
      <App/>
  </CountContextProvider>
)
