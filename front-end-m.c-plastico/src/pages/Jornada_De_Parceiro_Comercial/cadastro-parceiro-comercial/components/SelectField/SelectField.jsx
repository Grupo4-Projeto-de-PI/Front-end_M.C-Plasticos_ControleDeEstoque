import React from 'react';
import './SelectField.css';
import setaIcon from '../../../../../assets/icons/icon-seta-select.svg';

const SelectField = ({ label, name, value, options, placeholder, onChange }) => (
    <div className="card-select">
        <p>{label}</p>
        <div className="select-wrapper">
            <select name={name} value={value} onChange={onChange}>
                <option value="" disabled>{placeholder}</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <img src={setaIcon} alt="Seta" className="select-arrow" />
        </div>
    </div>
);

export default SelectField;