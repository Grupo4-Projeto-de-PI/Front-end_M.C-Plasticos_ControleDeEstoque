import './header.css';
import iconFiltro from '../../assets/icons/icone-filtro.svg';
import iconAdd from '../../assets/icons/icon_add.svg';
import iconHamburger from '../../assets/icons/hambuguer-icon.svg';
import MenuLateral from '../menu-lateral/menu';
import { useState } from 'react';

export function Header({ text, showAdd, showFilter, onClickFilter, onClickAdd }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      {isMenuOpen && <MenuLateral onClose={closeMenu} />}
      <div className='menu-lateral' onClick={handleMenuClick}>
        <img src={iconHamburger} alt="Menu" />
      </div>
      <header>
        <h1>{text}</h1>
        <div className="icon-header">
          {showFilter && (
            <img src={iconFiltro} alt="Filtro" onClick={onClickFilter} />
          )}
          {showAdd && (
            <img src={iconAdd} alt="Adicionar um novo Registro" onClick={onClickAdd} />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;