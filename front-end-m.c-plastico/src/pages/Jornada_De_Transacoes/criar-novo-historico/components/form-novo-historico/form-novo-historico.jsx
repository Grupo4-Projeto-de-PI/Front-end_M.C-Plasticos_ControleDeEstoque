import FormCardNovoHistorico from '../form-card-novo-historico/card-form-novo-historico';
import FormCardSelectNovoHistorico from '../form-card-select-novo-historico/form-card-select-novo-historico';
import './form-novo-historico.css'
function FormNovoHistorico({title}) {
    return (
        <div className="card"> 
            <h2>{title}</h2>
            <FormCardSelectNovoHistorico title={'Produto'} textOption={'Selecione um produto'} idOption={1} />
            <FormCardNovoHistorico title={'Quantidade (kg)'} placeholder={'Insira o peso do produto'} />
            <FormCardNovoHistorico title={'Preço (R$)'} placeholder={'Insira o preço do produto'} />
            <FormCardSelectNovoHistorico title={'Tipo da Operação'} textOption={'Selecione o tipo da operação'} idOption={1} />
            <FormCardSelectNovoHistorico title={'Categoria'} textOption={'Seleciona a categoria'} idOption={1} />
            <FormCardSelectNovoHistorico title={'Parceiro Comercial'} textOption={'Selecione o parceiro comercial'} idOption={1} />
        </div>
    )
}

export default FormNovoHistorico;