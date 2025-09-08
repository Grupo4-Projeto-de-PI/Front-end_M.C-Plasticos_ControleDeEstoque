import './header.css';
import iconFiltro from '../../assets/icons/icone-filtro.svg';
import iconAdd from '../../assets/icons/icon_add.svg';

export function Header({ text, showAdd, showFilter }) {
  return (
    <div className="div_topo">
      <div id="div_titulo">
        <h1>{text}</h1>
      </div>
      <div className="header-icons">
        {showAdd && (
          <img className="icone-add" src={iconAdd} alt="Ícone de adicionar" />
        )}
        {showFilter && (
          <img className="icone-filtro" src={iconFiltro} alt="Ícone de filtro" />
        )}
      </div>
    </div>
  );
}

export default Header;