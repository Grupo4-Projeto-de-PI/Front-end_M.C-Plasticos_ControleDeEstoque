import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../menu_lateral/menu-lateral/css/menu.css';
import { FaHome, FaBoxes, FaBoxOpen, FaHistory, FaUsers, FaBook } from 'react-icons/fa';


const MenuLateral = () => {
  const navegate = useNavigate();
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">M.C Plásticos</h2>
      <ul className="sidebar-menu">
        <li><FaHome /> <span onClick={() => navegate("/historico-transacao")}>Início</span></li>
        <li><FaBoxes /> <span onClick={() => navegate("/listar-estoque-atual")}>Estoque</span></li>
        <li><FaBoxOpen /> <span onClick={() => navegate("/criar-produto")}>Produtos</span></li>
        <li><FaHistory /> <span onClick={() => navegate("/historico-transacao")}>Histórico</span></li>
        <li><FaUsers /> <span onClick={() => navegate("/listar-parceiros")}>Parceiros</span></li>
        <li><FaBook /> <span>Manual de Uso</span></li>
      </ul>
    </div>
  );
};

export default MenuLateral;