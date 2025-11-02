import './search-bar.css';
import iconLupo from '../../assets/icons/icone-lupa.svg';

function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="div_busca">
      <img className="icone-lupa" src={iconLupo} alt="Ícone de busca" />
      <input 
        placeholder={placeholder} 
        type="text" 
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
