import { useState } from "react";
import "./card-criar-tipo-material.css";

export default function CardTipoMaterial({ onChangeTipoMaterial }) {
    const [tipoMaterial, setTipoMaterial] = useState("");

    const handleChange = (e) => {
        setTipoMaterial(e.target.value);
        onChangeTipoMaterial(e.target.value); // avisa o controller
    };

    return (
        <div className="card">
            <h2>Tipo de material</h2>
            <input
                type="text"
                className="valor"
                placeholder="Insira o nome do tipo do material"
                value={tipoMaterial}
                onChange={handleChange}
            />
        </div>
    );
}
