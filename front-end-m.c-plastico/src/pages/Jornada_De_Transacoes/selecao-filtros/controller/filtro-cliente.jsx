import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState } from "react";
function FiltroTipoParceiroComercial() {

    const [selecao, setSelecao] = useState()
    setField('fkCliente', selecao);
    console.log(getSelecao());
    
    const checkBoxes = [
        { title: "Ciclo Ambiental" },
        { title: "Lucas" },
        { title: "RenovarEco" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Tipo de Parceiro'}
            miniTitle={'Tipo Parceiro Comercial'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroTipoParceiroComercial;
