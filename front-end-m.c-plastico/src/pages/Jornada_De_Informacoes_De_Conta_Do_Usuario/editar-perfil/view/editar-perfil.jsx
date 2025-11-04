import React from "react";
import Header2 from "@components/header-2/header-2";
import CardPerfil from "../components/card-perfil/card-perfil";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import "../css/informacoes-produto.css"

function EditarPerfil({ formData, handleChange, handleSubmit, arrowBack }) {
    return (
        <>
            <Header2 text="Edite suas informações" onClickBack={arrowBack} pencil={false} />
            <main className="conteudo-informacao-produto">
                <form onSubmit={handleSubmit}>
                    <CardPerfil formData={formData} handleChange={handleChange} />
                    <Button text="Confirmar Edição" type="submit" />
                </form>
            </main>
            <Footer />
        </>
    );
}

export default EditarPerfil;
