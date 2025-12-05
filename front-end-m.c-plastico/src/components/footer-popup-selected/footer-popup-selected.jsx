import "./footer-popup-selected.css"
import { useState } from 'react';

function FooterPopupSelected({
    title, 
    onClickButton1, 
    onClickButton2, 
    button1Text, 
    button2Text, 
    onClose,
    button1Icon,
    button2Icon,
    button1ClassName = "button-footer",
    button2ClassName = "button-footer"
}) {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose && onClose();
        }, 200);
    }
    return (
        <>
        <div className={`overlay-footer ${closing ? 'closing' : ''}`} onClick={handleClose}></div>
            <div className={`footer-popup-selected ${closing ? 'closing' : ''}`}>
                <h1>{title}</h1>
                <div className="footer-popup-selected-content">
                    <button className={button1ClassName} onClick={onClickButton1}>
                        {button1Icon && <img src={button1Icon} alt={button1Text} />}
                        {button1Text}
                    </button>
                    <button className={button2ClassName} onClick={onClickButton2}>
                        {button2Icon && <img src={button2Icon} alt={button2Text} />}
                        {button2Text}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FooterPopupSelected;