import ContentCard from "../content-card/content-card";
import AparaColoridaImg from "../../../../../assets/icons/img-apara-colorida.svg"
import IndicadorNegativo from "../../../../../assets/icons/indicativo_negativo_historico_transacao.svg"
import './principal-card.css';
function PrincipalCard({date}) {
    return (
        <div className="card-principal">
            <h4>{date}</h4>
            <ContentCard
                nomeProduto="Apara Colorida"
                peso="200 kg"
                horaRegistrada="10:45"
                imagem={AparaColoridaImg}
                indicador={IndicadorNegativo}
            />
            <ContentCard
                nomeProduto="Apara Colorida"
                peso="200 kg"
                horaRegistrada="10:45"
                imagem={AparaColoridaImg}
                indicador={IndicadorNegativo}
            />
            <ContentCard
                nomeProduto="Apara Colorida"
                peso="200 kg"
                horaRegistrada="10:45"
                imagem={AparaColoridaImg}
                indicador={IndicadorNegativo}
            />
            <ContentCard
                nomeProduto="Apara Colorida"
                peso="200 kg"
                horaRegistrada="10:45"
                imagem={AparaColoridaImg}
                indicador={IndicadorNegativo}
            />
        </div>
    )
}

export default PrincipalCard;