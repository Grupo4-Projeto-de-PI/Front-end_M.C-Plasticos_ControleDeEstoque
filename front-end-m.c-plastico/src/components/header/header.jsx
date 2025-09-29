import './header.css';
import iconFiltro from '../../assets/icons/icone-filtro.svg';
import iconAdd from '../../assets/icons/icon_add.svg';

export function Header({ text, showAdd, showFilter, onClickFilter, onClickAdd }) {
  return (
    <header>
      <h1>{text}</h1>
      <div className="icon-header">
        {showFilter && (
          <img src={iconFiltro} alt="Filtro" onClick={onClickFilter} />
        )}
        {showAdd && (
          <img src={iconAdd} alt="Adicionar um novo histórico" onClick={onClickAdd} />
        )}
      </div>
    </header>
  );
}

export default Header;