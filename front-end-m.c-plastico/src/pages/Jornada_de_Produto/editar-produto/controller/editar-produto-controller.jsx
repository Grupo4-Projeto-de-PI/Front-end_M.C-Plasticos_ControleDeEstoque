import React, { useState } from "react";
import EditarProduto from "../view/editar-produto.jsx";
import api from "../../../../../service/axios-config";

// Supondo que o id do produto vem por props ou rota
function EditarProdutoController({ produtoId }) {
    const [formData, setFormData] = useState({
        nome: "",
        tipoMaterial: "",
        prioridade: "",
        imagem: null
    });

    // Carregar dados do produto ao abrir a tela
    React.useEffect(() => {
        async function fetchProduto() {
            try {
                const response = await api.get(`/produto/id?id=${produtoId}`);
                const produto = response.data;
                setFormData({
                    nome: produto.nome || "",
                    tipoMaterial: produto.tipo?.id || "",
                    prioridade: produto.prioridade || "",
                    imagem: null
                });
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }
        if (produtoId) fetchProduto();
    }, [produtoId]);

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

            alert("Produto editado com sucesso!");
        } catch (error) {
            alert("Erro ao editar produto!");
            console.error(error);
        }
    };

    return (
        <EditarProduto
            formData={formData}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            onClickBack={() => window.history.back()}
        />
    );
}

export default EditarProdutoController;