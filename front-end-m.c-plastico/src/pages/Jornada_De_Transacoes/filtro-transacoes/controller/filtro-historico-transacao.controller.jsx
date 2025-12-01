import FiltroHistoricoTransacao from "../view/filtro-estoque-transacao";
import { api } from "../../../../service/axios-config";
import { getSelecao, setField, resetSelecao } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FiltroHistoricoTransacaoController() {

    const [transacaoFiltrada, setTransacaoFiltrada] = useState([]);
    const filtrosAtuais = getSelecao();
    const [dataInicio, setDataInicio] = useState(filtrosAtuais.dataInicio || null);
    const [dataFim, setDataFim] = useState(filtrosAtuais.dataFim || null);
    const [pesoInicio, setPesoInicio] = useState(filtrosAtuais.pesoMinimo || null);
    const [pesoFim, setPesoFim] = useState(filtrosAtuais.pesoMaximo || null);
    const navigate = useNavigate();

    const postarFiltros = async () => {

        console.log('filtros enviados', getSelecao());
        const response = await api.post("/transacoes/filtro", getSelecao());
        console.log('retorno da api', response.data);
        setTransacaoFiltrada(response.data);
        navigate('/historico-transacao', {
            state: {
                transacoesFiltradas: response.data,
                filtrosAplicados: true
            }
        });
    }

    useEffect(() => {
        setField('dataInicio', dataInicio);
        setField('dataFim', dataFim);
        setField('pesoMinimo', pesoInicio);
        setField('pesoMaximo', pesoFim);
    }, [dataInicio, dataFim, pesoInicio, pesoFim]);

    return (
        <FiltroHistoricoTransacao
            dataInicio={dataInicio}
            dataFim={dataFim}
            setDataInicio={setDataInicio}
            setDataFim={setDataFim}
            pesoInicio={pesoInicio}
            pesoFim={pesoFim}
            setPesoInicio={setPesoInicio}
            setPesoFim={setPesoFim}
            postarFiltros={postarFiltros}
        />
    )
}

export default FiltroHistoricoTransacaoController;