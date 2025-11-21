import { useState, useEffect, useRef } from 'react';
import './form-card-search-produto-novo-historico.css';

function FormCardSearchProdutoNovoHistorico({ title, label, fieldName, setFormulario, buscarProdutos }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = async (value) => {
        setSearchTerm(value);
        setSelectedProduct(null);
        setFormulario(fieldName, '');

        if (value.trim().length > 0) {
            const produtos = await buscarProdutos(value);
            setOptions(produtos);
            setShowDropdown(true);
        } else {
            setOptions([]);
            setShowDropdown(false);
        }
    };

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        setSearchTerm(product.nome);
        setFormulario(fieldName, product.id);
        setShowDropdown(false);
    };

    return (
        <>
            <div className="info-item search-wrapper" ref={dropdownRef}>
                <p className="label">{title}</p>
                <input
                    type="text"
                    className="valor search-input"
                    placeholder={label}
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => {
                        if (options.length > 0) {
                            setShowDropdown(true);
                        }
                    }}
                />
                {showDropdown && options.length > 0 && (
                    <ul className="dropdown-list">
                        {options.map((product) => (
                            <li
                                key={product.id}
                                className="dropdown-item"
                                onClick={() => handleSelectProduct(product)}
                            >
                                {product.nome}
                            </li>
                        ))}
                    </ul>
                )}
                {showDropdown && options.length === 0 && searchTerm.trim().length > 0 && (
                    <ul className="dropdown-list">
                        <li className="dropdown-item no-results">Nenhum produto encontrado</li>
                    </ul>
                )}
            </div>
            <hr />
        </>
    );
}

export default FormCardSearchProdutoNovoHistorico;
