import Header2 from "@components/header-2/header-2";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import FormCardNovoHistorico from '../components/form-card-novo-historico/card-form-novo-historico';
import FormCardSelectNovoHistorico from '../components/form-card-select-novo-historico/form-card-select-novo-historico';
import "../css/criar-novo-historico.css";


function CriarNovoHistorico() {
    return (
        <>
            <Header2 text={'Criar Novo Histórico'} />
            <main className="conteudo">
                <div className="card">
                    <h2>Crie as informações de histórico</h2>
                    <FormCardSelectNovoHistorico title={'Produto'} textOption={'Selecione um produto'} idOption={1} />
                    <FormCardNovoHistorico title={'Quantidade (kg)'} placeholder={'Insira o peso do produto'} />
                    <FormCardNovoHistorico title={'Preço (R$)'} placeholder={'Insira o preço do produto'} />
                    <FormCardSelectNovoHistorico title={'Tipo da Operação'} textOption={'Selecione o tipo da operação'} idOption={1} />
                    <FormCardSelectNovoHistorico title={'Categoria'} textOption={'Seleciona a categoria'} idOption={1} />
                    <FormCardSelectNovoHistorico title={'Parceiro Comercial'} textOption={'Selecione o parceiro comercial'} idOption={1} />
                </div>
                <Button text={'Cadastrar Novo Histórico'} />
            </main>
            <Footer />
        </>
    );
}

export default CriarNovoHistorico;