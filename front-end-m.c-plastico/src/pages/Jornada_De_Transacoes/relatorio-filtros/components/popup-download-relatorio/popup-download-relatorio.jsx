import './popup-download-relatorio.css';
import { useState } from 'react';

function PopupDownloadRelatorio({ onConfirm, onCancel }) {
    const [closing, setClosing] = useState(false);

    const handleCancel = () => {
        setClosing(true);
        setTimeout(() => {
            onCancel && onCancel();
        }, 180);
    }

    return (
        <>
            <div className={`overlay-popup-download ${closing ? 'closing' : ''}`} onClick={handleCancel}></div>
            <div className={`popup-download-relatorio ${closing ? 'closing' : ''}`}>
                <h1>Deseja baixar o relatório?</h1>
                <p>O relatório será gerado em formato PDF e baixado automaticamente.</p>
                <div className="popup-download-buttons">
                    <button className="btn-confirmar" onClick={onConfirm}>
                        Baixar Relatório
                    </button>
                    <button className="btn-cancelar" onClick={handleCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </>
    );
}

export default PopupDownloadRelatorio;
