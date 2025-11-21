import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListarParceiro from "../view/listar-parceiro";
import { api } from "@service/axios-config";

function ListarParceiroController() {
    const [parceiros, setParceiros] = useState([]);
    const [idParceiro, setIdParceiro] = useState(null);
    const [mostrarModalInformacoesParceiro, setMostrarModalInformacoesParceiro] = useState(false);
    const navigate = useNavigate();

    const baseUrl = '/parceiro-comercial';

    const handleClickCardParceiro = (id) => {
        setIdParceiro(id);
        setMostrarModalInformacoesParceiro(true);
    }

    const handleFecharModalInformacoesParceiro = () => {
        setMostrarModalInformacoesParceiro(false);
        setIdParceiro(null);
    }

    const listaParceiros = async () => {
        try {
            const response = await api.get(`${baseUrl}`);
            console.log('Resposta do back', response)
            const dataCard = [];

            response.data.forEach(parceiros => {
                dataCard.push({
                    id: parceiros.id,
                    nome: parceiros.nome,
                    telefone: parceiros.telefone,
                    tipo: parceiros.tipoComercial,
                    papelComercial: parceiros.papelComercial,

                });
            });

            setParceiros(dataCard);
        } catch (error) {
            console.log('Erro ao listar parceiros:', error);
            throw error;
        }
    }


    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);

    const handleCadastrarParceiro = () => {
        setMostrarModalCadastro(true);
    };

    
    const handleFecharModalCadastro = () => {
        setMostrarModalCadastro(false);
        listaParceiros();
    };

    useEffect(() => {
        listaParceiros();
    }, [setParceiros]);
    
    return (
        <ListarParceiro 
            listaParceiros={parceiros}
            onClickAdd={handleCadastrarParceiro}
            mostrarModalCadastro={mostrarModalCadastro}
            onFecharModalCadastro={handleFecharModalCadastro}
            onClickInfoParceiro={handleClickCardParceiro}
            idParceiro={idParceiro}
            mostrarModalInformacoesParceiro={mostrarModalInformacoesParceiro}
            onFecharModalInfoParceiro={handleFecharModalInformacoesParceiro}
        />
    )
}

export default ListarParceiroController;