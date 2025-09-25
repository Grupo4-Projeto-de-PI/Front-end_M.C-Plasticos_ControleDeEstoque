import { useEffect, useState } from "react";
import ListarHistorico from "../view/listar-historico.jsx";
import api from "../../../../../service/axios-config";
import { formatarDataHoraISO, converterBlobParaURL } from '../../../../utils/generic-utils.js'
import { useNavigate } from "react-router-dom";
function ListarHistoricoController() {
    const [transacoes, setTransacoes] = useState([]);
    const navigate = useNavigate();

    const baseUrl = '/transacoes';

    const listaTransacoes = async () => {
        try {
            const response = await api.get(`${baseUrl}`);
            const dataCard = [];

            response.data.forEach(transacao => {
                dataCard.push({
                    id: transacao.id,
                    nomeProduto: transacao.fkProduto.nome,
                    peso: transacao.peso,
                    data: formatarDataHoraISO(transacao.data),
                    tipoOperacao: transacao.tipoOperacao,
                    fotoProduto: converterBlobParaURL(transacao.fkProduto.fotoProduto)
                });
            });

            setTransacoes(dataCard);
        } catch (error) {
            console.log('Erro ao listar transações:', error);
            throw error;
        }
    }

    const handleCreateNewHistorico = () => {
        navigate('/criar-novo-historico');
    }
    

    useEffect(() => {
        listaTransacoes();
    }, [setTransacoes]);
    
    return (
        <ListarHistorico 
            listaTransacoes={transacoes}
            onCreateNewHistorico={handleCreateNewHistorico}
        />
    )
}

export default ListarHistoricoController;