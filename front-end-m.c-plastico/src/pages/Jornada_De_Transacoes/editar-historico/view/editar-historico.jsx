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
    arrowBack,
    transacao
}) {
    return (
        <div className="page-with-header2">
            <Header2 text={'Editar Histórico'} onClickBack={arrowBack} pencil={false} logo={false} />
            <main className="conteudo scrollable-content">
                <div className="card">
                    <h2>Edite as informações do histórico</h2>

                    <FormCardEditarHistorico
                        title={'Produto'}
                        fieldName={'fkProduto'}
                        setFormulario={setTransacao}
                        type={'text'}
                        value={transacao.fkProduto}
                    />

                    <FormCardEditarHistorico
                        title={'Quantidade (kg)'}
                        placeholder={'Insira o peso do produto'}
                        fieldName={'peso'}
                        setFormulario={setTransacao}
                        type={'number'}
                        value={transacao.peso}
                    />

                    <FormCardEditarHistorico
                        title={'Preço (R$)'}
                        placeholder={'Insira o preço do produto'}
                        fieldName={'valorTotal'}
                        setFormulario={setTransacao}
                        type={'number'}
                        value={transacao.valorTotal}
                    />

                    <FormCardSelectEditarHistorico
                        title={'Tipo da Operação'}
                        label={'Selecione o tipo da operação'}
                        options={tipoOperacao}
                        fieldName={'tipoOperacao'}
                        setFormulario={setTransacao}
                        value={transacao.tipoOperacao}
                    />

                    <FormCardSelectEditarHistorico
                        title={'Categoria'}
                        label={'Seleciona a categoria'}
                        options={categoria}
                        fieldName={'categoria'}
                        setFormulario={setTransacao}
                        value={transacao.categoria}
                    />

                    <FormCardSelectEditarHistorico
                        title={'Parceiro Comercial'}
                        label={'Selecione o parceiro comercial'}
                        options={listaParceirosComerciais}
                        fieldName={'fkParceiroComercial'}
                        setFormulario={setTransacao}
                        value={transacao.fkParceiroComercial}
                    />
                </div>
                <Button text={'Confirmar Edição'} onClick={postarNovoHistorico} />
            </main>
            <Footer />
        </div>
    );
}

export default EditarHistorico;
