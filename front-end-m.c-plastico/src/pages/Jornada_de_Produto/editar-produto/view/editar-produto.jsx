import React from "react";
import Header2 from "../../../../components/header-2/header-2";
import Footer from "../../../../components/footer/footer";
import ImagemProdutoCard from "../components/ImagemProdutoCard/ImagemProdutoCard";
import FormEditarProduto from "../components/FormEditarProduto/FormEditarProduto";
import "../css/editar-produto.css";

function EditarProduto({
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    onClickBack
}) {
    return (
        <div>
            <Header2 text="Editar Produto" onClickBack={onClickBack} />
            <main className="conteudo">
                <ImagemProdutoCard
                    imagem={formData.imagem}
                    handleImageChange={handleImageChange}
                    onClickAddFoto={() => document.getElementById("imagem-produto").click()}
                />
                <FormEditarProduto
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </main>
            <Footer />
        </div>
    );
}

export default EditarProduto;