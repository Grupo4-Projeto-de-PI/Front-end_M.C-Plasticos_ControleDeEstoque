import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
import { api } from "../../../../service/axios-config"
function FiltroCliente() {

    const filtrosAtuais = getSelecao();
    const [selecao, setSelecao] = useState(Array.isArray(filtrosAtuais.fkCliente) ? filtrosAtuais.fkCliente : [])
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
        console.log('cliente', getSelecao());
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
            valorInicial={selecao}
        />
    )
}

export default FiltroCliente;
