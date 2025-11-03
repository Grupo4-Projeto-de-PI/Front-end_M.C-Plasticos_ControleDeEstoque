import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ text }) => (
    <div className="botao-confirmar">
        <button type="submit">{text}</button>
    </div>
);

export default SubmitButton;