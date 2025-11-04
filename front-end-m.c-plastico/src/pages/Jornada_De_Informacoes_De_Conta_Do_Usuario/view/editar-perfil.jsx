import React from "react";
import Header2 from "../../../../src/components/header-2/header-2";
import CardPerfil from "../components/card-perfil/card-perfil";
import Footer from "../../../../src/components/footer/footer";
import Button from "../../../../src/components/button/button";

function EditarPerfil({ formData, handleChange, handleSubmit, arrowBack }) {
    return (
        <div className="page-container">
            <Header2 text="Edite suas informações" onClickBack={arrowBack} />
            <main className="conteudo-informacao-produto main-content scrollable">
                <form onSubmit={handleSubmit}>
                    <CardPerfil formData={formData} handleChange={handleChange} />
                    <Button text="Confirmar Edição" type="submit" />
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default EditarPerfil;
