import React from 'react';
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
    return (
        <div className="filtro-preto">
            <form className="card-editar-informacoes" onSubmit={handleSubmit}>
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
