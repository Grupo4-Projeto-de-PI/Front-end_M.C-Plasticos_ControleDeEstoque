import { useRef } from 'react';
import UploadArquivo from '../../../../../assets/icons/icon-upload-arquivo.svg'
import './selecao-arquivo.css'

function SelecaoArquivo({ onCardClick, onFileChange, inputFileRef, nomeArquivo }) {
    return (
        <>
            <div className='card-principal'>
                <div className="card-text-principal">
                    <h2>Selecione um Arquivo</h2>
                </div>
                {nomeArquivo ? (
                    <>
                        <div className="card-upload" onClick={onCardClick}>
                            <p>Arquivo selecionado: <br /> {nomeArquivo}</p>
                        </div>
                        <input
                            type="file"
                            ref={inputFileRef}
                            accept=".xlsx"
                            onChange={onFileChange}
                            style={{ display: 'none' }}
                        />
                    </>
                ) : (
                    <>
                        <div className="card-upload" onClick={onCardClick} style={{ cursor: 'pointer' }}>
                            <img src={UploadArquivo} alt={'Seleção do Arquivo'} />
                            <h3>Selecione um Arquivo Excel</h3>
                        </div>
                        <input
                            type="file"
                            ref={inputFileRef}
                            accept=".xlsx"
                            onChange={onFileChange}
                            style={{ display: 'none' }}
                        />
                    </>
                )}
            </div>
        </>
    )
}

export default SelecaoArquivo;