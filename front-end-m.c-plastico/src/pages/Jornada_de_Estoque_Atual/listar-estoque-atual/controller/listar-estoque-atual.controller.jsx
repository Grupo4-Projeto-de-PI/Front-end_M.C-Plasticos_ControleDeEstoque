import React, { useEffect, useState } from "react";
import ListarEstoqueAtual from "../view/listar-estoque-atual.jsx";
import api from "../../../../../service/axios-config";

function ListarEstoqueAtualController() {
    const [estoque, setEstoque] = useState([]);
    const [busca, setBusca] = useState("");

    // Lista todo o estoque ao carregar a página
    const listarEstoque = async () => {
        try {
            const response = await api.get("/estoque-atual");
            setEstoque(response.data || []);
        } catch (error) {
            console.log("Erro ao listar estoque:", error);
        }
    };

    // Busca produto por nome
    const buscarProdutoPorNome = async (nome) => {
        try {
            const response = await api.get(`/estoque-atual/produto/${nome}`);
            setEstoque(response.data || []);
        } catch (error) {
            console.log("Erro ao buscar produto:", error);
        }
    };

    useEffect(() => {
        listarEstoque();
    }, []);

    // Handler para campo de busca
    const handleBuscaChange = (e) => {
        setBusca(e.target.value);
    };

    const handleBuscaSubmit = (e) => {
        e.preventDefault();
        if (busca.trim() === "") {
            listarEstoque();
        } else {
            buscarProdutoPorNome(busca);
        }
    };

    return (
        <ListarEstoqueAtual
            listaEstoque={estoque}
            busca={busca}
            handleBuscaChange={handleBuscaChange}
            handleBuscaSubmit={handleBuscaSubmit}
        />
    );
}

export default ListarEstoqueAtualController;