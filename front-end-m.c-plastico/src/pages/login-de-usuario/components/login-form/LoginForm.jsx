import Button from "../../../../components/button/button";
import './LoginForm.css';

function LoginForm() {
    return (
        <form>
            <label htmlFor="codigo">Código Funcionário</label>
            <input type="text" id="codigo" placeholder="Insira o código de funcionário" />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Insira a sua senha" />

            <Button text="Entrar no sistema" />
        </form>
    );
}

export default LoginForm;
