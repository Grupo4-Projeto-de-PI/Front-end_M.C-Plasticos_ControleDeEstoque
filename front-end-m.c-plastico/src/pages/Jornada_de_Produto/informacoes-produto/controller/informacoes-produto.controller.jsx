import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../service/axios-config"
import InformacoesProdutoView from "../view/informacoes-produto";

export default function InformacoesProdutoController() {
    const { id: produtoId } = useParams();
    const [produto, setProduto] = useState(null);


    const produtoEncontrado = async () => {
        try {
            const response = await api.get(`/produto/id?id=${produtoId}`);
            console.log(response.data);
        } catch (error) {
            console.log("Erro ao buscar produto:", error);
        }
    }

    useEffect(() => {
        if(produtoId){
            produtoEncontrado();
        }
    }, []);

    return (
        <InformacoesProdutoView/>
    );
}