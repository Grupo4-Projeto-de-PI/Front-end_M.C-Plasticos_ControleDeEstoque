import React from 'react';
import Header2 from '../../../../components/header-2/header-2';
import ProductPhoto from '../components/product_photo/product-photo';
import Button from '../../../../components/button/button';
import CardProductInformation from '../components/card-product-information/card-product-information';
import Footer from '../../../../components/footer/footer';
import '../css/criar-produto.css';

function CriarProduto(){
  return (
    <div className="page-container">
      <Header2 text="Criar Produto"/>
      <main className='conteudo main-content scrollable'>
          <ProductPhoto />
          <Button text="Adicionar Foto" />
          <CardProductInformation />
          <Button text="Adicionar Produto" />  
      </main>
      <Footer />
    </div>
  )
};

export default CriarProduto;