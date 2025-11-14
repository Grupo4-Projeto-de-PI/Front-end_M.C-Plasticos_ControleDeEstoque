import Logo from '../../assets/img/logo-grande.svg'
import LoadingGif from '../../assets/icons/loading-image.gif'
import './loading.css'
function LoadingPage() {
    return (
        <div className='loading-page-principal'>
            <img src={Logo} alt="Loading..." />
            <div className='text-loading'>
                <h2>Fazendo Leitura</h2>
                <img src={LoadingGif} alt="Carregando" />
            </div>
        </div>
    )
}

export default LoadingPage