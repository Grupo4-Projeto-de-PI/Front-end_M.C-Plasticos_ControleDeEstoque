import { useEffect, useState } from "react";
import ListarHistorico from "../view/listar-historico.jsx";
import api from "../../../../../service/axios-config";
import { useNavigate, useLocation } from "react-router-dom";
import { formatarTransacoesParaExibicao } from "@utils/montando-objeto-transacao.js";
function ListarHistoricoController() {

    const navigate = useNavigate();
    const location = useLocation();
    const transacoesFiltradas = location.state?.transacoesFiltradas || [];
    const filtroAplicado = location.state?.filtrosAplicados || false;
    const baseUrl = '/transacoes';

    const [transacoes, setTransacoes] = useState(
        filtroAplicado ? transacoesFiltradas : []
    );

    const listaTransacoes = async () => {
        try {
            const response = await api.get(`${baseUrl}`);
            setTransacoes(formatarTransacoesParaExibicao(response.data));
        } catch (error) {
            console.log('Erro ao listar transações:', error);
            throw error;
        }
    }

    const handleCreateNewHistorico = () => {
        navigate('/criar-novo-historico');
    }


    useEffect(() => {
        if (filtroAplicado) {
            setTransacoes(formatarTransacoesParaExibicao(transacoesFiltradas));
            console.log('transacoes filtradas', transacoes);
        }
        else{
            console.log('entrou no effect para carregar todas as transações')
            listaTransacoes();
        }
    }, [setTransacoes]);

    return (
        <ListarHistorico
            listaTransacoes={transacoes}
            onCreateNewHistorico={handleCreateNewHistorico}
        />
    )
}

export default ListarHistoricoController;