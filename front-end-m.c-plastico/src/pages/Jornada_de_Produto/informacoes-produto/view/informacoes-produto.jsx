import React from 'react';
import Header2 from '../../../../components/header-2/header-2.jsx';
import ProductPhoto from '../components/product_photo/product-photo.jsx';
import CardProductInformation from '../components/card-product-information/card-product-information.jsx';
import Footer from '../../../../components/footer/footer.jsx';
import '../css/informacoes-produto.css';

function InformacoesProdutoView({ arrowBack }) {
    return (
        <>
            <Header2 text="Informações do Produto" onClickBack={arrowBack}/>
            <div className="page-container">
                <main className="conteudo main-content scrollable">
                    <ProductPhoto />
                    <CardProductInformation />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default InformacoesProdutoView;