import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState, useEffect } from "react";
function FiltroTipoCategoria() {

    const [selecao, setSelecao] = useState()

    useEffect(() => {
        setField('fkCategoria', selecao);
        console.log(getSelecao());
    }, [selecao]);
    
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
