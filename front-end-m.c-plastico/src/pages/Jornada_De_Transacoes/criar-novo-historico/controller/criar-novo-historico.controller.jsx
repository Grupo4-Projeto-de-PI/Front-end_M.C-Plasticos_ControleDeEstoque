import CriarNovoHistorico from "../view/criar-novo-historico";
import api from "../../../../service/axios-config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function CriarNovoHistoricoController() {

    const urlBase = '/transacoes'
    const urlProduto = '/produto'
    const urlParceiroComercial = '/parceiro-comercial'
    const categoria = [{ id: 0, nome: 'GR' }, { id: 1, nome: 'MS' }]
    const tipoOperacao = [{ id: 0, nome: 'Entrada' }, { id: 1, nome: 'Saida' }]

    const [transacao, setTransacaoState] = useState({
        fkProduto: '',
        categoria: '',
        peso: '',
        valorTotal: '',
        tipoOperacao: '',
        fkParceiroComercial: '',
        fkUsuario: Number(sessionStorage.getItem("codigoFuncionario")),
    })

    console.log('Transação atual:', transacao);

    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaParceirosComerciais, setListaParceirosComerciais] = useState([]);


    //Função fudida KKKKKKKK mas que funciona muito bem
    //Não tenho ideia de como funciona por baixo dos panos
    const setTransacao = (fieldName, value) => {
        console.log(`Atualizando campo: ${fieldName} com valor: ${value}`);
        setTransacaoState(estadoAnterior => ({
            ...estadoAnterior,
            [fieldName]: Number(value)
        }));
    };

    const postarNovoHistorico = () => {
        try {
            const response = api.post(`${urlBase}`, transacao)
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Histórico criado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#4caf50',
                    customClass: {
                        icon: 'custom-success-icon'
                    }
                });
            }
        } catch (error) {
            console.error("Erro ao criar novo histórico:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erro ao cadastrar histórico',
                text: error.response?.data?.message || 'Ocorreu um erro ao cadastrar o histórico',
                showConfirmButton: false,
                timer: 1500,
                iconColor: '#f44336',
                customClass: {
                    icon: 'custom-error-icon'
                }
            });
        }
    }

    const getListaProdutos = async () => {
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
                listaParceirosComerciais={listaParceirosComerciais}
                categoria={categoria}
                tipoOperacao={tipoOperacao}
                setTransacao={setTransacao}
                postarNovoHistorico={postarNovoHistorico}
            />
        </>
    )
}

export default CriarNovoHistoricoController;