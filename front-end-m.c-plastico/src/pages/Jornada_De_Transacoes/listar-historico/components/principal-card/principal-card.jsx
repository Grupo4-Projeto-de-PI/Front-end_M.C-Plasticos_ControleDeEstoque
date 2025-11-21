import ContentCard from "../content-card/content-card";
import IndicadorNegativo from "../../../../../assets/icons/indicativo_negativo_historico_transacao.svg"
import IndicadorPositivo from "../../../../../assets/icons/Indicativo_positivo_historico_transacao.svg"
import './principal-card.css';
function PrincipalCard({date, transacoes, onClickInformation}) {

    return (
        <div className="card-principal">
            <h4>{date}</h4>
            {transacoes.map((transacao) => {
                const indicador = transacao.tipoOperacao === 'Entrada' ? IndicadorPositivo : IndicadorNegativo;
                
                return (
                    <ContentCard
                        key={transacao.id}
                        nomeProduto={transacao.nomeProduto}
                        peso={transacao.peso}
                        horaRegistrada={transacao.data[1]}
                        imagem={transacao.fotoProduto}
                        indicador={indicador}
                        onClickInformation={() => onClickInformation(transacao.id)}
                    />
                );
            })}
        </div>
    )
}

export default PrincipalCard;