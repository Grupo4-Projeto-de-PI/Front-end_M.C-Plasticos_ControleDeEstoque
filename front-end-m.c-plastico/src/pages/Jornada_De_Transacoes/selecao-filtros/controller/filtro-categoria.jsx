import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState, useEffect } from "react";
function FiltroTipoCategoria() {

    const [selecao, setSelecao] = useState()



    useEffect(() => {
        setField('fkCategoria', selecao);
        console.log('categoria', getSelecao());
    }, [selecao]);
    
    const checkBoxes = [
        { id: 0, title: "Material Separado" },
        { id: 1,title: "Granel" }
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
