import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState, useEffect } from "react";
function FiltroTipoParceiroComercial() {

    const filtrosAtuais = getSelecao();
    const [selecao, setSelecao] = useState(filtrosAtuais.fkTipoParceiroComercial)

    useEffect(() => {
        setField('fkTipoParceiroComercial', selecao);
        console.log('tipo parceiro', getSelecao());
    }, [selecao]);

    const checkBoxes = [
        { id: 0, title: "Pessoa Física" },
        { id: 1, title: "Pessoa Jurídica" },
        { id: 2, title: "Pessoa Física/Jurídica" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Tipo de Parceiro'}
            miniTitle={'Tipo Parceiro Comercial'}
            setSelecao={setSelecao}
            valorInicial={selecao}
        />
    )
}

export default FiltroTipoParceiroComercial;
