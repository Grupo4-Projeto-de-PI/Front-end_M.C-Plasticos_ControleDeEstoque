import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useState, useEffect } from "react";
function FiltroOperacaoController() {

    const filtrosAtuais = getSelecao();
    const [selecao, setSelecao] = useState(Array.isArray(filtrosAtuais.tipoOperacao) ? filtrosAtuais.tipoOperacao : [])

    useEffect(() => {
        setField('tipoOperacao', selecao);
        console.log('operacao', getSelecao());
    }, [selecao]);

    const checkBoxes = [
        { id: 0, title: "Entrada" },
        { id: 1, title: "Saída" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione a Operação'}
            miniTitle={'Operação'}
            setSelecao={setSelecao}
            valorInicial={selecao}
        />
    )
}

export default FiltroOperacaoController;
