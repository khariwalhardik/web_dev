import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //due to the strict mode, the useEffect hook will be called twice
  // <StrictMode>
    <App />
  // </StrictMode>,
)
