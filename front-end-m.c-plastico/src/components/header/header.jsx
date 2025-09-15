import './header.css';
import iconFiltro from '../../assets/icons/icone-filtro.svg';
import iconAdd from '../../assets/icons/icon_add.svg';

export function Header({ text, showAdd, showFilter }) {
  return (
    <header>
      <h1>{text}</h1>
      <div className="icon-header">
        {showFilter && (
          <img src={iconFiltro} alt="Filtro" />
        )}
        {showAdd && (
          <img src={iconAdd} alt="Adicionar um novo histórico" />
        )}
      </div>
    </header>
  );
}

export default Header;