import React from 'react';
import Header2 from '../../../../components/header-2/header-2.jsx';
import ProductPhoto from '../components/product_photo/product-photo.jsx';
import CardProductInformation from '../components/card-product-information/card-product-information.jsx';
import Footer from '../../../../components/footer/footer.jsx';
import '../css/informacoes-produto.css';

function InformacoesProdutoView() {
    return (
        <div className="page-container">
            <Header2 text="Informações do Produto" />
            <main className="conteudo main-content scrollable">
                <ProductPhoto />
                <CardProductInformation  />
            </main>
            <Footer />
        </div>
    );
};

export default InformacoesProdutoView;