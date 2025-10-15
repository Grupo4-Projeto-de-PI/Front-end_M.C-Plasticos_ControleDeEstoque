import CriarProduto from '../view/criar-produto';
import { useState, useEffect } from 'react';
import api from '../../../../../service/axios-config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function CriarProdutoController() {
  const baseUrlProduto = '/produto';
  const baseUrlTipoProduto = '/tipo-produto';
  const navigate = useNavigate();

  const arrowBack = () => {
    navigate("/listar-produtos");
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [tipoProduto, setTipoProduto] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [tipoProdutoSelecionado, setTipoProdutoSelecionado] = useState("");
  const [prioridade, setPrioridade] = useState("");

  //Use Effect para limpar url da imagem quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  const handleImageChange = (file) => {
    if (file && file.type.includes('image')) {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }

      // Armazena o arquivo bruto para envio posterior
      setImageFile(file);

      // Cria URL para preview da imagem dentro do card de upload
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      return imageUrl;
    }

    return null;
  };

  const getTipoProduto = async () => {
    try {
      const response = await api.get(`${baseUrlTipoProduto}`);
      const products = []

      response.data.forEach((tipoProduto) => {
        products.push({ id: tipoProduto.id, tipo: tipoProduto.tipo });
      });

      setTipoProduto(products);
    }
    catch (error) {
      console.log('Erro ao listar produtos:', error);
      throw error;
    }
  }

  useEffect(() => {
    getTipoProduto();
  }, [setTipoProduto]);


  const postProduto = async () => {
    try {
      const formData = new FormData();

      // Cria um blob com o JSON para a parte "produto"
      const produtoBlob = new Blob([JSON.stringify({
        nome: nomeProduto,
        tipo: Number(tipoProdutoSelecionado),
        fkUsuario: Number(sessionStorage.getItem("codigoFuncionario")),
        prioridade: Number(prioridade)
      })], { type: "application/json" });

      formData.append("produto", produtoBlob);

      // Adiciona o arquivo se houver
      if (imageFile) {
        formData.append("fotoProduto", imageFile);
      }

      const response = await api.post(`${baseUrlProduto}`, formData);

      if(response.status === 201){
        Swal.fire({
        icon: 'success',
        title: 'Produto criado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      }
      
      return response.data;
    } catch (error) {
      console.log('Erro ao criar produto:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao criar produto',
        text: 'Erro ao criar produto. Por favor, tente novamente.',
        showConfirmButton: false,
      });
      throw error;
    }
  }

  return (
    <CriarProduto
      selectedImage={selectedImage}
      handleImageChange={handleImageChange}
      tipoProduto={tipoProduto}
      postProduto={postProduto}
      setNomeProduto={setNomeProduto}
      setTipoProdutoSelecionado={setTipoProdutoSelecionado}
      setPrioridade={setPrioridade}
      arrowBack={arrowBack}
    />
  );
};

export default CriarProdutoController;