import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditarProduto from "../view/editar-produto.jsx";
import api from "@service/axios-config";
import Swal from "sweetalert2";
import "../../../../assets/css/sweet-alert-custom.css";

function EditarProdutoController() {
    const { id: produtoId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
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
                setIsLoading(true);
                console.log("Buscando produto com ID:", produtoId);
                
                const [produtoResponse, tiposResponse] = await Promise.all([
                    api.get(`/produto/id?id=${produtoId}`),
                    api.get("/tipo-produto")
                ]);
                
                const produto = produtoResponse.data;
                const tipos = tiposResponse.data;
                
                console.log("Produto recebido:", produto);
                console.log("Tipos disponíveis:", tipos);
                console.log("Estrutura completa do produto:", JSON.stringify(produto, null, 2));
                
                const tipoEncontrado = tipos.find(tipo => tipo.tipo === produto.tipoProduto);
                console.log("Tipo encontrado:", tipoEncontrado);
                
                let prioridadeValue = "";
                if (produto.prioridade === "BAIXA") {
                    prioridadeValue = "1";
                } else if (produto.prioridade === "ALTA") {
                    prioridadeValue = "0";
                }
                console.log("Prioridade original:", produto.prioridade, "-> Valor convertido:", prioridadeValue);
                
                const dadosFormulario = {
                    nome: produto.nomeProduto || "",
                    tipoMaterial: tipoEncontrado?.id || "",
                    prioridade: prioridadeValue,
                    imagem: null
                };
                
                setFormData(dadosFormulario);
                setTipoProduto(tipos);
                console.log("FormData atualizado:", dadosFormulario);
                
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
                console.error("Detalhes do erro:", error.response?.data);
            } finally {
                setIsLoading(false);
            }
        }
        
        if (produtoId) {
            fetchProduto();
        } else {
            console.error("ID do produto não encontrado na URL");
            setIsLoading(false);
        }
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
            let prioridadeString = "";
            if (formData.prioridade === "1") {
                prioridadeString = "BAIXA";
            } else if (formData.prioridade === "0") {
                prioridadeString = "ALTA";
            }
            
            console.log("Enviando dados:", {
                nome: formData.nome,
                tipo: formData.tipoMaterial,
                prioridade: prioridadeString
            });
            
            await api.put(`/produto/atualizar-produto/${produtoId}`, {
                nome: formData.nome,
                tipo: formData.tipoMaterial,
                prioridade: prioridadeString
            });

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

            setTimeout(() => {
                navigate(-1);
            }, 1500);

        } catch (error) {
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

    if (isLoading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '18px' 
            }}>
                Carregando dados do produto...
            </div>
        );
    }

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
