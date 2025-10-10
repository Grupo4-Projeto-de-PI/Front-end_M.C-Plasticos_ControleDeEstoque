import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState, useEffect } from "react";
function FiltroTipoParceiroComercial() {

    const [selecao, setSelecao] = useState()

    useEffect(() => {
        setField('fkTipoParceiroComercial', selecao);
        console.log(getSelecao());
    }, [selecao]);

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
