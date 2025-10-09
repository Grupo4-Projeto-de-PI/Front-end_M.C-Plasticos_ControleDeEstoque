import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState } from "react";
function FiltroTipoCategoria() {

    const [selecao, setSelecao] = useState()
    setField('fkCategoria', selecao);
    console.log(getSelecao());
    
    const checkBoxes = [
        { title: "Material Separado" },
        { title: "Granel" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione a Categoria'}
            miniTitle={'Categoria'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroTipoCategoria;
