import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
function FiltroCliente() {

    const [selecao, setSelecao] = useState()

    useEffect(() => {
        setField('fkCliente', selecao);
        console.log(getSelecao());
    }, [selecao]);
    
    const checkBoxes = [
        { title: "Ciclo Ambiental" },
        { title: "Lucas" },
        { title: "RenovarEco" }
    ]

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
