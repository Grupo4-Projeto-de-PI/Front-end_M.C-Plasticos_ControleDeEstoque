import React from 'react';
import "../css/criar-funcionario.css";
import TitleCard from '../components/TitleCard/TitleCard';
import SelectField from '../components/SelectField/SelectField';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import InputField from '../components/InputField/InputField';

/**
 * Props esperadas:
 * - form: { nome, senha, confirmarSenha, tipoUsuario }
 * - onChange: (e) => void
 * - onSubmit: (e) => void
 * - onClose: () => void
 */
function CriarFuncionario({ form = {}, onChange = () => {}, onSubmit = () => {}, onClose = () => {} }) {
    return (
        // overlay: clicar fora fecha o modal
        <div className="filtro-preto" onClick={onClose}>
            {/* evita que clicar dentro do card feche o modal */}
            <form className="card-editar-informacoes" onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
                <TitleCard title="Cadastrar Novo Funcionário" onClose={onClose} />

                <InputField
                    label="Nome do Funcionário"
                    name="nome"
                    value={form.nome || ""}
                    placeholder="Insira o nome do Funcionário"
                    onChange={onChange}
                />

                <InputField
                    label="Senha do Funcionário"
                    name="senha"
                    value={form.senha || ""}
                    placeholder="Insira uma senha para o Funcionário"
                    onChange={onChange}
                />

                <InputField
                    label="Confirmar Senha"
                    name="confirmarSenha"
                    value={form.confirmarSenha || ""}
                    placeholder="Repita a senha"
                    onChange={onChange}
                />

                <SelectField
                    label="Hierarquia do Funcionário"
                    name="tipoUsuario"
                    value={form.tipoUsuario || ""}
                    options={["Vendedor", "Admin"]}
                    placeholder="Insira o tipo de Funcionário"
                    onChange={onChange}
                />

                <SubmitButton text="Cadastrar Funcionário" />
            </form>
        </div>
    );
}

export default CriarFuncionario;
