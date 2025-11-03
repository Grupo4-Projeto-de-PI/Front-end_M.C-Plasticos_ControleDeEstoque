import ContentCard from "../content-card/content-card";
import IndicadorNegativo from "../../../../../assets/icons/indicativo_negativo_historico_transacao.svg"
import IndicadorPositivo from "../../../../../assets/icons/Indicativo_positivo_historico_transacao.svg"
import './principal-card.css';
function PrincipalCard({date, transacoes, onClickInformation}) {

    const indicador = transacoes.tipoOperacao === 'Entrada' ? IndicadorPositivo : IndicadorNegativo;

    return (
        <div className="card-principal">
            <h4>{date}</h4>
            <ContentCard
                nomeProduto={transacoes.nomeProduto}
                peso={transacoes.peso}
                horaRegistrada={transacoes.data[1]}
                imagem={transacoes.fotoProduto}
                indicador={indicador}
                onClickInformation={onClickInformation}
            />
        </div>
    )
}

export default PrincipalCard;