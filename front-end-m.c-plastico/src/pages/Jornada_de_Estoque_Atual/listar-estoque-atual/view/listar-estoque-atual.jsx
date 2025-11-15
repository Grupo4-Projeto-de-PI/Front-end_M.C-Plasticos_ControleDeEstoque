import React from 'react';
import Header from '../../../../components/header/header';
import SearchBar from '../../../../components/search-bar/search-bar';
import Footer from '../../../../components/footer/footer';
import CardEstoqueAtual from "../components/card-product/card-product";
import '../css/listar-estoque-atual.css';

function ListarEstoqueAtual({ listaEstoque, busca, loading, handleBuscaChange, handleBuscaSubmit }) {
  return (
    <div className="page-with-header">
      <Header text="Estoque Atual" />
      <div className="estoque-content scrollable-content">
        <form onSubmit={handleBuscaSubmit}>
          <SearchBar
            placeholder="Buscar produto no estoque"
            value={busca}
            onChange={handleBuscaChange}
          />
        </form>

        <div className="produtos-lista">
          {loading ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>Buscando produtos...</p>
          ) : listaEstoque.length > 0 ? (
            listaEstoque.map((produto, idx) => (
              <CardEstoqueAtual
                key={idx}
                img={null} 
                nome={produto.nome}
                categoria={produto.tipoProduto?.nomeTipo || ""}
                quantidade={`${produto.estoqueAtual} Kg em estoque`}
                cor={
                  produto.estoqueAtual > 100
                    ? "green"
                    : produto.estoqueAtual > 50
                    ? "orange"
                    : "red"
                }
              />
            ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              {busca.trim() !== "" ? "Nenhum produto encontrado para sua busca." : "Nenhum produto encontrado."}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListarEstoqueAtual;
