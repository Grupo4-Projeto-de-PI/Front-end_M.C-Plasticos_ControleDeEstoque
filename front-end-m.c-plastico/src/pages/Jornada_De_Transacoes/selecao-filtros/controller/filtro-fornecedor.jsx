import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
function FiltroFornecedor() {

    const [selecao, setSelecao] = useState()

    useEffect(() => {
        setField('fkFornecedor', selecao);
        console.log(getSelecao());
    }, [selecao]);

    const checkBoxes = [
        { title: "Fornecedor" },
        { title: "Fornecedor 2" },
        { title: "Fornecedor" }
    ]

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Fornecedor'}
            miniTitle={'Fornecedores'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroFornecedor;
