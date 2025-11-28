import './metrica-card.css';

function MetricaCard({ titulo, valor, icone, cor = '#333' }) {
    return (
        <div className="metrica-card" style={{ borderLeftColor: cor }}>
            <div className="metrica-header">
                {icone && <span className="metrica-icone">{icone}</span>}
                <h3 className="metrica-titulo">{titulo}</h3>
            </div>
            <p className="metrica-valor" style={{ color: cor }}>{valor}</p>
        </div>
    );
}

export default MetricaCard;
