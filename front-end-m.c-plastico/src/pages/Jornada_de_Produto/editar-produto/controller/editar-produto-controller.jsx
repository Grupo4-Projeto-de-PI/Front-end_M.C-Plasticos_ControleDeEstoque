import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditarProduto from "../view/editar-produto.jsx";
import api from "../../../../../service/axios-config";
import Swal from "sweetalert2";
import "../../../../assets/css/sweet-alert-custom.css";

function EditarProdutoController() {
    const { id: produtoId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        tipoMaterial: "",
        prioridade: "",
        imagem: null
    });

    const [tipoProduto, setTipoProduto] = useState([]);

    const arrowBack = () => {
        navigate('/listar-produtos');
    }

    useEffect(() => {
        async function fetchProduto() {
            try {
                const response = await api.get(`/produto/id?id=${produtoId}`);
                const produto = response.data;
                setFormData({
                    nome: produto.nome || "",
                    tipoMaterial: produto.tipo?.id || "",
                    prioridade: produto.prioridade ?? "",
                    imagem: null
                });
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }
        if (produtoId) fetchProduto();
    }, [produtoId]);

    useEffect(() => {
        async function fetchTipos() {
            try {
                const response = await api.get("/tipo-produto");
                setTipoProduto(response.data);
            } catch (error) {
                console.error("Erro ao carregar tipos de produto:", error);
            }
        }
        fetchTipos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, imagem: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Atualização do produto (sem imagem)
            await api.put(`/produto/atualizar-produto/${produtoId}`, {
                nome: formData.nome,
                tipo: formData.tipoMaterial,
                prioridade: formData.prioridade
            });

            // Se houver imagem, envie separadamente
            if (formData.imagem) {
                const imgForm = new FormData();
                imgForm.append("imagem", formData.imagem);
                await api.put(`/produto/adicionar-imagem/${produtoId}`, imgForm, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            }

            Swal.fire({
                icon: 'success',
                title: 'Produto editado com sucesso!',
                text: 'As alterações foram salvas.',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#4caf50',
                customClass: {
                    icon: 'custom-success-icon'
                }
            });

            // Voltando para a página anterior
            setTimeout(() => {
                navigate(-1);
            }, 1500);

        } catch (error) {
            // Alert de erro
            Swal.fire({
                icon: 'error',
                title: 'Erro ao editar produto',
                text: error.response?.data?.message || 'Ocorreu um erro ao salvar as alterações',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
            console.error(error);
        }
    };

    return (
        <EditarProduto
            formData={formData}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            tipoProduto={tipoProduto}
            setNomeProduto={(nome) => setFormData({ ...formData, nome })}
            setTipoProdutoSelecionado={(tipo) => setFormData({ ...formData, tipoMaterial: tipo })}
            setPrioridade={(prioridade) => setFormData({ ...formData, prioridade })}
            selectedImage={formData.imagem}
            arrowBack={arrowBack}
        />
    );
}

export default EditarProdutoController;
