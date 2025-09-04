import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginDeUsuario from './pages/login-de-usuario/view/login-de-usuario'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginDeUsuario />
  </StrictMode>,
)
