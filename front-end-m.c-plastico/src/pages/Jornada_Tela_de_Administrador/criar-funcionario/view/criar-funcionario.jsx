import React from 'react';
import "../css/criar-funcionario.css";
import TitleCard from '../components/TitleCard/TitleCard';
import SelectField from '../components/SelectField/SelectField';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import InputField from '../components/InputField/InputField';


function CriarFuncionario() {
    return (
        <div className="filtro-preto">
            <form className="card-editar-informacoes" >
                <TitleCard title="Cadastrar Novo Funcionário" />

                <InputField
                    label={"Nome do Funcionário"}
                    placeholder={"Insira o nome do Funcionário"}
                />

                <InputField
                    label={"Senha do Funcionário"}
                    placeholder={"Insira uma senha para o Funcionário"}
                />

                <SelectField
                    label="Hierarquia do Funcionário"
                    name="tipoUsuario"
                    options={["Vendedor", "Admin"]}
                    placeholder="Insira o tipo de Funcionário"
                />

                <SubmitButton text="Cadastrar Funcionário" />
            </form>
        </div>
    );
}




export default CriarFuncionario;
