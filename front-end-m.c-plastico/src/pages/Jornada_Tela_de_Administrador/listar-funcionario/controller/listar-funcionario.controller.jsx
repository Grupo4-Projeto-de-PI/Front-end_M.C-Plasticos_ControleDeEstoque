import { useState, useEffect } from "react";
import ListarFuncionario from "../view/listar-funcionario";
import api from "../../../../service/axios-config";

function ListarFuncionarioController() {
  const [funcionarios, setFuncionarios] = useState([]);
  const baseUrl = '/usuario';

  const listaFuncionarios = async () => {
    try {
      const response = await api.get(`${baseUrl}`);
      const dataCard = response.data.map(funcionario => ({
        nome: funcionario.nome,
        codigoFuncionario: funcionario.codigoFuncionario,
        tipoUsuario: funcionario.tipoUsuario
      }));
      setFuncionarios(dataCard);
    } catch (error) {
      console.log('Erro ao listar funcionários:', error);
    }
  };

  useEffect(() => {
    listaFuncionarios();
  }, []);

  return (
    <ListarFuncionario funcionarios={funcionarios} />
  );
}

export default ListarFuncionarioController;
