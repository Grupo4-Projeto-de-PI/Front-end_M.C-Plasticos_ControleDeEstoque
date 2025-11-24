import CriarNovoHistorico from "../view/criar-novo-historico";
import { api } from "../../../../service/axios-config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { formatarDataParaLocalDateTime } from "@utils/generic-utils.js";

function CriarNovoHistoricoController() {

    const urlBase = '/transacoes'
    const urlProduto = '/produto'
    const urlParceiroComercial = '/parceiro-comercial'
    const categoria = [{ id: 0, nome: 'Granel' }, { id: 1, nome: 'Material Separado' }]
    const navigate = useNavigate();
    const location = useLocation();
    const tipoOperacaoPreSelecionado = location.state?.tipoOperacao ?? '';

    const [transacao, setTransacaoState] = useState({
        fkProduto: '',
        categoria: '',
        peso: '',
        valorTotal: '',
        tipoOperacao: tipoOperacaoPreSelecionado,
        fkParceiroComercial: '',
        fkUsuario: Number(sessionStorage.getItem("codigoFuncionario")),
        data: formatarDataParaLocalDateTime()
    })

    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaParceirosComerciais, setListaParceirosComerciais] = useState([]);


    const setTransacao = (fieldName, value) => {
        console.log(`Atualizando campo: ${fieldName} com valor: ${value}`);
        setTransacaoState(estadoAnterior => ({
            ...estadoAnterior,
            [fieldName]: Number(value)
        }));
    }

    const postarNovoHistorico = () => {
        try {
            if(transacao.fkProduto === '' || transacao.categoria === '' || transacao.peso === '' || transacao.valorTotal === '' || transacao.tipoOperacao === '' || transacao.fkParceiroComercial === ''){
                console.log("Todos os campos são obrigatórios.");
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao cadastrar Registro',
                    text: 'Todos os campos são obrigatórios.',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#f44336',
                    customClass: {
                        icon: 'custom-error-icon'
                    }
                });
                return ;
            }
            
            console.log("Dados do novo Registro:", transacao);
            const response = api.post(`${urlBase}`, transacao);
                Swal.fire({
                    icon: 'success',
                    title: 'Registro criado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#4caf50',
                    customClass: {
                        icon: 'custom-success-icon'
                    }
                });
                setTimeout(() => {
                    window.location.href = '/historico-transacao';
                }, 1500);
                
        } catch (error) {
            console.error("Erro ao criar novo Registro:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erro ao cadastrar Registro',
                text: error.response?.data?.message || 'Ocorreu um erro ao cadastrar o Registro',
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

    const buscarProdutosPorNome = async (nome) => {
        try {
            const response = await api.get(`${urlProduto}/nome?nome=${nome}`);
            const produtos = response.data.map(produto => ({ id: produto.id, nome: produto.nome }));
            return produtos;
        } catch (error) {
            console.error("Erro ao buscar produtos por nome:", error);
            return [];
        }
    }

    const getListaParceiros = async (tipoOperacao) => {
        try {
            const response = await api.get(urlParceiroComercial)
            console.log(response.data);
            const listaParceirosComerciais = response.data
                .map(parceiro => ({ id: parceiro.id, nome: parceiro.nome, papelComercial: parceiro.papelComercial }))
                .filter((parceiro) => tipoOperacao === 0 ? parceiro.papelComercial === 'FN' : (parceiro.papelComercial === 'CL' || parceiro.papelComercial === 'CLFN'));

            console.log(listaParceirosComerciais);
            setListaParceirosComerciais(listaParceirosComerciais);
        } catch (error) {
            console.error("Erro ao buscar parceiros comerciais:", error);
            return [];
        }
    }

    const arrowBack = () => {
        navigate('/historico-transacao')
    }


    useEffect(() => {
        getListaProdutos();
    }, []);

    useEffect(() => {
        getListaParceiros(transacao.tipoOperacao);
    }, [transacao.tipoOperacao]);

    return (
        <>
            <CriarNovoHistorico
                listaProdutos={listaProdutos}
                listaParceirosComerciais={listaParceirosComerciais}
                categoria={categoria}
                tipoOperacao={tipoOperacaoPreSelecionado}
                setTransacao={setTransacao}
                postarNovoHistorico={postarNovoHistorico}
                arrowBack={arrowBack}
                buscarProdutosPorNome={buscarProdutosPorNome}
            />
        </>
    )
}

export default CriarNovoHistoricoController;