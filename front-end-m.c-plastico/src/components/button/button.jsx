import './button.css'

function Button({ text }){
    return (
        <button type="submit" className="button">{text}</button>
    )
}

export default Button;