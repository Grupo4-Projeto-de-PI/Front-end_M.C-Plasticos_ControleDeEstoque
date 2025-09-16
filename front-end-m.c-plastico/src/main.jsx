import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoginUsuarioController } from './pages/Jornada_Tela_Inicial/login-de-usuario/index.js';
import { ListarHistoricoController } from './pages/Jornada_De_Transacoes/listar-historico/index.js';
import  ListarEstoqueAtual  from './pages/Jornada_de_Estoque_Atual/listar-estoque-atual/view/listar-estoque-atual.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginUsuarioController />
  </StrictMode>,
)
