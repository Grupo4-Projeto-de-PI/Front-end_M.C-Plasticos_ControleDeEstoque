import React from "react";
import "./FormEditarProduto.css";

function FormEditarProduto({ formData, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="form-editar-produto">
            <div className="card">
                <h2>Edite as Informações do Produto</h2>
                <hr />

                <div className="info-item">
                    <p className="label">Nome do Produto</p>
                    <input
                        type="text"
                        className="valor"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                <hr />

                <div className="info-item select-wrapper">
                    <p className="label">Tipo de Material</p>
                    <select
                        className="valor"
                        name="tipoMaterial"
                        value={formData.tipoMaterial}
                        onChange={handleChange}
                    >
                        <option>Nenhum</option>
                        <option>Papelão</option>
                        <option>Plástico</option>
                        <option>Vidro</option>
                    </select>
                </div>
                <hr />

                <div className="info-item select-wrapper">
                    <p className="label">Prioridade do Produto</p>
                    <select
                        className="valor prioridade"
                        name="prioridade"
                        value={formData.prioridade}
                        onChange={handleChange}
                    >
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
            </div>
            <button className="btn-secundario" type="submit">
                Editar Produto
            </button>
        </form>
    );
}

export default FormEditarProduto;