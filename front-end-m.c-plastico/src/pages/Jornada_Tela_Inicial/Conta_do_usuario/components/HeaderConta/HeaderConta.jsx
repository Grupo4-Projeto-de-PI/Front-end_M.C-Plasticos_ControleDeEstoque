import React from 'react';
import logoMc from '../../../../../assets/icons/logo-mc.svg';
import './HeaderConta.css';

function HeaderConta({ nomeUsuario = "Ivo Santos" }) {
    return (
        <header className="header-conta">
            <div className="saudacao-container">
                <div className="saudacao-texto">
                    <h1>Olá, {nomeUsuario}</h1>
                    <p className="subtitulo">O que vai querer mexer hoje?</p>
                </div>
                <div className="logo-container">
                    <img 
                        src={logoMc} 
                        alt="M.C Plásticos Logo" 
                        className="logo-mc"
                    />
                </div>
            </div>
        </header>
    );
}

export default HeaderConta;