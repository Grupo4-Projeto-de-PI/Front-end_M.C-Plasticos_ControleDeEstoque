import React from "react";
import Header2 from "@components/header-2/header-2";
import CardPerfil from "../components/card-perfil/card-perfil";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import "../css/editar-perfil.css"

function EditarPerfil({ formData, handleChange, handleSubmit, arrowBack }) {
    return (
        <div className="page-with-header2">
            <Header2 text="Edite suas informações" onClickBack={arrowBack} pencil={false} logo={false} />
            <div className="editar-perfil-container scrollable-content">
                <form onSubmit={handleSubmit} className="editar-perfil-form">
                    <CardPerfil formData={formData} handleChange={handleChange} />
                    <Button text="Confirmar Edição" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default EditarPerfil;
