import './product-photo.css'
import IconCamera from '../../../../../assets/icons/icon_photo.svg'
import { useRef } from 'react'

function ProductPhoto({ selectedImage, onImageChange }) {
    const fileInputRef = useRef(null);
    
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            onImageChange(file);
        }
    };
    
    const handleAreaClick = () => {
        fileInputRef.current.click();
    };
    
    return (
        <>
        <div className="card upload-card">
            <p className="label-produto">Imagem do Produto</p>
            <hr />
            <div className="upload-area" onClick={handleAreaClick} style={{ cursor: 'pointer' }}>
                {selectedImage ? (
                    <div className="product-image-preview">
                        <img 
                            src={selectedImage} 
                            alt="Imagem do Produto" 
                            style={{ 
                                maxWidth: '120px', 
                                maxHeight: '120px', 
                                objectFit: 'contain' 
                            }} 
                        />
                    </div>
                ) : (
                    <>
                        <div className="camera-icon">
                            <img src={IconCamera} alt="Camera" />
                        </div>
                        <p className="upload-text">Adicione uma nova<br />imagem para o produto</p>
                    </>
                )}
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    style={{ display: 'none' }} 
                />
            </div>
        </div>
        </>
    )
}

export default ProductPhoto;