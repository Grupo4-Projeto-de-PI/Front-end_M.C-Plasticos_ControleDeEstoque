import React from 'react';
import Header2 from '../../../../components/header-2/header-2';
import ProductPhoto from '../components/product_photo/product-photo';
import Button from '../../../../components/button/button';
import CardProductInformation from '../components/card-product-information/card-product-information';
import Footer from '../../../../components/footer/footer';
import '../css/editar-produto.css';

function EditarProduto({ 
  selectedImage,
  handleImageChange,
  tipoProduto,
  formData,
  handleSubmit,
  setNomeProduto,
  setTipoProdutoSelecionado,
  setPrioridade,
  arrowBack
}) {
  return (
    <div className="page-container">
      <Header2 text="Editar Produto" onClickBack={arrowBack}/>
      <main className='conteudo main-content scrollable'>
        <ProductPhoto
          selectedImage={selectedImage}
          onImageChange={handleImageChange}
        />
        <CardProductInformation
          tipoProduto={tipoProduto}
          setNomeProduto={setNomeProduto}
          setTipoProdutoSelecionado={setTipoProdutoSelecionado}
          setPrioridade={setPrioridade}
          formData={formData}
        />
        <Button text="Salvar Alterações" onClick={handleSubmit} />
      </main>
      <Footer />
    </div>
  )
};

export default EditarProduto;
