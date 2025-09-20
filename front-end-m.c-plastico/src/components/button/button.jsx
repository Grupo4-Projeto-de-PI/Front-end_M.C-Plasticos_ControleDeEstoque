import './button.css'

function Button({ text, onClick }){
    return (
        <button type="button" className="button" onClick={onClick}>{text}</button>
    )
}

export default Button;