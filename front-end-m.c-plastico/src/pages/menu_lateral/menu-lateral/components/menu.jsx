import React from 'react';
import '../../../menu_lateral/menu-lateral/css/menu.css';
import { FaHome, FaBoxes, FaBoxOpen, FaHistory, FaUsers, FaBook } from 'react-icons/fa';

const MenuLateral = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">M.C Plásticos</h2>
      <ul className="sidebar-menu">
        <li><FaHome /> <span>Início</span></li>
        <li><FaBoxes /> <span>Estoque</span></li>
        <li><FaBoxOpen /> <span>Produtos</span></li>
        <li><FaHistory /> <span>Histórico</span></li>
        <li><FaUsers /> <span>Parceiros</span></li>
        <li><FaBook /> <span>Manual de Uso</span></li>
      </ul>
    </div>
  );
};

export default MenuLateral;