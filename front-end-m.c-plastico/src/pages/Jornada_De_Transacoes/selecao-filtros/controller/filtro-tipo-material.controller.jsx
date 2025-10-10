import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";

function FiltroTipoMaterialController() {
    const [selecao, setSelecao] = useState()

    useEffect(() => {
        setField('fkTipoMaterial', selecao);
        console.log(getSelecao());
    }, [selecao]);

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
