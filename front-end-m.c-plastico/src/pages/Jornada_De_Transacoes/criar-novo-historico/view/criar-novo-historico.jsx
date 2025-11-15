import Header2 from "@components/header-2/header-2";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import FormCardNovoHistorico from '../components/form-card-novo-historico/card-form-novo-historico';
import FormCardSelectNovoHistorico from '../components/form-card-select-novo-historico/form-card-select-novo-historico';
import "../css/criar-novo-historico.css";

function CriarNovoHistorico({ 
    listaProdutos, 
    listaParceirosComerciais, 
    categoria, 
    tipoOperacao, 
    setTransacao, 
    postarNovoHistorico,
    arrowBack}) {
    return (
        <div className="page-with-header2">
            <Header2 text={'Criar Novo Histórico'} onClickBack={arrowBack} pencil={false} />
            <main className="conteudo-criar-historico scrollable-content">
                <div className="card">
                    <h2>Crie as informações de histórico</h2>
                    <FormCardSelectNovoHistorico 
                        title={'Produto'} 
                        label={'Selecione um produto'} 
                        options={listaProdutos} 
                        fieldName={'fkProduto'}
                        setFormulario={setTransacao} 
                    />
                    <FormCardNovoHistorico 
                        title={'Quantidade (kg)'} 
                        placeholder={'Insira o peso do produto'} 
                        fieldName={'peso'}
                        setFormulario={setTransacao}
                        type={'number'}
                    />
                    <FormCardNovoHistorico 
                        title={'Preço (R$)'} 
                        placeholder={'Insira o preço do produto'} 
                        fieldName={'valorTotal'}
                        setFormulario={setTransacao}
                        type={'number'}
                    />
                    <FormCardSelectNovoHistorico 
                        title={'Tipo da Operação'} 
                        label={'Selecione o tipo da operação'} 
                        options={tipoOperacao} 
                        fieldName={'tipoOperacao'}
                        setFormulario={setTransacao}
                    />
                    <FormCardSelectNovoHistorico 
                        title={'Categoria'} 
                        label={'Seleciona a categoria'} 
                        options={categoria} 
                        fieldName={'categoria'}
                        setFormulario={setTransacao}
                    />
                    <FormCardSelectNovoHistorico 
                        title={'Parceiro Comercial'} 
                        label={'Selecione o parceiro comercial'} 
                        options={listaParceirosComerciais} 
                        fieldName={'fkParceiroComercial'}
                        setFormulario={setTransacao}
                    />
                </div>
                <Button text={'Cadastrar Novo Histórico'} onClick={postarNovoHistorico} />
            </main>
            <Footer />
        </div>
    );
}

export default CriarNovoHistorico;