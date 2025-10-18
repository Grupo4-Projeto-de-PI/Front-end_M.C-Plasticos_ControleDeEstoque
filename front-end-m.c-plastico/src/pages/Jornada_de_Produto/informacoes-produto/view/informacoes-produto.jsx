import React from 'react';
import Header2 from '../../../../components/header-2/header-2.jsx';
import ProductPhoto from '../components/product_photo/product-photo.jsx';
import CardProductInformation from '../components/card-product-information/card-product-information.jsx';
import Footer from '../../../../components/footer/footer.jsx';
import '../css/informacoes-produto.css';

function InformacoesProdutoView({ arrowBack, listaProduto }) {

    console.log("lista de produtos na view", listaProduto);
    return (
        <div className="page-container">
            <Header2 text="Informações do Produto" onClickBack={arrowBack} />
            <main className="conteudo main-content scrollable">
                <ProductPhoto />
                <CardProductInformation
                    nomeProduto={listaProduto.nomeProduto}
                    tipoMaterial={listaProduto.tipoProduto}
                    precoMaximoCompra={listaProduto.precoMaximo}
                    precoMinimoCompra={listaProduto.precoMinimo}
                    prioridadeEstoque={listaProduto.prioridade}
                    fornecedorProduto={listaProduto.nomeParceiroComercial}
                />
            </main>
            <Footer />
        </div>
    );
};

export default InformacoesProdutoView;