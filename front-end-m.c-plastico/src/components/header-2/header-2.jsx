import IconBack from '../../assets/icons/icon-back.svg';
import './header-2.css';
import iconPencil from '../../assets/icons/icon-pencil.svg';
import Logo from '../../assets/img/McLogo.svg';

function Header2({ text, onClickBack, pencil = true, onClickPencil, logo = true }) {
    return (
        <>
            <header className="header-2">
                <div className="voltar">
                    <img
                        src={IconBack}
                        alt="Voltar"
                        id="img-back"
                        onClick={onClickBack}
                    />
                </div>
                <h1>{text}</h1>
                {pencil && (
                    <div
                        className="edit-icon-container"
                        onClick={onClickPencil}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={iconPencil}
                            alt="Editar"
                            className="edit-icon"
                        />
                    </div>
                )}
                {logo && (
                    <img 
                    src={Logo} 
                    alt="Logo" 
                    style={{ height: '65px', width: '60px' }}
                    />
                )}
            </header>
        </>
    );
}

export default Header2;
