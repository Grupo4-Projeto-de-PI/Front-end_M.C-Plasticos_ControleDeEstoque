import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';
import { FaBoxes, FaBoxOpen, FaHistory, FaUsers, FaFileExcel } from 'react-icons/fa';


function MenuLateral({ onClose }) {
  const navegate = useNavigate();
  return (

    <>
      <div className="sidebar-overlay" onClick={onClose}></div>

      <div className="sidebar">
        <h2 className="sidebar-title">M.C Plásticos</h2>
        <ul className="sidebar-menu">
          <li><FaBoxes /> <span onClick={() => navegate("/listar-estoque-atual")}>Estoque</span></li>
          <li><FaBoxOpen /> <span onClick={() => navegate("/listar-produtos")}>Produtos</span></li>
          <li><FaHistory /> <span onClick={() => navegate("/historico-transacao")}>Registros</span></li>
          <li><FaUsers /> <span onClick={() => navegate("/listar-parceiro")}>Parceiros</span></li>
          <li><FaFileExcel /> <span onClick={() => navegate("/leitor-planilha-excel")}>Extrator de Dados</span></li>
        </ul>
      </div>
    </>
  );
};

export default MenuLateral;