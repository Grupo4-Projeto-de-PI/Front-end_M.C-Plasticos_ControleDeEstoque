import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginDeUsuario from './pages/login-de-usuario/view/login-de-usuario.jsx';
import { LoginUsuarioController } from './pages/login-de-usuario/controller/login-usuario.controller.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginUsuarioController />
  </StrictMode>,
)
