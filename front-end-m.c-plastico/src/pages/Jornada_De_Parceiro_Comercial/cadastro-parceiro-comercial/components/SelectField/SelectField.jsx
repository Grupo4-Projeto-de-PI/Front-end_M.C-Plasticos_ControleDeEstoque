import React from 'react';
import './SelectField.css';

const SelectField = ({ label, name, value, options, placeholder, onChange }) => (
    <div className="card-select">
        <p>{label}</p>
        <select name={name} value={value} onChange={onChange}>
            <option value="" disabled>{placeholder}</option>
            {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default SelectField;