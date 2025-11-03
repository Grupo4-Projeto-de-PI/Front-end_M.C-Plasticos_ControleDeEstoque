import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContaDoUsuario from '../view/conta-do-usuario.jsx';
import api from '../../../../service/axios-config.js';
import Swal from 'sweetalert2';
import '../../../../assets/css/sweet-alert-custom.css';

function ContaDoUsuarioController() {
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState("Carregando...");
    const [dadosUsuario, setDadosUsuario] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const carregarDadosUsuario = async () => {
        try {
            setIsLoading(true);
            
            const nomeSession = sessionStorage.getItem('nome');
            const codigoFuncionario = sessionStorage.getItem('codigoFuncionario');
            const tipoUsuario = sessionStorage.getItem('tipoUsuario');

            if (nomeSession) {
                setNomeUsuario(nomeSession);
                setDadosUsuario({
                    nome: nomeSession,
                    codigoFuncionario: codigoFuncionario,
                    tipoUsuario: tipoUsuario
                });
            }

            if (codigoFuncionario) {
                try {
                    const response = await api.get(`/usuario/${codigoFuncionario}`);
                    if (response.status === 200 && response.data) {
                        const dadosAPI = response.data;
                        setNomeUsuario(dadosAPI.nome);
                        setDadosUsuario(dadosAPI);
                        
                        sessionStorage.setItem('nome', dadosAPI.nome);
                    }
                } catch (apiError) {
                    console.log('Usuário carregado do sessionStorage (API indisponível)');
                }
            }

        } catch (error) {
            console.error('Erro ao carregar dados do usuário:', error);
            setNomeUsuario("Usuário");
        } finally {
            setIsLoading(false);
        }
    };

    const navegarPara = (pagina) => {
        const rotas = {
            'perfil': '/perfil-usuario', 
            'admin': '/admin-funcionarios',
            'manual': '/manual-sistema' 
        };

        if (rotas[pagina]) {
            navigate(rotas[pagina]);
        }
    };

    const handleLogout = async () => {
        try {
            const result = await Swal.fire({
                icon: 'question',
                title: 'Sair da conta',
                text: 'Tem certeza que deseja sair da conta?',
                showCancelButton: true,
                confirmButtonColor: '#FF0000',
                cancelButtonColor: '#194E91',
                confirmButtonText: 'Sim, sair',
                cancelButtonText: 'Cancelar',
                customClass: {
                    icon: 'custom-question-icon'
                }
            });

            if (result.isConfirmed) {
                sessionStorage.clear();
                
                Swal.fire({
                    icon: 'success',
                    title: 'Logout realizado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#4caf50',
                    customClass: {
                        icon: 'custom-success-icon'
                    }
                });

                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        } catch (error) {
            console.error('Erro no logout:', error);

            sessionStorage.clear();
            navigate('/');
        }
    };

    const verificarAutenticacao = () => {
        const nome = sessionStorage.getItem('nome');
        const codigoFuncionario = sessionStorage.getItem('codigoFuncionario');
        
        if (!nome || !codigoFuncionario) {
            console.log('Usuário não autenticado, redirecionando...');
            
            Swal.fire({
                icon: 'warning',
                title: 'Sessão expirada',
                text: 'Por favor, faça login novamente.',
                showConfirmButton: false,
                timer: 2000,
                iconColor: '#ff9800'
            });

            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    useEffect(() => {
        verificarAutenticacao();
        carregarDadosUsuario();
    }, []);

    const getMenuOptions = () => {
        const tipoUsuario = sessionStorage.getItem('tipoUsuario');
        
        const opcoesPadrao = [
            {
                id: 'perfil',
                icone: 'icon_conta_sem_borda.svg',
                texto: 'Meu Perfil',
                action: () => navegarPara('perfil')
            },
            {
                id: 'manual',
                icone: 'icon_manual.svg',
                texto: 'Manual de Uso do Sistema',
                action: () => navegarPara('manual')
            }
        ];

        if (tipoUsuario && tipoUsuario.toLowerCase().includes('admin')) {
            opcoesPadrao.splice(1, 0, {
                id: 'admin',
                icone: 'icon_administrador.svg', 
                texto: 'Tela de administrador',
                action: () => navegarPara('admin')
            });
        }

        return opcoesPadrao;
    };

    if (isLoading) {
        return (
            <ContaDoUsuario 
                nomeUsuario="Carregando..."
                menuOptions={[]}
                onLogout={handleLogout}
            />
        );
    }

    return (
        <ContaDoUsuario 
            nomeUsuario={nomeUsuario}
            menuOptions={getMenuOptions()}
            onLogout={handleLogout}
        />
    );
}

export default ContaDoUsuarioController;
