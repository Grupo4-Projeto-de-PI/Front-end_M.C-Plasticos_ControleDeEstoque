import MetricaCard from '../components/metrica-card/metrica-card';
import TabelaTransacoes from '../components/tabela-transacoes/tabela-transacoes';
import '../css/relatorio-view.css';
import logoGrande from '@/assets/img/logo-grande.svg';

function RelatorioView({ dadosRelatorio }) {
    const {
        totalTransacoes,
        entradas,
        saidas,
        pesoTotalEntradas,
        pesoTotalSaidas,
        saldoPeso,
        transacoes
    } = dadosRelatorio;

    const dataAtual = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div id="relatorio-pdf-content" className="relatorio-container">
            {/* Cabeçalho do Relatório */}
            <div className="relatorio-header">
                <img src={logoGrande} alt="MC Plasticos Logo" className="relatorio-logo" />
                <div className="relatorio-titulo">
                    <h1>Relatório de Transações</h1>
                    <p className="data-geracao">Gerado em: {dataAtual}</p>
                </div>
            </div>

            {/* Seção de Métricas */}
            <div className="relatorio-metricas">
                <h2>Resumo Geral</h2>
                <div className="metricas-grid">
                    <MetricaCard
                        titulo="Total de Transações"
                        valor={totalTransacoes}
                        icone="📊"
                        cor="#2c3e50"
                    />
                    <MetricaCard
                        titulo="Entradas"
                        valor={entradas}
                        icone="📈"
                        cor="#27ae60"
                    />
                    <MetricaCard
                        titulo="Saídas"
                        valor={saidas}
                        icone="📉"
                        cor="#e74c3c"
                    />
                </div>
                
                <h2 style={{ marginTop: '20px' }}>Peso (kg)</h2>
                <div className="metricas-grid">
                    <MetricaCard
                        titulo="Total Entradas"
                        valor={`${pesoTotalEntradas} kg`}
                        icone="⚖️"
                        cor="#27ae60"
                    />
                    <MetricaCard
                        titulo="Total Saídas"
                        valor={`${pesoTotalSaidas} kg`}
                        icone="⚖️"
                        cor="#e74c3c"
                    />
                    <MetricaCard
                        titulo="Saldo em Peso"
                        valor={`${saldoPeso} kg`}
                        icone="💰"
                        cor={parseFloat(saldoPeso) >= 0 ? '#27ae60' : '#e74c3c'}
                    />
                </div>
            </div>

            {/* Tabela de Transações */}
            <div className="relatorio-detalhes">
                <h2>Detalhamento das Transações</h2>
                <TabelaTransacoes transacoes={transacoes} />
            </div>

            {/* Rodapé */}
            <div className="relatorio-footer">
                <p>MC Plásticos - Sistema de Controle de Estoque</p>
                <p>Documento gerado automaticamente pelo sistema</p>
            </div>
        </div>
    );
}

export default RelatorioView;
