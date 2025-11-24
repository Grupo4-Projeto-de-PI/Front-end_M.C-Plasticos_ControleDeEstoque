import ProductInfoCard from "../view/info-produto";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/service/axios-config";
export default function ListarInfoProdutoController() {

    const [informacoesProduto, setInformacoesProduto] = useState({});
    const { id: produtoId } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/listar-estoque-atual");
    }

    const informacoesProdutoEncontrado = async () => {
    try {
        const response = await api.get(`estoque-atual/valor-estoque-produto/${produtoId}`);
        console.log("Resposta da API de informações do produto:", response.data);
        
        const produto = response.data[0];
        
        setInformacoesProduto({
            nomeProduto: produto.nome || "",
            valorTotalEstoque: produto.valorEmEstoque || 0,
            tipoProduto: produto.tipo || "",
            quantidadeEstoque: produto.qtdEstoque || 0,
            nivelPrioridade: produto.prioridade === 1 ? "Baixa" : produto.prioridade === 0 ? "Alta" : ""
        });

    } catch (error) {
        console.log("Erro ao buscar informações do produto:", error);
    }
}

    useEffect(() => {
        informacoesProdutoEncontrado();
    }, []);

    return (
    <ProductInfoCard 
    informacoesProduto={informacoesProduto} 
    onBack={handleBack}
    />)
}