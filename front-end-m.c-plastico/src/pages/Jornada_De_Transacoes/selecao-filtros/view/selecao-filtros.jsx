import Header2 from "@/components/header-2/header-2";
import FiltroSelecaoCheckbox from "@/components/filters-cards/filtro-selecao-checkbox/filtro-selecao-checkbox";
import "../css/selecao-filtro.css"
import Button from "@/components/button/button";
import { useNavigate } from "react-router-dom";

function SelecaoFiltro({ text, miniTitle, checkBoxes, setSelecao}) {
    const navigate = useNavigate();
    console.log(checkBoxes)
    return (
        <>
            <Header2 text={text} onClickBack={() => navigate('/filtro-historico-transacao')} />

            <div className="selecao-filtro-pai">
                <p>{miniTitle}</p>
                <div className="selecao-filtro-opcao">
                    {checkBoxes.map((checkBox, index) => (
                        <FiltroSelecaoCheckbox key={index} id={checkBox.id} title={checkBox.title} setSelecao={setSelecao}/>
                    ))}
                </div>
            </div>

            <div className="selecao-filtro-footer">
                <Button text={"Confirmar Filtros"} />
            </div>
        </>
    )
}

export default SelecaoFiltro;