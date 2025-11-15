import { useEffect, useState } from "react";
import { api } from "@service/axios-config";
import ListarProdutos from "../view/listar-produto.jsx";
import { useNavigate } from "react-router-dom";

function ListarProdutosController() {
    const [produtos, setProdutos] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        setPopupVisible(true);
    }

    const handleClosePopup = () => {
        setPopupVisible(false);
    }

    const handleCriarProduto = () => {
        navigate('/criar-produto');
    }

    const handleCriarTipoMaterial = () => {
        navigate('/criar-tipo-material');
    }

    const handleEdit = (id) => {
        navigate(`/editar-produto/${id}`);
    }

     const handleProduto = (id) => {
        navigate(`/informacoes-produto/${id}`);
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
        handleCriarProduto={handleCriarProduto}
        handleCriarTipoMaterial={handleCriarTipoMaterial}
        handleEdit={handleEdit}
        popupVisible={popupVisible}
        handleClosePopup={handleClosePopup}
        handleProduto={handleProduto}
        />
    );
    
}

export default ListarProdutosController;