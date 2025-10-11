import SelecaoFiltro from "../view/selecao-filtros"
import { setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
import api from "../../../../service/axios-config"
function FiltroCliente() {

    const [selecao, setSelecao] = useState()
    const [checkBoxes, setCheckBoxes] = useState([])
    
    const listaClientes = async() => {
        const response = await api.get("/parceiro-comercial")
        const clientes = response.data.
        filter((cliente) => cliente.papelComercial === "CL" || cliente.papelComercial === "CLFN")
        .map((cliente) => ({id: cliente.id, title: cliente.nome}))

        setCheckBoxes(clientes)
    }

    useEffect(() => {
        setField('fkCliente', selecao);
    }, [selecao]);

    useEffect(() => {
        listaClientes()
    }, []);

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Cliente'}
            miniTitle={'Clientes'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroCliente;
