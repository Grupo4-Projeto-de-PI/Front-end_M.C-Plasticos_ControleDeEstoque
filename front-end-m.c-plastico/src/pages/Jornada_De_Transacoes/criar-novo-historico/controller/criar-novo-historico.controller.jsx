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

    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaParceirosComerciais, setListaParceirosComerciais] = useState([]);

    const postarNovoHistorico = () => {
        const response = api.post(`${urlBase}/historico`, {})
    }

    const getListaProdutos =  async () => {
        try {
            const response = await api.get(urlProduto)
            const listaProdutos = response.data.map(produto => ({ id: produto.id, nome: produto.nome }));
            setListaProdutos(listaProdutos);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return [];
        }
    }

    const getListaParceiros = async () => {
        try {
            const response = await api.get(urlParceiroComercial)
            const listaParceirosComerciais = response.data.map(parceiro => ({ id: parceiro.id, nome: parceiro.nome }));
            setListaParceirosComerciais(listaParceirosComerciais);
        } catch (error) {
            console.error("Erro ao buscar parceiros comerciais:", error);
            return [];
        }
    }


    useEffect(() => {
        getListaProdutos();
        getListaParceiros();
    }, []);

    return (
        <>
        <CriarNovoHistorico 
        listaProdutos={listaProdutos} 
        listaParceirosComerciais={listaParceirosComerciais} />
        </>
    )
}

export default CriarNovoHistoricoController;