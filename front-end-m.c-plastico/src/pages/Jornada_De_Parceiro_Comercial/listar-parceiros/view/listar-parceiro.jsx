import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardListarParceiro from "../components/cardParceiro/CardListarParceiro";
import '../css/listar-parceiro.css';

function ListarParceiro({listaParceiros}) {
  return (
    <div className="parceiros-page">
      <Header text="Parceiros" showFilter />
      <div className="parceiros-content">
        <SearchBar placeholder="Buscar parceiro" />
        
        <div className="parceiros-lista">
          {listaParceiros.map((parceiros) => (
            <CardListarParceiro
              key={parceiros.id}
              nome={parceiros.nome}
              papelComercial={parceiros.papelComercial}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ListarParceiro