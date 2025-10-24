import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppExemplos from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppExemplos />
  </StrictMode>,
)
