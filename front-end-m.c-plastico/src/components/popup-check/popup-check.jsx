import './popup-check.css';
import iconCheck from '../../assets/img/icon_check.png';
import iconError from '../../assets/icons/error-icon.svg'

export function PopupCheck({ text, type }) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <span className="close" id="closeBtn">&times;</span>
                <img src={type === 'error' ? iconError : iconCheck} alt={type === 'error' ? "Error" : "Checkmark"} />
                <div className="fonte"><p>{text}</p></div>
            </div>
        </div>
    );
}

export default PopupCheck;
