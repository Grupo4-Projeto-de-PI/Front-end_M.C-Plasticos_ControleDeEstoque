import React from 'react';
import "./InputField.css";

const InputField = ({ label, name, value, placeholder, onChange }) => (
    <div className="card-input">
        <p>{label}</p>
        <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);

export default InputField;