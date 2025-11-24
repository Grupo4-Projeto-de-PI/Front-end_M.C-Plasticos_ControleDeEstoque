import { useEffect, useState } from "react";
import ListarHistorico from "../view/listar-historico.jsx";
import { api } from "@service/axios-config";
import { useNavigate, useLocation } from "react-router-dom";
import { formatarTransacoesParaExibicao } from "@utils/montando-objeto-transacao.js";
function ListarHistoricoController() {

    const navigate = useNavigate();
    const location = useLocation();
    const transacoesFiltradas = location.state?.transacoesFiltradas || [];
    const filtroAplicado = location.state?.filtrosAplicados || false;
    const baseUrl = '/transacoes';
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [transacoes, setTransacoes] = useState(
        filtroAplicado ? transacoesFiltradas : []
    );

    const handleInformationClick = (idHistorico) => {
        navigate(`/informacoes-historico/${idHistorico}`);
    }

    const handleCreateNewHistorico = (tipoOperacao) => {
        navigate('/criar-novo-historico', { state: { tipoOperacao } });
    }

    const popUpOpen = () => {
        setPopUpVisible(true);
    }

    const popUpClose = () => {
        setPopUpVisible(false);
    }

    const agruparTransacoesPorData = (transacoes) => {
        const grupos = {};
        
        transacoes.forEach(transacao => {
            const data = transacao.data[0]; // data[0] contém a data formatada
            
            if (!grupos[data]) {
                grupos[data] = [];
            }
            grupos[data].push(transacao);
        });

        // Converter objeto em array de grupos e ordenar por data mais recente
        return Object.entries(grupos)
            .map(([data, transacoes]) => ({
                data,
                transacoes,
                dataOrdenacao: transacoes[0].data[0] // Usa a primeira transação para ordenação
            }))
            .sort((a, b) => {
                // Converte as datas do formato DD/MM/YYYY para comparação
                const [diaA, mesA, anoA] = a.dataOrdenacao.split('/');
                const [diaB, mesB, anoB] = b.dataOrdenacao.split('/');
                const dateA = new Date(anoA, mesA - 1, diaA);
                const dateB = new Date(anoB, mesB - 1, diaB);
                return dateB - dateA; // Ordem decrescente (mais recente primeiro)
            });
    }

    const listaTransacoes = async () => {
        try {
            const response = await api.get(`${baseUrl}`);
            console.log('Resposta do back', response.data)
            setTransacoes(formatarTransacoesParaExibicao(response.data));
        } catch (error) {
            console.log('Erro ao listar transações:', error);
            throw error;
        }
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
            listaTransacoes={agruparTransacoesPorData(transacoes)}
            onCreateNewHistorico={handleCreateNewHistorico}
            handleInformationClick={handleInformationClick}
            popUpOpen={popUpOpen}
            popUpClose={popUpClose}
            popUpVisible={popUpVisible}
        />
    )
}

export default ListarHistoricoController;