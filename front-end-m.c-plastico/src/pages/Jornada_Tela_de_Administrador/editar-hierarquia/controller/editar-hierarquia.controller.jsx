import React, { useState } from "react";
import EditarHierarquia from "../view/editar-hierarquia";
import api from "../../../../../service/axios-config";
import Swal from "sweetalert2";


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

            Swal.fire({
                icon: 'success',
                title: 'Hierarquia editada com sucesso!',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#4caf50',
                customClass: {
                    icon: 'custom-success-icon'
                }
            });
            onClose();
        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erro ao editar hierarquia',
                text: error.response?.data?.message || 'Ocorreu um erro ao cadastrar o histórico',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
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
