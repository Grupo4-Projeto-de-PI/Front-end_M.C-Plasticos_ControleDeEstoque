import React from 'react';
import { useParams } from "react-router-dom";
import Header2 from '../../../../components/header-2/header-2.jsx';
import ProductPhoto from '../components/product_photo/product-photo.jsx';
import CardProductInformation from '../components/card-product-information/card-product-information.jsx';
import Footer from '../../../../components/footer/footer.jsx';
import InformacoesProdutoController from '../controller/informacoes-produto.controller.jsx';
import '../css/informacoes-produto.css';

const InformacoesProduto = () => {
    const { id } = useParams();
    const { produto, loading } = InformacoesProdutoController(id);

    if (loading) return <p>Carregando...</p>;
    if (!produto) return <p>Produto não encontrado.</p>;

    // Converte fotoProduto (ByteArray) para base64, se existir
    const imagemUrl = produto.fotoProduto
        ? `data:image/png;base64,${btoa(
            String.fromCharCode(...produto.fotoProduto)
        )}`
        : null;

    return (
        <div className="page-container">
            <Header2 text="Informações do Produto" />
            <main className="conteudo main-content scrollable">
                <ProductPhoto imagemUrl={imagemUrl} />
                <CardProductInformation produto={produto} />
            </main>
            <Footer />
        </div>
    );
};

export default InformacoesProduto;