import './popup-download-relatorio.css';

function PopupDownloadRelatorio({ onConfirm, onCancel }) {
    return (
        <>
            <div className="overlay-popup-download" onClick={onCancel}></div>
            <div className="popup-download-relatorio">
                <h1>Deseja baixar o relatório?</h1>
                <p>O relatório será gerado em formato PDF e baixado automaticamente.</p>
                <div className="popup-download-buttons">
                    <button className="btn-confirmar" onClick={onConfirm}>
                        Baixar Relatório
                    </button>
                    <button className="btn-cancelar" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </>
    );
}

export default PopupDownloadRelatorio;
