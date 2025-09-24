import Header2 from "@components/header-2/header-2";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import FormCardNovoHistorico from '../components/form-card-novo-historico/card-form-novo-historico';
import FormCardSelectNovoHistorico from '../components/form-card-select-novo-historico/form-card-select-novo-historico';
import "../css/criar-novo-historico.css";


function CriarNovoHistorico({ listaProdutos, listaParceirosComerciais }) {
    const categoria = [{id: 0, nome: 'GR'}, {id: 1, nome: 'MS'}]
    const tipoOperacao = [{id: 0, nome: 'Entrada'}, {id: 1, nome: 'Saida'}]

    return (
        <>
            <Header2 text={'Criar Novo Histórico'} />
            <main className="conteudo">
                <div className="card">
                    <h2>Crie as informações de histórico</h2>
                    <FormCardSelectNovoHistorico title={'Produto'} label={'Selecione um produto'} options={listaProdutos} />
                    <FormCardNovoHistorico title={'Quantidade (kg)'} placeholder={'Insira o peso do produto'} />
                    <FormCardNovoHistorico title={'Preço (R$)'} placeholder={'Insira o preço do produto'} />
                    <FormCardSelectNovoHistorico title={'Tipo da Operação'} label={'Selecione o tipo da operação'} options={tipoOperacao} />
                    <FormCardSelectNovoHistorico title={'Categoria'} label={'Seleciona a categoria'} options={categoria} />
                    <FormCardSelectNovoHistorico title={'Parceiro Comercial'} label={'Selecione o parceiro comercial'} options={listaParceirosComerciais} />
                </div>
                <Button text={'Cadastrar Novo Histórico'} />
            </main>
            <Footer />
        </>
    );
}

export default CriarNovoHistorico;