
import './footer.css';
import iconProduto from '../../assets/icons/icone-produto.svg';
import iconEstoque from '../../assets/icons/icon-footer-estoque.svg';
import iconHistorico from '../../assets/icons/icon-footer-historico.svg';
import iconConta from '../../assets/icons/icon-footer-conta.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname || '/';

    const footer = (
        <footer className="footer" aria-hidden={false}>
            <div className={`botoes-footer ${path.startsWith('/listar-produtos') ? 'active' : ''}`} onClick={() => navigate('/listar-produtos')}>
                <img src={iconProduto} alt="Botão Produtos" />
                <p>Produtos</p>
            </div>
            <div className={`botoes-footer ${path.startsWith('/listar-estoque-atual') ? 'active' : ''}`} onClick={() => navigate('/listar-estoque-atual')}>
                <img src={iconEstoque} alt="Botão Estoque" />
                <p>Estoque</p>
            </div>
            <div className={`botoes-footer ${path.startsWith('/historico-transacao') ? 'active' : ''}`} onClick={() => navigate('/historico-transacao')}>
                <img src={iconHistorico} alt="Botão historico" />
                <p>Registro</p>
            </div>
            <div className={`botoes-footer ${path.startsWith('/conta') ? 'active' : ''}`} onClick={() => navigate('/conta')}>
                <img src={iconConta} alt="Botão Conta" />
                <p>Conta</p>
            </div>
        </footer>
    );

    if (typeof document !== 'undefined') {
        return createPortal(footer, document.body);
    }

    return footer;
}

export default Footer;