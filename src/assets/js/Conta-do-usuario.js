// Conta do Usuário - Funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos da página
    const opcoesMenu = document.querySelectorAll('.opcao-menu');
    const btnSairConta = document.querySelector('.btn-sair-conta');
    const botoesFooter = document.querySelectorAll('.botoes-footer');

    // Função para navegar entre páginas
    function navegarPara(pagina) {
        const rotas = {
            'perfil': '../Jornada_Tela_Inicial/Login_de_usuario.html', // Placeholder - ajustar quando criar
            'admin': '../Jornada_Tela_de_Administrador/Listagem_de_funcionario.html',
            'manual': '#', // Placeholder - criar página de manual
            'inicio': '../Jornada_Tela_Inicial/Login_de_usuario.html', // Ajustar para página inicial
            'estoque': '../Jornada_De_Produtos/Listagem-produtos.html',
            'historico': '../Jornada_De_Transacoes/Listar-historico.html',
            'conta': '#' // Página atual
        };

        if (rotas[pagina] && rotas[pagina] !== '#') {
            window.location.href = rotas[pagina];
        }
    }

    // Event listeners para opções do menu
    opcoesMenu.forEach(opcao => {
        opcao.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            
            // Adicionar estado de loading
            this.classList.add('loading');
            
            // Simular delay mínimo para feedback visual
            setTimeout(() => {
                switch(action) {
                    case 'perfil':
                        console.log('Navegando para Meu Perfil...');
                        navegarPara('perfil');
                        break;
                    case 'admin':
                        console.log('Navegando para Tela de Administrador...');
                        navegarPara('admin');
                        break;
                    case 'manual':
                        console.log('Abrindo Manual de Uso do Sistema...');
                        alert('Manual de Uso do Sistema em desenvolvimento');
                        this.classList.remove('loading');
                        break;
                    default:
                        this.classList.remove('loading');
                        break;
                }
            }, 200);
        });
    });

    // Event listener para botão sair da conta
    btnSairConta.addEventListener('click', function() {
        const confirmar = confirm('Tem certeza que deseja sair da conta?');
        
        if (confirmar) {
            this.classList.add('loading');
            this.textContent = 'Saindo...';
            
            // Simular processo de logout
            setTimeout(() => {
                console.log('Usuário deslogado');
                // Limpar dados do localStorage se houver
                localStorage.clear();
                sessionStorage.clear();
                
                // Redirecionar para tela de login
                window.location.href = '../Jornada_Tela_Inicial/Login_de_usuario.html';
            }, 1500);
        }
    });

    // Event listeners para footer
    botoesFooter.forEach(botao => {
        botao.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Navegar para a página selecionada
            if (page !== 'conta') {
                navegarPara(page);
            }
            // Se for a página atual (conta), não faz nada
        });
    });

    // Função para atualizar nome do usuário dinamicamente (para integração futura)
    function atualizarNomeUsuario(nome) {
        const tituloSaudacao = document.querySelector('.saudacao-texto h1');
        if (tituloSaudacao && nome) {
            tituloSaudacao.textContent = `Olá, ${nome}`;
        }
    }

    // Função para carregar dados do usuário (placeholder para integração com backend)
    function carregarDadosUsuario() {
        // Placeholder - será implementado na integração com backend
        const usuarioLogado = localStorage.getItem('usuarioLogado');
        
        if (usuarioLogado) {
            try {
                const dados = JSON.parse(usuarioLogado);
                atualizarNomeUsuario(dados.nome);
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        }
    }

    // Verificar se usuário está logado
    function verificarAutenticacao() {
        const token = localStorage.getItem('authToken');
        const usuarioLogado = localStorage.getItem('usuarioLogado');
        
        if (!token || !usuarioLogado) {
            console.log('Usuário não autenticado, redirecionando...');
            // Redirecionar para login se não autenticado
            // window.location.href = '../Jornada_Tela_Inicial/Login_de_usuario.html';
        }
    }

    // Inicializar página
    carregarDadosUsuario();
    verificarAutenticacao();

    // Adicionar efeitos visuais adicionais
    opcoesMenu.forEach((opcao, index) => {
        opcao.style.animationDelay = `${index * 0.1}s`;
    });

    console.log('Página Conta do Usuário carregada com sucesso');
});