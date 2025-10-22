import IconBack from '../../assets/icons/icon-back.svg'
import './header-2.css'

function Header2({text, onClickBack}) {
    return (
        <>
            <header className="header">
                <div className="voltar">
                    <img src={IconBack} alt="Voltar" id="img-back" onClick={onClickBack} />
                </div>
                <h1>{text}</h1>
            </header>
        </>
    )
}

export default Header2