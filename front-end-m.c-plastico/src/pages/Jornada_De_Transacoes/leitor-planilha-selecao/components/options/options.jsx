import SetaDireita from '../../../../../assets/icons/icon_seta_direita.svg'
import './options.css'
function Options({ text1, text2, onClickEntrada, onClickSaida }) {
    return (
        <>
            <div className="option-button" onClick={onClickEntrada}>
                <p>{text1}</p>
                <img src={SetaDireita} alt="seleção" />
            </div>
            <div className="option-button" onClick={onClickSaida}>
                <p>{text2}</p>
                <img src={SetaDireita} alt="seleção" />
            </div>
        </>
    )
}

export default Options;