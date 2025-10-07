import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState } from "react";
function FiltroOperacaoController() {

    const [selecao, setSelecao] = useState()
    setField('tipoOperacao', selecao);
    console.log(getSelecao());
    
    const checkBoxes = [
        { title: "Entrada" },
        { title: "Saída" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione a Operação'}
            miniTitle={'Operação'}
            setSelecao={setSelecao}
            redirecionar={'//filtro-operacao'}
        />
    )
}

export default FiltroOperacaoController;
