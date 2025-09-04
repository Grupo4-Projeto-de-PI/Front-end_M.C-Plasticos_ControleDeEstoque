import './css/login-de-usuario.css'
import LogoMC from '../../assets/img/logo/McLogo.svg'
import LoginForm from './components/login-form/LoginForm'
import PopupCheck from '../../components/popup-check/popup-check';

function LoginDeUsuario() {
    return (
        <div className="login-container">
            <div className="logo">
                <img src={LogoMC} alt="" />
            </div>
            <h1>Bem-vindo(a) de volta!</h1>
            <LoginForm />
            <PopupCheck text="Login realizado com sucesso!" />
        </div>
    );
}

export default LoginDeUsuario;