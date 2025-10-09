import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState } from "react";

function FiltroTipoMaterialController() {
    const [selecao, setSelecao] = useState()
    setField('fkCategoria', selecao);
    console.log(getSelecao());

    const checkBoxes = [
        { title: "Metais" },
        { title: "Papeis e Derivados" },
        { title: "Plásticos" },
        { title: "Aparas" },
        { title: "Vidros e Cerâmicas" },
        { title: "Outros" },
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Tipo de Material'}
            miniTitle={'Tipo Material'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroTipoMaterialController;
