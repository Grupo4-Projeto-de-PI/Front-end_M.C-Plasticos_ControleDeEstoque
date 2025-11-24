import SelecaoFiltro from "../view/selecao-filtros"
import { getSelecao, setField } from "@/hook/setFiltros";
import { useEffect, useState } from "react";
import { api } from "../../../../service/axios-config"

function FiltroProduto() {

    const filtrosAtuais = getSelecao();
    const [selecao, setSelecao] = useState(Array.isArray(filtrosAtuais.fkProduto) ? filtrosAtuais.fkProduto : [])
    const [checkBoxes, setCheckBoxes] = useState([])

    const listaProdutos = async() => {
        const response = await api.get("/produto")
        const produtos = response.data.map((produto) => ({
            id: produto.id, 
            title: produto.nome
        }))

        setCheckBoxes(produtos)
    }

    useEffect(() => {
        setField('fkProduto', selecao);
        console.log('produto', getSelecao());
    }, [selecao]);

    useEffect(() => {
        listaProdutos()
    }, []);

    return (
        <SelecaoFiltro
            checkBoxes={checkBoxes}
            text={'Selecione o Produto'}
            miniTitle={'Produtos'}
            setSelecao={setSelecao}
            valorInicial={selecao}
        />
    )
}

export default FiltroProduto;
