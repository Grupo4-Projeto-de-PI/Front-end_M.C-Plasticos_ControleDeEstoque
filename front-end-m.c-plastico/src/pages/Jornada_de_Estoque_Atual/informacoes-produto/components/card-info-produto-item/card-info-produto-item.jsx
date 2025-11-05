// CardItem.jsx
import '../../css/card-info-produto-item.css';

export default function CardItem({ label, value, valueClass = "" }) {
  return (
    <div className="info-item">
      <p className="label">{label}</p>
      <p className={`valor ${valueClass}`}>{value}</p>
    </div>
  );
}
