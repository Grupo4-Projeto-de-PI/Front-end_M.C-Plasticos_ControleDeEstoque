import FiltroHistoricoTransacao from "../view/filtro-estoque-transacao";
import api from "../../../../service/axios-config";
import { getSelecao } from "@/hook/setFiltros";

function FiltroHistoricoTransacaoController() {


    const baseUrl = '/transacoes'
    const postFiltros = async () => {
        const response = await api.post(`${baseUrl}/filtro`, {
            ...getSelecao()
        })
        console.log('Filtros aplicados com sucesso:', response.data);
    }

    return (
        <FiltroHistoricoTransacao
            postFiltros={postFiltros}
        />
    )
}

export default FiltroHistoricoTransacaoController;