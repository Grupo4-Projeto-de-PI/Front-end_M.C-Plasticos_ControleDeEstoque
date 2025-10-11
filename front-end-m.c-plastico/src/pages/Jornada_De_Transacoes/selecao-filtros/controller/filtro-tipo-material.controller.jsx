import SelecaoFiltro from "../view/selecao-filtros"
import api from "../../../../service/axios-config"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";

function FiltroTipoMaterialController() {
    const [selecao, setSelecao] = useState()
    const [checkBoxes, setCheckBoxes] = useState([])

    const listaFiltros = async () => {
        const response = await api.get("/tipo-produto")
        const novoCheckBoxes = response.data.map((tipo) => ({
                id: tipo.id, 
                title: tipo.tipo
            }))
            setCheckBoxes(novoCheckBoxes)
    }

    useEffect(() => {
        setField('tipoProdutoId', selecao);
    }, [selecao]);

    useEffect(() => {
        listaFiltros()
    }, []);
    
    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Tipo de Material'}
            miniTitle={'Tipo Material'}
            setSelecao={setSelecao}
        />
    )
}

export default FiltroTipoMaterialController;
