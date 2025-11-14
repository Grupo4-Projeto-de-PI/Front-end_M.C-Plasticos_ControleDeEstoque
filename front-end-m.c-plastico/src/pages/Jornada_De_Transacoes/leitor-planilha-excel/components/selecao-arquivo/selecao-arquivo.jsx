import UploadArquivo from '../../../../../assets/icons/icon-upload-arquivo.svg'
import './selecao-arquivo.css'
function SelecaoArquivo() {
    return (
        <>
            <div className='card-principal'>
                <div className="card-text-principal">
                    <h2>Selecione um Arquivo</h2>
                </div>
                <div className="card-upload">
                    <img src={UploadArquivo} alt={'Seleção do Arquivo'} />
                    <h3>Selecione um Arquivo Excel</h3>
                </div>
            </div>
        </>
    )
}

export default SelecaoArquivo;