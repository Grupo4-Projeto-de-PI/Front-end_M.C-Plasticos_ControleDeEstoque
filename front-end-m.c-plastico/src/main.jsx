import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListarEstoqueAtual from './pages/listar-estoque-atual/view/listar-estoque-atual'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListarEstoqueAtual />
  </StrictMode>,
)
