import React from "react";
import fecharIcon from "../../../../../assets/icons/icon_fechar.svg";

const TitleCard = ({ title, onClose }) => (
    <div className="titulo-card">
        <h2>{title}</h2>
        <img
            src={fecharIcon}
            alt="Fechar Tela de Editar Informações do Parceiro"
            style={{ cursor: "pointer" }}
            onClick={onClose}
        />
    </div>
);

export default TitleCard;