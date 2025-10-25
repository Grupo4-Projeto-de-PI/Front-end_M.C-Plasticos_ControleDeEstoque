import React, { useState } from 'react';
import './LogoutButton.css';

function LogoutButton({ onLogout }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        
        if (onLogout) {
            await onLogout();
        }
        
        setIsLoading(false);
    };

    return (
        <div className="botao-sair-container">
            <button 
                className="btn-sair-conta-custom"
                onClick={handleLogout}
                disabled={isLoading}
            >
                {isLoading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="loading-spinner"></div>
                        Saindo...
                    </div>
                ) : (
                    'Sair da conta'
                )}
            </button>
        </div>
    );
}

export default LogoutButton;