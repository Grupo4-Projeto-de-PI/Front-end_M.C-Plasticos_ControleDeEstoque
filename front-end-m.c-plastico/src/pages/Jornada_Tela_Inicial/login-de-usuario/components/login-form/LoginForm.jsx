import Button from "../../../../../components/button/button";
import './LoginForm.css';
import { useState } from 'react';

function LoginForm({handleLogin}) {
    const [formData, setFormData] = useState({
        codigoFuncionario: '',
        senhaLog: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id === 'codigo' ? 'codigoFuncionario' : 'senhaLog']: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(formData.codigoFuncionario, formData.senhaLog);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="codigo">Código Funcionário</label>
            <input 
                type="text" 
                id="codigo" 
                placeholder="Insira o código de funcionário" 
                value={formData.codigoFuncionario}
                onChange={handleChange}
            />

            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                id="senha" 
                placeholder="Insira a sua senha" 
                value={formData.senhaLog}
                onChange={handleChange}
            />

            <Button text="Entrar no sistema" />
        </form>
    );
}

export default LoginForm;
