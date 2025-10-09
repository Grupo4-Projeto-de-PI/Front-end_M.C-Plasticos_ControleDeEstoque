import { useEffect, useState } from "react";
import api from "../../../../../service/axios-config.js";
import ListarProdutos from "../view/listar-produto.jsx";


function ListarProdutosController() {
    const [produtos, setProdutos] = useState([]); 

    useEffect(() => {
        
        api.get("http://localhost:8080/produto")
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    return (
        <ListarProdutos listaProdutos={produtos} />
    );
    
}

export default ListarProdutosController;