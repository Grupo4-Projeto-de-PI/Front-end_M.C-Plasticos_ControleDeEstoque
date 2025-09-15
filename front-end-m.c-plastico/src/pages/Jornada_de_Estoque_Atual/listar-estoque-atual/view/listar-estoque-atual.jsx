import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import papelImg from '../../../../assets/icons/papelao.svg';
import latinhaImg from '../../../../assets/icons/latinha.svg';
import aluminioImg from '../../../../assets/icons/aluminio.svg';
import petImg from '../../../../assets/icons/pet-laminada.svg';
import ppcImg from '../../../../assets/icons/PPC.svg';
import '../css/listar-estoque-atual.css';

const produtos = [
  {
    nome: 'Papelão',
    categoria: '',
    quantidade: '500 Kg em estoque',
    cor: 'green',
    img: papelImg,
  },
  {
    nome: 'Latinha',
    categoria: 'Metais',
    quantidade: '200 Kg em estoque',
    cor: 'green',
    img: latinhaImg,
  },
  {
    nome: 'Alumínio',
    categoria: 'Metais',
    quantidade: '109 Kg em estoque',
    cor: 'green',
    img: aluminioImg,
  },
  {
    nome: 'PET Laminada',
    categoria: 'Plástico',
    quantidade: '20 Kg em estoque',
    cor: 'red',
    img: petImg,
  },
  {
    nome: 'PPC',
    categoria: 'Plástico',
    quantidade: '90 Kg em estoque',
    cor: 'orange',
    img: ppcImg,
  },
];

function ListarEstoqueAtual() {
  return (
    <div className="estoque-page">
      <Header text="Estoque Atual" showFilter />
      <div className="estoque-content">
        <SearchBar placeholder="Buscar produto no estoque" />
        <div className="produtos-lista">
          {produtos.map((produto, idx) => (
            <div className="produto-card" key={idx}>
              <img src={produto.img} alt={produto.nome} className="produto-img" />
              <div className="produto-info">
                <span className="produto-nome">{produto.nome}</span>
                {produto.categoria && <span className="produto-categoria">{produto.categoria}</span>}
                <span className={`produto-quantidade ${produto.cor}`}>{produto.quantidade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListarEstoqueAtual;