import Header2 from "@/components/header-2/header-2";
import FiltroSelecaoCheckbox from "@/components/filters-cards/filtro-selecao-checkbox/filtro-selecao-checkbox";
import "../css/selecao-filtro.css"
import Button from "@/components/button/button";
import { useNavigate } from "react-router-dom";

function SelecaoFiltro({ text, miniTitle, checkBoxes, setSelecao, valorInicial}) {
    const navigate = useNavigate();
    return (
        <div className="page-with-header2 no-footer">
            <Header2 text={text} onClickBack={() => navigate('/filtro-historico-transacao')} pencil={false} logo={false} />

            <div className="selecao-filtro-pai scrollable-content">
                <p>{miniTitle}</p>
                <div className="selecao-filtro-opcao">
                    {checkBoxes.map((checkBox, index) => (
                        <FiltroSelecaoCheckbox 
                            key={index} 
                            id={checkBox.id} 
                            title={checkBox.title} 
                            setSelecao={setSelecao}
                            valorInicial={valorInicial}
                        />
                    ))}
                </div>
            </div>

            <div className="selecao-filtro-footer">
                <Button text={"Confirmar Filtros"} onClick={() => navigate('/filtro-historico-transacao')}/>
            </div>
        </div>
    )
}

export default SelecaoFiltro;