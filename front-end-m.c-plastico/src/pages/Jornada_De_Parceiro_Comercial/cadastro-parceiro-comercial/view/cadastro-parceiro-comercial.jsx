import React from 'react';
import "../css/cadastro-parceiro-comercial.css";
import TitleCard from '../components/TitleCard/TitleCard';
import InputField from '../components/InputField/InputField';
import SelectField from '../components/SelectField/SelectField';
import SubmitButton from '../components/SubmitButton/SubmitButton';

const CadastroParceiroComercial = ({
    formData,
    handleChange,
    handleSubmit,
    onClose
}) => {
    return (
        <div className="filtro-preto">
            <form className="card-editar-informacoes" onSubmit={handleSubmit}>
                <TitleCard title="Cadastrar Informações do Parceiro" onClose={onClose} />
                <InputField
                    label="Nome do Parceiro"
                    name="nome"
                    value={formData.nome}
                    placeholder="Insira o nome do cliente"
                    onChange={handleChange}
                    mask
                />
                <InputField 
                    label="Telefone do Parceiro"
                    name="telefone"
                    value={formData.telefone}
                    placeholder="Insira o telefone do cliente"
                    onChange={handleChange}
                    
                />
                <SelectField
                    label="Tipo do Parceiro"
                    name="tipo"
                    value={formData.tipo}
                    options={["Pessoa Física", "Pessoa Jurídica"]}
                    placeholder="Insira o tipo de cliente"
                    onChange={handleChange}
                />
                <SelectField
                    label="Papel Comercial do Parceiro"
                    name="papel"
                    value={formData.papel}
                    options={["Fornecedor", "Cliente"]}
                    placeholder="Insira o tipo de papel comercial do Parceiro"
                    onChange={handleChange}
                />
                <SubmitButton text="Cadastrar Parceiro" />
            </form>
        </div>
    );
};

export default CadastroParceiroComercial;