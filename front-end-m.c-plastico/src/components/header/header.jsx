import './header.css';
import iconFiltro from '../../assets/icons/icone-filtro.svg';
import iconAdd from '../../assets/icons/icon_add.svg';
import iconHamburger from '../../assets/icons/hambuguer-icon.svg';
import iconReport from '../../assets/icons/report-dowload-icon.png'
import MenuLateral from '../menu-lateral/menu';
import { useState } from 'react';

export function Header({ text, showAdd, showFilter, showReport, onClickFilter, onClickAdd, onClickReportDownload }) {

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
      <div className='menu-lateral anim-menu-icon' onClick={handleMenuClick}>
        <img src={iconHamburger} alt="Menu" />
      </div>
      <header className="site-header">
        <h1>{text}</h1>
        <div className="icon-header">
          {showReport && (
            <img src={iconReport} alt="Relatório" className='report-icon' onClick={onClickReportDownload}/>
          )}
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