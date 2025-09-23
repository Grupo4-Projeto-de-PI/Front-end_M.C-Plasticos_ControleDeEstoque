import CriarNovoHistorico from "../view/criar-novo-historico";
import api from "../../../../service/axios-config";
import { useEffect, useState } from "react";

function CriarNovoHistoricoController(){

    const urlBase = '/transacoes'
    const urlProduto = '/produto'
    const urlParceiroComercial = '/parceiro-comercial'

    const [transacao, setTransacao] = useState({
        fkProduto: '',
        categoria: '',
        peso: '',
        valorTotal: '',
        tipoOperacao: '',
        fkParceiroComercial: '',
        fkUsuario: '',
    })
    const postarNovoHistorico = () => {
        const response = api.post(`${urlBase}/historico`, {})
    }

    const listaProdutos =  async () => {
        try {
            const response = await api.get(urlProduto)
            console.log('response de produtos', response.data)
            return response.data
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return [];
        }
    }

    const listaParceirosComerciais = async () => {
        try {
            const response = await api.get(urlParceiroComercial)
            console.log('response de parceiros comerciais', response.data)
            return response.data
        } catch (error) {
            console.error("Erro ao buscar parceiros comerciais:", error);
            return [];
        }
    }


    useEffect(() => {
        listaProdutos();
        listaParceirosComerciais();
    }, []);

    return (
        <>
        <CriarNovoHistorico/>
        </>
    )
}

export default CriarNovoHistoricoController;