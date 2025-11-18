import React from 'react';
import Header2 from '../../../../components/header-2/header-2';
import ProductPhoto from '../components/product_photo/product-photo';
import Button from '../../../../components/button/button';
import CardProductInformation from '../components/card-product-information/card-product-information';
import Footer from '../../../../components/footer/footer';
import '../css/criar-produto.css';

function CriarProduto({ 
  selectedImage,
  handleImageChange,
  tipoProduto,
  postProduto ,
  setNomeProduto,
  setTipoProdutoSelecionado,
  setPrioridade,
  arrowBack
}) {
  return (
    <div className="page-with-header2">
      <Header2 text="Criar Produto" onClickBack={arrowBack} pencil={false} logo={false}/>
      <main className='conteudo-criar-produto scrollable-content'>
        <ProductPhoto
          selectedImage={selectedImage}
          onImageChange={handleImageChange}
        />
        <CardProductInformation
          tipoProduto={tipoProduto}
          setNomeProduto={setNomeProduto}
          setTipoProdutoSelecionado={setTipoProdutoSelecionado}
          setPrioridade={setPrioridade}
        />
        <Button text="Adicionar Produto" onClick={postProduto} />
      </main>
      <Footer />
    </div>
  )
};

export default CriarProduto;