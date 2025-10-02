import React, { useState } from "react";
import CadastroParceiroComercial from "../view/cadastro-parceiro-comercial";
import api from "../../../../../service/axios-config";

function CadastroParceiroComercialController() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        tipoComercial: "",
        papelComercial: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ajuste os valores para os enums do backend
            const payload = {
                nome: formData.nome,
                telefone: formData.telefone,
                tipoComercial: formData.tipoComercial, 
                papelComercial: formData.papelComercial 
            };
            await api.post("/parceiro-comercial", payload);
            alert("Parceiro cadastrado com sucesso!");
            setFormData({
                nome: "",
                telefone: "",
                tipoComercial: "",
                papelComercial: ""
            });
        } catch (error) {
            alert("Erro ao cadastrar parceiro!");
            console.error(error);
        }
    };

    return (
        <CadastroParceiroComercial
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onClose={() => {}}
        />
    );
}

export default CadastroParceiroComercialController;