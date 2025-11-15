import Logo from '../../assets/img/logo-grande.svg'
import LoadingGif from '../../assets/icons/loading-image.gif'
import Button from '../button/button';
import './loading.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoadingPage({ estado, quantidadeDados, onTentarNovamente }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (estado === 'sucesso') {
            setTimeout(() => {
                navigate('/historico-transacao')
            }, 3000);
        }
    }, [estado]);

    return (
        <div className='loading-page-principal'>
            {estado === 'carregando' ? (
                <>
                    <img src={Logo} alt="Loading..." />
                    <div className='text-loading'>
                        <h2>Fazendo Leitura</h2>
                        <img src={LoadingGif} alt="Carregando" />
                    </div>
                </>
            ) : estado === 'erro' ? (
                <>
                    <img src={Logo} alt="Loading..." />
                    <div className='text-error'>
                        <h2> <span className='span-error'>Erro</span> ao Extrair os Dados</h2>
                        <Button text={'Tente Novamente'} onClick={onTentarNovamente} />
                    </div>
                </>
            ) : estado === 'sucesso' ? (
                <>
                    <img src={Logo} alt="Loading..." />
                    <div className='text-success'>
                        <h2>Dados Extraído com <span className='span-success'>Sucesso</span></h2>
                        <p>Quantidade de Dados Extraídos: {quantidadeDados}</p>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default LoadingPage