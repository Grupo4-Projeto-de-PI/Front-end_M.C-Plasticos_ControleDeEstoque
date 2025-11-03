import React, { useState } from "react";
import EditarHierarquia from "../view/editar-hierarquia";
import api from "../../../../../service/axios-config";

function EditarHierarquiaController({ funcionario, onClose }) {
    const [formData, setFormData] = useState({
        tipoUsuario: funcionario.tipoUsuario || ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, tipoUsuario: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.patch(`/usuario/tipoUsuario`, {
                tipoUsuario: formData.tipoUsuario,
            }, {
                params: { codigoFuncionario: funcionario.codigoFuncionario }
            });

            alert("Hierarquia atualizada com sucesso!");
            onClose();
        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error);
            alert("Erro ao atualizar funcionário.");
        }
    };

    return (
        <EditarHierarquia
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}

export default EditarHierarquiaController;
