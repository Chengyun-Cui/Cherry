import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContext } from './components/ThemeContext';

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <StrictMode>
      <App />
      </StrictMode>
  </ThemeContext>
)
