import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../../service/axios-config";
import CardEditarParceiro from '../components/cardEditarParceiro/Card-Editar-Parceiro';
import Swal from "sweetalert2";
import "../../../../assets/css/sweet-alert-custom.css";

function EditarParceiroController({ parceiro, fecharModal }) {
    const parceiroID = parceiro.id;
    console.log('Estou na bosta da controller', parceiro)

    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        tipo: 0,
        papel: 0
    });

    useEffect(() => {
        console.log(parceiro)
        console.log(parceiro.id)
        async function fetchParceiro() {
            try {
                if (parceiro) {
                    setFormData({
                        nome: parceiro.nome || "",
                        telefone: parceiro.telefone || "",
                        tipo: parceiro.tipo || "",
                        papel: parceiro.papelComercial || ""
                    });
                } else {
                    console.warn("Parceiro não encontrado.");
                }
            } catch (error) {
                console.error("Erro ao buscar Parceiro:", error);
            }
        }

        if (parceiroID) fetchParceiro();
    }, [parceiroID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const refreshPage = () => {
        window.location.reload();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/parceiro-comercial/${parceiroID}`, formData);

            Swal.fire({
                icon: 'success',
                title: 'Parceiro editado com sucesso!',
                text: 'As alterações foram salvas.',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#4caf50',
                customClass: {
                    icon: 'custom-success-icon'
                }
            });
            refreshPage()

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao editar Parceiro',
                text: error.response?.data?.message || 'Ocorreu um erro ao salvar as alterações',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            console.error(error);
            refreshPage()
        }
    };

    return (
        <CardEditarParceiro
            nome={formData.nome}
            telefone={formData.telefone}
            tipo={formData.tipo}
            papel={formData.papel}
            handleclick={fecharModal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default EditarParceiroController;