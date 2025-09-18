import './product-photo.css'
import IconCamera from '../../../../../assets/icons/icon_photo.svg'

function ProductPhoto() {
    return (
        <>
        <div className="card upload-card">
            <p className="label-produto">Imagem do Produto</p>
            <hr />
            <div className="upload-area">
                <div className="camera-icon">
                    <img src={IconCamera} alt="Camera" />
                </div>
                <p className="upload-text">Adicione uma nova<br />imagem para o produto</p>
            </div>
        </div>
        </>
    )
}

export default ProductPhoto;