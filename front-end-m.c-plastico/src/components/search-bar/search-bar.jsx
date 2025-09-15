import './search-bar.css';
import iconLupo from '../../assets/icons/icone-lupa.svg';

function SearchBar(text) {
    return (
        <div className="div_busca">
            <img className="icone-lupa" src={iconLupo} alt="Ícone de busca" />
            <input placeholder={text} type="text" />
        </div>
    );
}
export default SearchBar;