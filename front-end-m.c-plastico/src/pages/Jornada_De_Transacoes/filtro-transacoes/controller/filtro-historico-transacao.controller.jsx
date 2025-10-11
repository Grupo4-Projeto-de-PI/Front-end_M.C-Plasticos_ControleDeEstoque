import FiltroHistoricoTransacao from "../view/filtro-estoque-transacao";
import api from "../../../../service/axios-config";
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";

function FiltroHistoricoTransacaoController() {

    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [horaInicio, setHoraInicio] = useState();
    const [horaFim, setHoraFim] = useState();
    const [pesoInicio, setPesoInicio] = useState();
    const [pesoFim, setPesoFim] = useState();

    useEffect(() => {
        setField('dataInicio', dataInicio);
        setField('dataFim', dataFim);
        setField('horaInicio', horaInicio);
        setField('horaFim', horaFim);
        setField('pesoMinimo', pesoInicio);
        setField('pesoMaximo', pesoFim);
    }, [dataInicio, dataFim, horaInicio, horaFim, pesoInicio, pesoFim]);

    return (
        <FiltroHistoricoTransacao
            setDataInicio={setDataInicio}
            setDataFim={setDataFim}
            setHoraInicio={setHoraInicio}
            setHoraFim={setHoraFim}
            setPesoInicio={setPesoInicio}
            setPesoFim={setPesoFim}
        />
    )
}

export default FiltroHistoricoTransacaoController;