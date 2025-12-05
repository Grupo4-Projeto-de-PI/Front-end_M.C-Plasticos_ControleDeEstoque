import React, { useState } from 'react';
import "../css/editar-hierarquia.css";
import TitleCard from '../components/TitleCard/TitleCard';
import SelectField from '../components/SelectField/SelectField';
import SubmitButton from '../components/SubmitButton/SubmitButton';

const EditarHierarquia = ({
    formData,
    handleChange,
    handleSubmit,
    onClose
}) => {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose && onClose();
        }, 180);
    }

    return (
        <div className={`filtro-preto ${closing ? 'closing' : ''}`} onClick={handleClose}>
            <form className={`card-editar-informacoes ${closing ? 'closing' : ''}`} onSubmit={handleSubmit}>
                <TitleCard title="Editar Funcionário" onClose={onClose} />
          
                <SelectField
                    label="Hierarquia do Funcionário"
                    name="tipoUsuario"
                    value={formData.tipoUsuario}
                    options={["Vendedor", "Admin"]}
                    placeholder="Selecione a hierarquia"
                    onChange={handleChange}
                />
                
                <SubmitButton text="Confirmar Edição" />
            </form>
        </div>
    );
};

export default EditarHierarquia;
