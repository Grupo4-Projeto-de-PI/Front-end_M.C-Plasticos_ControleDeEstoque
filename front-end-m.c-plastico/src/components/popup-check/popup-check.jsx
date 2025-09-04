import './popup-check.css'
import iconCheck from '../../assets/i';

function PopupCheck({ text }) {
    return (
        <div className="overlay" id="overlay">
            <div className="popup">
                <span className="close" id="closeBtn">&times;</span>
                <img src={iconCheck} alt="Checkmark" />
                <div className="fonte"><p>{text}</p></div>
            </div>
        </div>
    );
}

export default PopupCheck;
