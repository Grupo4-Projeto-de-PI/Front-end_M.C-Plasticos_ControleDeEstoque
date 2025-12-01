import { useEffect, useState } from "react";
import ListarHistorico from "../view/listar-historico.jsx";
import { api } from "@service/axios-config";
import { useNavigate, useLocation } from "react-router-dom";
import { formatarTransacoesParaExibicao } from "@utils/montando-objeto-transacao.js";
import { gerarRelatorio, baixarRelatorio } from "../../relatorio-filtros/controller/relatorio-filtros-controller.jsx";
import { resetSelecao } from "@/hook/setFiltros";

function ListarHistoricoController() {

    const navigate = useNavigate();
    const location = useLocation();
    const transacoesFiltradas = location.state?.transacoesFiltradas || [];
    const filtroAplicado = location.state?.filtrosAplicados || false;
    const baseUrl = '/transacoes';
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [popUpRelatorioVisible, setPopUpRelatorioVisible] = useState(false);
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

    const handleClickReportDownload = () => {
        setPopUpRelatorioVisible(true);
    }

    const handleConfirmDownload = () => {
        const dadosRelatorio = gerarRelatorio(transacoes);
        const elementoRelatorio = document.getElementById('relatorio-pdf-content');
        
        if (elementoRelatorio) {
            const dataAtual = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
            baixarRelatorio(elementoRelatorio, `relatorio-transacoes-${dataAtual}.pdf`);
        }
        
        setPopUpRelatorioVisible(false);
    }

    const handleCancelDownload = () => {
        setPopUpRelatorioVisible(false);
    }

    const handleLimparFiltros = () => {
        resetSelecao();
        navigate('/historico-transacao', {
            state: {
                filtrosAplicados: false
            }
        });
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
        if (filtroAplicado && transacoesFiltradas.length > 0) {
            setTransacoes(formatarTransacoesParaExibicao(transacoesFiltradas));
            console.log('transacoes filtradas', transacoes);
        }
        else if (!filtroAplicado) {
            console.log('entrou no effect para carregar todas as transações')
            listaTransacoes();
        }
    }, [filtroAplicado]);

    return (
        <ListarHistorico
            listaTransacoes={agruparTransacoesPorData(transacoes)}
            onCreateNewHistorico={handleCreateNewHistorico}
            handleInformationClick={handleInformationClick}
            popUpOpen={popUpOpen}
            popUpClose={popUpClose}
            popUpVisible={popUpVisible}
            filtroAplicado={filtroAplicado}
            transacoes={transacoes}
            onClickReportDownload={handleClickReportDownload}
            popUpRelatorioVisible={popUpRelatorioVisible}
            onConfirmDownload={handleConfirmDownload}
            onCancelDownload={handleCancelDownload}
            onLimparFiltros={handleLimparFiltros}
        />
    )
}

export default ListarHistoricoController;