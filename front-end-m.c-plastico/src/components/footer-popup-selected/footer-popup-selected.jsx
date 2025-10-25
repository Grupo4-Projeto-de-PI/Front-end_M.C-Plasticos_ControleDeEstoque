import "./footer-popup-selected.css"

function FooterPopupSelected({title, onClickButton1, onClickButton2, button1Text, button2Text, onClose}) {
    return (
        <>
        <div className="overlay-footer" onClick={onClose}></div>
            <div className="footer-popup-selected">
                <h1>{title}</h1>
                <div className="footer-popup-selected-content">
                    <button className="button-footer" onClick={onClickButton1}>{button1Text}</button>
                    <button className="button-footer" onClick={onClickButton2}>{button2Text}</button>
                </div>
            </div>
        </>
    )
}

export default FooterPopupSelected;