import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';
import { FaBoxes, FaBoxOpen, FaHistory, FaUsers, FaFileExcel } from 'react-icons/fa';


function MenuLateral({ onClose }) {
  const navegate = useNavigate();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose && onClose();
    }, 200);
  };

  const navigateAndClose = (path) => {
    setClosing(true);
    setTimeout(() => {
      navegate(path);
      onClose && onClose();
    }, 200);
  };

  return (

    <>
      <div className={`sidebar-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}></div>

      <div className={`sidebar ${closing ? 'closing' : ''}`}>
        <h2 className="sidebar-title">M.C Plásticos</h2>
        <ul className="sidebar-menu">
          <li><FaBoxes /> <span onClick={() => navigateAndClose("/listar-estoque-atual")}>Estoque</span></li>
          <li><FaBoxOpen /> <span onClick={() => navigateAndClose("/listar-produtos")}>Produtos</span></li>
          <li><FaHistory /> <span onClick={() => navigateAndClose("/historico-transacao")}>Registros</span></li>
          <li><FaUsers /> <span onClick={() => navigateAndClose("/listar-parceiro")}>Parceiros</span></li>
          <li><FaFileExcel /> <span onClick={() => navigateAndClose("/leitor-planilha-excel")}>Extrator de Dados</span></li>
        </ul>
      </div>
    </>
  );
};

export default MenuLateral;