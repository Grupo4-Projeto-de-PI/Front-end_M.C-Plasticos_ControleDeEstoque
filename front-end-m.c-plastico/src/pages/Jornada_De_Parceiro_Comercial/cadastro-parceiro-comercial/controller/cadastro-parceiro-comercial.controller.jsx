import React, { useState } from "react";
import CadastroParceiroComercial from "../view/cadastro-parceiro-comercial";
import api from "../../../../../service/axios-config";

function CadastroParceiroComercialController() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        tipo: "",
        papel: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/parceiros", formData); 
            alert("Parceiro cadastrado com sucesso!");
            setFormData({
                nome: "",
                telefone: "",
                tipo: "",
                papel: ""
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