import { useEffect, useState } from "react";
import api from "../../../../../service/axios-config.js";
import ListarProdutos from "../view/listar-produto.jsx";
import { useNavigate } from "react-router-dom";

function ListarProdutosController() {
    const [produtos, setProdutos] = useState([]); 
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/criar-produto");
    }

    useEffect(() => {
        
        api.get("/produto")
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    return (
        <ListarProdutos 
        listaProdutos={produtos} 
        handleNavigate={handleNavigate}
        />
    );
    
}

export default ListarProdutosController;