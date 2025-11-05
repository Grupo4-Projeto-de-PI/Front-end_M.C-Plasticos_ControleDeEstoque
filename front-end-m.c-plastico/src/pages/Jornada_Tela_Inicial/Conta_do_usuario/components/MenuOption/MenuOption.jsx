import React from 'react';
import iconSetaDireita from '../../../../../assets/icons/icon_seta_direita.svg';
import './MenuOption.css';

function MenuOption({ icone, texto, onClick, className = "" }) {
    return (
        <div 
            className={`opcao-menu ${className}`} 
            onClick={onClick}
        >
            <div className="opcao-info">
                <img src={icone} alt={texto} className="opcao-icone" />
                <span className="opcao-texto">{texto}</span>
            </div>
            <img 
                src={iconSetaDireita} 
                alt="Ir para" 
                className="seta-direita" 
            />
        </div>
    );
}

export default MenuOption;