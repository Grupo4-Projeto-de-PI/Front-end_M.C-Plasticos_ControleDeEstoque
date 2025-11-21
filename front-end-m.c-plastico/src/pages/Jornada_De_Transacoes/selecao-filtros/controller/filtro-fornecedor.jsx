import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
import { api } from "../../../../service/axios-config"
function FiltroFornecedor() {

    const [selecao, setSelecao] = useState()
    const [checkBoxes, setCheckBoxes] = useState([])

    const listaFornecedores = async() => {
        const response = await api.get("/parceiro-comercial")
        const fornecedores = response.data.
        filter((fornecedor) => fornecedor.papelComercial === "FN" || fornecedor.papelComercial === "CLFN")
        .map((fornecedor) => ({id: fornecedor.id, title: fornecedor.nome}))

        setCheckBoxes(fornecedores)
    }

    
    useEffect(() => {
        setField('fkFornecedor', selecao);
        console.log('fornecedor', getSelecao());
    }, [selecao]);

    useEffect(() => {
        listaFornecedores()
    }, []);

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
