import React from 'react';
import HeaderConta from '../components/HeaderConta/HeaderConta.jsx';
import MenuOption from '../components/MenuOption/MenuOption.jsx';
import LogoutButton from '../components/LogoutButton/LogoutButton.jsx';
import Footer from '../../../../components/footer/footer.jsx';
import iconContaSemBorda from '../../../../assets/icons/icon_conta_sem_borda.svg';
import iconAdministrador from '../../../../assets/icons/icon_administrador.svg';
import iconManual from '../../../../assets/icons/icon_manual.svg';
import '../css/conta-do-usuario.css';

function ContaDoUsuario({ nomeUsuario, menuOptions, onLogout }) {

    const iconMap = {
        'icon_conta_sem_borda.svg': iconContaSemBorda,
        'icon_administrador.svg': iconAdministrador,
        'icon_manual.svg': iconManual
    };

    return (
        <div className="page-conta-usuario">
            <HeaderConta nomeUsuario={nomeUsuario} />
            <main className="conteudo-principal scrollable-content">
                <div className="menu-opcoes fade-in">
                    {menuOptions.map((option) => (
                        <MenuOption
                            key={option.id}
                            icone={iconMap[option.icone]}
                            texto={option.texto}
                            onClick={option.action}
                            className="hover:bg-blue-50 transition-colors duration-200"
                        />
                    ))}
                </div>
                <LogoutButton onLogout={onLogout} />
            </main>
            <Footer />
        </div>
    );
}

export default ContaDoUsuario;
