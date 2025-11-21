import React, { useEffect, useState } from "react";
import ListarEstoqueAtual from "../view/listar-estoque-atual.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "@service/axios-config";

function ListarEstoqueAtualController() {
    const [estoque, setEstoque] = useState([]);
    const [estoqueCompleto, setEstoqueCompleto] = useState([]); 
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInformacaoEstoque = (id) => {
        navigate(`/informacoes-produto-estoque/${id}`);
    }
    const listarEstoque = async () => {
        try {
            setLoading(true);
            const response = await api.get("/estoque-atual");
            console.log("Resposta da API de estoque:", response.data)
            const dados = response.data || [];
            setEstoque(dados);
            setEstoqueCompleto(dados); 
        } catch (error) {
            console.log("Erro ao listar estoque:", error);
            setEstoque([]);
            setEstoqueCompleto([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        listarEstoque();
    }, []);

    const handleBuscaChange = (e) => {
        const valor = e.target.value;
        setBusca(valor);
        
        if (valor.trim() === "") {
            setEstoque(estoqueCompleto);
        } else {
            const resultados = estoqueCompleto.filter(produto => 
                produto.nome.toLowerCase().includes(valor.toLowerCase())
            );
            setEstoque(resultados);
        }
    };

    const handleBuscaSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <ListarEstoqueAtual
            listaEstoque={estoque}
            busca={busca}
            loading={loading}
            handleBuscaChange={handleBuscaChange}
            handleBuscaSubmit={handleBuscaSubmit}
            onInformacaoEstoque={handleInformacaoEstoque}
        />
    );
}

export default ListarEstoqueAtualController;