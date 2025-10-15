
import './footer.css';
import iconProduto from '../../assets/icons/icone-produto.svg';
import iconEstoque from '../../assets/icons/icon-footer-estoque.svg';
import iconHistorico from '../../assets/icons/icon-footer-historico.svg';
import iconConta from '../../assets/icons/icon-footer-conta.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer>
            <div className="botoes-footer" onClick={() => navigate('/listar-produtos')}>
            <img src={iconProduto} alt="Botão Produtos" />
                <p>Produtos</p>
            </div>
            <div className="botoes-footer" onClick={() => navigate('/listar-estoque-atual')}>
            <img src={iconEstoque} alt="Botão Estoque" />
                <p>Estoque</p>
            </div>
            <div className="botoes-footer" onClick={() => navigate('/historico-transacao')}>
            <img src={iconHistorico} alt="Botão historico" />
                <p>Histórico</p>
            </div>
            <div className="botoes-footer" onClick={() => navigate('/conta')}>
            <img src={iconConta} alt="Botão Conta" />
                <p>Conta</p>
            </div>
        </footer>
    )
}

export default Footer;