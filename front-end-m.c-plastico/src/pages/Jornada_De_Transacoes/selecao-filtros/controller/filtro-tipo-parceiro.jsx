import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState } from "react";
function FiltroTipoParceiroComercial() {

    const [selecao, setSelecao] = useState()
    setField('fkTipoParceiroComercial', selecao);
    console.log(getSelecao());
    
    const checkBoxes = [
        { title: "Pessoa Física" },
        { title: "Pessoa Jurídica" },
        { title: "Pessoa Física/Jurídica" }
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
