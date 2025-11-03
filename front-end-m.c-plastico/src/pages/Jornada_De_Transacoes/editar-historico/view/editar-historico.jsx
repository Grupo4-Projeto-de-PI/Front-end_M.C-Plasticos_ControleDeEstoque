import Header2 from "@components/header-2/header-2";
import Footer from "@components/footer/footer";
import Button from "@components/button/button";
import FormCardEditarHistorico from '../components/form-card-novo-historico/card-form-editar-historico';
import FormCardSelectEditarHistorico from '../components/form-card-select-novo-historico/form-card-select-editar-historico';
import "../css/editar-historico.css";

function EditarHistorico({
    listaProdutos,
    listaParceirosComerciais,
    categoria,
    tipoOperacao,
    setTransacao,
    postarNovoHistorico,
    arrowBack }) {
    return (
        <>
            <Header2 text={'Criar Novo Histórico'} onClickBack={arrowBack} />
            <main className="conteudo">
                <div className="card">
                    <h2>Edite as informações do histórico</h2>

                    <FormCardEditarHistorico
                        title={'Produto'}
                        fieldName={'fkProduto'}
                        setFormulario={setTransacao}
                        type={'text'}
                    />

                    <FormCardEditarHistorico
                        title={'Quantidade (kg)'}
                        placeholder={'Insira o peso do produto'}
                        fieldName={'peso'}
                        setFormulario={setTransacao}
                        type={'number'}
                    />
                    <FormCardEditarHistorico
                        title={'Preço (R$)'}
                        placeholder={'Insira o preço do produto'}
                        fieldName={'valorTotal'}
                        setFormulario={setTransacao}
                        type={'number'}
                    />
                    <FormCardSelectEditarHistorico
                        title={'Tipo da Operação'}
                        label={'Selecione o tipo da operação'}
                        options={tipoOperacao}
                        fieldName={'tipoOperacao'}
                        setFormulario={setTransacao}
                    />
                    <FormCardSelectEditarHistorico
                        title={'Categoria'}
                        label={'Seleciona a categoria'}
                        options={categoria}
                        fieldName={'categoria'}
                        setFormulario={setTransacao}
                    />
                    <FormCardSelectEditarHistorico
                        title={'Parceiro Comercial'}
                        label={'Selecione o parceiro comercial'}
                        options={listaParceirosComerciais}
                        fieldName={'fkParceiroComercial'}
                        setFormulario={setTransacao}
                    />
                    <Button text={'Cadastrar Novo Histórico'} onClick={postarNovoHistorico} />
                </div>
                
            </main>
            <Footer />
        </>
    );
}

export default EditarHistorico;