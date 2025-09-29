import '../css/login-de-usuario.css';
import LogoMC from '../../../../assets/img/McLogo.svg';
import LoginForm from '../components/login-form/LoginForm';

function LoginDeUsuario({handleLogin}) {
    return (
        <div className="login-container">
            <div className="logo">
                <img src={LogoMC} alt="" />
            </div>
            <h1>Bem-vindo(a) de volta!</h1>
            <LoginForm handleLogin={handleLogin} />
        </div>
    );
}

export default LoginDeUsuario;